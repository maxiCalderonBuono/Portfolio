import React, { useEffect, useRef, useState } from "react";
import { AiOutlineSend } from "react-icons/ai";

type Message = {
  id: string;
  type: "bot" | "user";
  text: React.ReactNode;
};

type Props = {
  initialMessage: string;
  apiKey: string;
  examples: { text: string; label: string }[];
  answers: Record<string, React.ReactNode>;
};

export const ChatBot = ({
  apiKey,
  examples,
  answers,
  initialMessage,
}: Props) => {
  const [messages, setMessages] = useState<Message[]>(() =>
    initialMessage
      ? [
          {
            id: "1",
            type: "bot",
            text: (
              <div className="flex items-center gap-2">
                <img
                  src="https://res.cloudinary.com/dvqlenul5/image/upload/v1677154574/571-5718065_bot-autoresponder-clipart_mj2gs1.webp"
                  alt="Codey face"
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
          id: String(Date.now()),
          type: "bot",
          text: answers["me"],
        })
      );

      return;
    } else if (prediction === "help" && question === "2") {
      setIsLoading(false);
      setMessages((messages) =>
        messages.concat({
          id: String(Date.now()),
          type: "bot",
          text: answers["job"],
        })
      );

      return;
    } else if (prediction === "help" && question === "3") {
      setIsLoading(false);
      setMessages((messages) =>
        messages.concat({
          id: String(Date.now()),
          type: "bot",
          text: answers["tech"],
        })
      );

      return;
    }

    const { classifications } = await fetch("https://api.cohere.ai/classify", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "large",
        inputs: [question],
        examples: examples,
      }),
    }).then((res) => res.json());
    setIsLoading(false);

    setPrediction(classifications[0].prediction || "default");

    setMessages((messages) =>
      messages.concat({
        id: String(Date.now()),
        type: "bot",
        text: answers[classifications[0].prediction] || answers["default"],
      })
    );
  };

  useEffect(() => {
    container.current?.scrollTo(0, lastChild.current.offsetTop - 100);
  }, [messages]);

  return (
    <section>
      <div className="relative p-4 border border-gray-400 rounded-lg">
        <div
          className="flex flex-col w-full gap-4 h-[350px] overflow-y-auto"
          ref={container}
        >
          {messages.map((message) => (
            <div
              key={message.id}
              ref={lastChild}
              className={`p-4 text-white max-w-[80%] rounded-3xl ${
                message.type === "bot"
                  ? "bg-slate-600 self-start rounded-bl-none"
                  : "bg-blue-500 self-end rounded-br-none"
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
            {answers["answering"]}
          </div>
        </div>
        <form
          className="flex items-center gap-4 m-0 mt-8"
          onSubmit={handleSubmit}
        >
          <input
            className="flex-1 px-4 py-2 mb-0 bg-gray-800 border border-gray-400"
            type="text"
            autoComplete="off"
            placeholder="Can you tell more abour your experience?"
            name="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <button
            className={`flex items-center justify-center w-10 h-10 p-2 text-3xl text-white bg-blue-500 rounded-full ${
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
