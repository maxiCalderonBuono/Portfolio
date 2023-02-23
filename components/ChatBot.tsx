import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { BeatLoader } from "react-spinners";

type Message = {
  id: string;
  type: "bot" | "user";
  text: string | JSX.Element;
};

const EXAMPLES = [
  { text: "Hi", label: "gretting" },
  { text: "help", label: "help" },
  { text: "Hello", label: "gretting" },
  { text: "Good morning", label: "gretting" },
  { text: "Good afternoon", label: "gretting" },
  { text: "How are you?", label: "gretting" },
  { text: "Who are you?", label: "gretting" },
  { text: "Can we talk?", label: "gretting" },
  { text: "I have a doubt", label: "help" },
  { text: "Are you available?", label: "job" },
  { text: "Can you tell me a little bit about yourself?", label: "me" },
  { text: "Can you tell me about your background?", label: "me" },
  { text: "Can you tell me more about your experience?", label: "me" },
  { text: "How many years of experience do you have?", label: "tech" },
  { text: "Wich technologies do you know?", label: "tech" },
  {
    text: "Have you worked with cloud technologies such as AWS, Azure, or Google Cloud Platform?",
    label: "tech",
  },
  {
    text: "What are your thoughts on front-end frameworks like React or Angular?",
    label: "tech",
  },
  {
    text: "What is your experience with version control systems like Git or SVN?",
    label: "tech",
  },
  {
    text: "Have you worked with machine learning or artificial intelligence technologies?",
    label: "tech",
  },

  { text: "What technologies have you worked with before?", label: "tech" },
  { text: "What programming languages are you proficient in?", label: "tech" },
  { text: "Are you looking for a new opportunity?", label: "job" },
  { text: "Are you currently employed?", label: "job" },
  { text: "Where do you work?", label: "job" },
  { text: "Are you actively seeking a new opportunity?", label: "job" },
  { text: "What are you biggest strengths?", label: "profile" },
  {
    text: "Can you tell me about a time when you faced a challeging situation?",
    label: "profile",
  },
  { text: "What are you long-term career goals?", label: "profile" },
  { text: "Can you walk me through your resume?", label: "profile" },
  {
    text: "Can you highlight some of your key accomplishment?",
    label: "profile",
  },
  { text: "How can we meet eachother?", label: "contact" },
  { text: "How can we talk?", label: "contact" },
  {
    text: "Do you have preferred method of comunication?",
    label: "contact",
  },
  { text: "What is the best time to reach you?", label: "contact" },
  { text: "Do you have a personal website?", label: "contact" },
  { text: "Do you have a personal portfolio?", label: "contact" },
  { text: "What is your email?", label: "contact" },
  { text: "What is your telephone number?", label: "contact" },
  { text: "What is your github?", label: "contact" },
  { text: "How can I contact you?", label: "contact" },
  { text: "contact", label: "contact" },
  { text: "Can I have your resume?", label: "contact" },
  { text: "What are you social media?", label: "contact" },
  { text: "What is your dog's name?", label: "default" },
  { text: "Do you like barbecue?", label: "default" },
  { text: "What is your favourite movie?", label: "default" },
  { text: "When was the World War 2?", label: "default" },
  { text: "How many ovnis have you see?", label: "default" },
];

const API_KEY = "6EUJF3wmdJvXogOK11fNXu5sHNUwvmuefsNvJSD1";

