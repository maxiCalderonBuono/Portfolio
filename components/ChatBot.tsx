import React, { useEffect, useRef, useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { ANSWERS } from "./utils/answers";
import { getAiResponse } from "../helpers/getAiResponse";

type Message = {
  id: string;
  type: "bot" | "user" | "error";
  text: React.ReactNode;
};

type Props = {
  initialMessage: string;
};

export const ChatBot = ({ initialMessage }: Props) => {
  const [messages, setMessages] = useState<Message[]>(() =>
    initialMessage
      ? [
          {
            id: "1",
            type: "bot",
            text: (
              <div className="flex items-center gap-2">
                <img
                  alt="Codey face"
                  src="https://res.cloudinary.com/dvqlenul5/image/upload/v1677154574/571-5718065_bot-autoresponder-clipart_mj2gs1.webp"
                  className="w-8 h-8"
                />
                <p className="m-0">{initialMessage}</p>
              </div>
            ),
          },
        ]
      : []
  );

  const [question, setQuestion] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [prediction, setPrediction] = useState<string>("");

  const container = useRef<HTMLDivElement>(null);
  const lastChild = useRef<HTMLDivElement>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (isLoading) return;

    setIsLoading(true);
    setMessages((messages) =>
      messages.concat({ id: String(Date.now()), type: "user", text: question })
    );

    setQuestion("");

    if (prediction === "help" && question === "1") {
      setIsLoading(false);
      setMessages((messages) =>
        messages.concat({
          id: String(Date.now() + 1),
          type: "bot",
          text: ANSWERS["me"],
        })
      );

      return;
    } else if (prediction === "help" && question === "2") {
      setIsLoading(false);
      setMessages((messages) =>
        messages.concat({
          id: String(Date.now() + 1),
          type: "bot",
          text: ANSWERS["job"],
        })
      );

      return;
    } else if (prediction === "help" && question === "3") {
      setIsLoading(false);
      setMessages((messages) =>
        messages.concat({
          id: String(Date.now() + 1),
          type: "bot",
          text: ANSWERS["tech"],
        })
      );

      return;
    }

    const response = await getAiResponse(question);

    if (response.type === "error") {
      setIsLoading(false);
      setMessages((messages) =>
        messages.concat({
          id: String(Date.now()),
          type: "error",
          text: response.content,
        })
      );

      return;
    }

    setIsLoading(false);

    setPrediction(response.content || "default");

    setMessages((messages) =>
      messages.concat({
        id: String(Date.now()),
        type: "bot",
        text: ANSWERS[response.content] || ANSWERS["default"],
      })
    );
  };

  useEffect(() => {
    container.current?.scrollTo(0, lastChild.current.offsetTop - 100);
  }, [messages]);

  return (
    <section className="w-full px-5  md:w-3/5">
      <div className="absolute left-auto w-48 h-48 bg-purple-300 rounded-full md:w-64 md:h-64 opacity-40 top-48 md:top-4 md:-left-0 lg:top-28 lg:left-56 filter blur-xl animate-blob"></div>
      <div className="absolute left-0 right-0 w-48 h-48 m-auto bg-yellow-300 rounded-full md:w-64 md:h-64 opacity-40 top-36 md:top-10 md:right-10 lg:right-56 md:left-auto filter blur-xl animate-blob animation-delay-2000"></div>
      <div className="absolute left-0 w-48 h-48 bg-pink-300 rounded-full md:w-64 md:h-64 opacity-40 md:left-96 md:top-4 md:-bottom-10 bottom-4 filter blur-xl animate-blob animation-delay-4000"></div>
      <div className="absolute w-48 h-48 bg-blue-300 rounded-full right-10 md:w-64 md:h-64 opacity-40 md:right-48 bottom-48 md:top-28 filter blur-xl animate-blob animation-delay-4000"></div>
      <div className="absolute w-48 h-48 bg-green-300 rounded-full md:w-64 md:h-64 md:right-8 right-10 opacity-40 bottom-4 lg:left-96 filter blur-xl animate-blob"></div>
      <div className="relative p-4 border border-gray-400 rounded-lg dark:bg-gray-900 bg-slate-200 ">
        <div
          className="flex flex-col w-full gap-4 md:h-[350px] h-[400px] overflow-y-auto "
          ref={container}
        >
          {messages.map((message) => (
            <div
              key={message.id}
              ref={lastChild}
              className={`p-4  max-w-[80%] rounded-3xl ${
                message.type === "bot"
                  ? "bg-slate-600 self-start rounded-bl-none text-white"
                  : message.type === "user"
                  ? "dark:bg-blue-500 bg-cyan-500 self-end rounded-br-none text-white"
                  : "bg-red-300 self-start rounded-bl-none text-red-900 font-bold"
              }`}
            >
              {message.text}
            </div>
          ))}

          <div
            className={`p-4 text-white max-w-[80%] rounded-3xl bg-slate-600 self-start rounded-bl-none blo  ${
              isLoading ? "block" : "hidden"
            }`}
          >
            {ANSWERS["answering"]}
          </div>
        </div>
        <form
          className="flex items-center gap-4 m-0 mt-8"
          onSubmit={handleSubmit}
        >
          <input
            className="flex-1 px-4 py-2 mb-0 text-gray-900 border-2 border-gray-400 rounded-md focus:border-gray-500 dark:focus:border-gray-300 focus:outline-none dark:text-white bg-slate-200 dark:bg-gray-800 placeholder:text-gray-700 dark:placeholder:text-white"
            type="text"
            autoComplete="off"
            placeholder="Tell me about your experience..."
            name="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <button
            className={`flex items-center justify-center w-10 h-10 p-2 text-3xl text-white bg-cyan-500 dark:bg-blue-500 rounded-full ${
              isLoading ? "opacity-75 bg-blue-300" : ""
            }`}
            disabled={isLoading}
            type="submit"
          >
            <AiOutlineSend />
          </button>
        </form>
      </div>
    </section>
  );
};