const ANSWERS = {
  gretting: (
    <div>
      <img
        src="https://res.cloudinary.com/dvqlenul5/image/upload/v1677154574/571-5718065_bot-autoresponder-clipart_mj2gs1.webp"
        alt="Codey face"
        className="w-12 h-12"
      />
      <p className="m-0">
        Hey there! What's up? I'm Codey, the bot created by Maxi to help you
        with anything you need, no matter what it is! I will ask for him, just
        fire away with your questions, and I'll be here to assist you in no
        time! Don't forget, if you ever need assistance, just type{" "}
        <span className="font-bold text-teal-300">"help"</span> in the chat
      </p>
    </div>
  ),
  me: (
    <div className="flex gap-2">
      <img
        src="https://res.cloudinary.com/dvqlenul5/image/upload/v1677154574/571-5718065_bot-autoresponder-clipart_mj2gs1.webp"
        alt="Codey face"
        className="w-8 h-8"
      />
      <div className="flex flex-col">
        <p className="m-0 mb-3">
          I'm 31 years old and originally from Argentina, but I moved to Denmark
          in June 2022 with my wife. I'm really into listening to music and
          hiking, and I love pets and Italian food! Thanks to my grandpa, I'm a
          huge Ferrari fan too! And obviously, I'm super passionate about all
          things tech!
        </p>
        <p className="m-0 mb-3">
          I'm an industrial engineering graduate with 6 years of experience in a
          bunch of different industries. But, let me tell you, my real passion
          lies in technology and programming! That's why I made the jump into
          the IT world, and I haven't looked back since!
        </p>
        <div>
          <p>My Greatest Hits</p>
          <ul>
            <li className="m-0">
              Co-created and codesigned a complete data management system for
              COVID-19 in my country.
            </li>
            <li className="m-0">
              Taking part in different communities to share knowledge, support,
              and help each other is what I do. Teamwork makes the dream work,
              right?
            </li>
            <li className="m-0">
              I was part of a startup for three months back in Argentina that
              aimed to connect developers with companies around the world.
            </li>
            <li className="m-0">
              Participated in an internship at a Danish startup called Paytack
              for three months.
            </li>
          </ul>
        </div>
      </div>
    </div>
  ),
  job: (
    <div className="flex gap-2">
      <img
        src="https://res.cloudinary.com/dvqlenul5/image/upload/v1677154574/571-5718065_bot-autoresponder-clipart_mj2gs1.webp"
        alt="Codey face"
        className="w-8 h-8"
      />
      <div className="flex flex-col">
        <p className="m-0 mb-3">
          I am open to new opportunities and am always on the lookout for
          exciting projects and challenges. While I am not currently employed, I
          am always interested in exploring new opportunities and would love to
          hear about any roles or projects that may align with my skills and
          interests. Feel free to reach out to me via email, phone, or social
          media - you can find all of my contact information by typiying
          <span className="font-bold text-teal-300">"contact"</span> in the
          chat. Looking forward to hearing from you!
        </p>
      </div>
    </div>
  ),
  tech: (
    <div className="flex gap-2">
      <img
        src="https://res.cloudinary.com/dvqlenul5/image/upload/v1677154574/571-5718065_bot-autoresponder-clipart_mj2gs1.webp"
        alt="Codey face"
        className="w-8 h-8"
      />
      <div className="flex flex-col">
        <p className="m-0 mb-3">
          I'm a big fan of the JavaScript ecosystem, with a focus on React.js.
          For styling, I've got Bootstrap, Tailwind CSS, Styled Components, and
          Chakra UI on lock. I'm also experienced with serverless databases like
          Firebase and Supabase. On the backend side, I've worked with Node.js,
          Express, and Mongo DB. Lately, I've been getting into Next.js and
          TypeScript and I'm excited to dive deeper into those technologies. I'm
          also interested in all the amazing uses of Artificial Intelligence in
          our world.
        </p>
      </div>
    </div>
  ),
  contact: (
    <div className="flex gap-2">
      <img
        src="https://res.cloudinary.com/dvqlenul5/image/upload/v1677154574/571-5718065_bot-autoresponder-clipart_mj2gs1.webp"
        alt="Codey face"
        className="w-8 h-8"
      />
      <div className="flex flex-col">
        <p className="m-0 mb-3">Sure, here's how you can contact me:</p>
        <ul>
          <li className="m-0 font-bold text-teal-400">
            {" "}
            <Link
              href="mailto:calderonmaxi@outlook.com"
              className="font-bold text-white"
              rel="noopener noreferrer"
            >
              Email
            </Link>
          </li>
          <li className="m-0 font-bold text-teal-400">
            <Link
              href="https://www.linkedin.com/in/mcalderonbuono/"
              className="font-bold text-white"
              rel="noopener noreferrer"
            >
              Linkedin
            </Link>
          </li>
          <li className="m-0 font-bold text-teal-400">
            <Link
              href="https://github.com/maxiCalderonBuono"
              rel="noopener noreferrer"
            >
              Github
            </Link>
          </li>
          <li className="m-0 font-bold text-teal-400">
            <Link
              href="https://twitter.com/mcalderonbuono"
              rel="noopener noreferrer"
            >
              Twitter
            </Link>
          </li>
        </ul>
        <p className="m-0 my-3">
          Feel free to reach out to me during the weekdays, during the day. I'll
          get back to you as soon as I can!
        </p>
      </div>
    </div>
  ),
  help: (
    <div className="flex gap-2">
      <img
        src="https://res.cloudinary.com/dvqlenul5/image/upload/v1677154574/571-5718065_bot-autoresponder-clipart_mj2gs1.webp"
        alt="Codey face"
        className="w-8 h-8"
      />
      <div className="flex flex-col">
        <p className="m-0 mb-2">
          Of course! Here are some common questions you can ask me:
        </p>
        <ul>
          <li className="m-0">Can you tell me more about yourself?</li>
          <li className="m-0">Are you looking for new opportunities?</li>
          <li className="m-0">Which technologies do you know?</li>
        </ul>
      </div>
    </div>
  ),
  default: (
    <div className="flex gap-2">
      <img
        src="https://res.cloudinary.com/dvqlenul5/image/upload/v1677154574/571-5718065_bot-autoresponder-clipart_mj2gs1.webp"
        alt="Codey face"
        className="w-8 h-8"
      />
      <p>
        I'm sorry, I don't have an answer to that question right now. But don't
        worry, I'm constantly learning and updating my knowledge! Maybe you
        could try rephrasing your question or asking me something different?
        Let's try again!
      </p>
    </div>
  ),
  answering: (
    <div className="flex items-center gap-2">
      <img
        src="https://res.cloudinary.com/dvqlenul5/image/upload/v1677154574/571-5718065_bot-autoresponder-clipart_mj2gs1.webp"
        alt="Codey face"
        className="w-8 h-8"
      />
      <BeatLoader color="#36d7b7" />
    </div>
  ),
};

export const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([
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
          <p className="m-0">Someone out there?</p>
        </div>
      ),
    },
  ]);

  const [question, setQuestion] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const container = useRef<HTMLDivElement>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (isLoading) return;
    setIsLoading(true);
    setMessages((messages) =>
      messages.concat({ id: String(Date.now()), type: "user", text: question })
    );

    setQuestion("");

    const { classifications } = await fetch("https://api.cohere.ai/classify", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "large",
        inputs: [question],
        examples: EXAMPLES,
      }),
    }).then((res) => res.json());
    setIsLoading(false);

    setMessages((messages) =>
      messages.concat({
        id: String(Date.now()),
        type: "bot",
        text: ANSWERS[classifications[0].prediction] || ANSWERS["default"],
      })
    );
  };

  useEffect(() => {
    container.current?.scrollTo(0, container.current.scrollHeight);
  }, [messages]);
  return (
    <section>
      <div className="p-4 border border-gray-400 rounded-lg">
        <div
          ref={container}
          className="flex flex-col w-full gap-4 h-[350px] overflow-y-auto"
        >
          {messages.map((message) => (
            <div
              key={message.id}
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
            {ANSWERS["answering"]}
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
