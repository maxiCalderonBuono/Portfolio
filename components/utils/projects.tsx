import { LOGOS } from "./logos";

import versatile from "../../public/images/versatile-web.png";
import diarymate from "../../public/images/diarymate-web.png";
import awsomenews from "../../public/images/awsomenews-web.png";
import calenly from "../../public/images/calenly-web.png";
import pokedelta from "../../public/images/pokedelta-web.png";
import mejorpostor from "../../public/images/mejorpostor-web.png";
import heroes from "../../public/images/heroes-web.png";
import giftexpert from "../../public/images/giftexpert-web.png";
import getpass from "../../public/images/getpass-web.png";
import library from "../../public/images/library-web.png";

export const PROJECTS = [
  {
    name: "Versatile",
    image: versatile,
    description:
      "React blog utilizing RTK-query, optimistic updates and normalized cache state",
    tech: [
      <LOGOS.ReactIcon />,
      <LOGOS.ChakraIcon />,
      <LOGOS.ReduxIcon />,
      <LOGOS.SupabaseIcon />,
    ],
    deploy: "https://versatile-blog.netlify.app/",
    repo: "https://github.com/maxiCalderonBuono/MyBlog",
  },
  {
    name: "Diarymate",
    image: diarymate,
    description:
      "A web-based journaling platform with multimedia note-taking capabilities built using React and powered by Firebase.",
    tech: [
      <LOGOS.ReactIcon />,
      <LOGOS.ReduxIcon />,
      <LOGOS.ReactRouterIcon />,
      <LOGOS.FirebaseIcon />,
      <LOGOS.ChakraIcon />,
      <LOGOS.FramerMotionIcon />,
    ],
    deploy: "https://diarymate.vercel.app/",
    repo: "https://github.com/maxiCalderonBuono/journal-app",
  },
  {
    name: "Awsomenews",
    image: awsomenews,
    description:
      "A Gatsby page showcasing embedded Hacker News content through iframes, created as part of a frontend challenge",
    tech: [
      <LOGOS.GatsbyIcon />,
      <LOGOS.StyledComponentsIcon />,
      <LOGOS.GraphQLIcon />,
    ],
    deploy: "https://awsomenews.netlify.app/",
    repo: "https://github.com/maxiCalderonBuono/uizard-challenge-fe",
  },

  {
    name: "Calenly",
    image: calenly,
    description:
      "A big calendar web, featuring the ability to create, store, modify, and delete events, with multi-user support",
    tech: [
      <LOGOS.ReactIcon />,
      <LOGOS.ReduxIcon />,
      <LOGOS.ReactRouterIcon />,
      <LOGOS.TailwindIcon />,
      <LOGOS.HeadlessIcon />,
      <LOGOS.NodeIcon />,
      <LOGOS.ExpressIcon />,
      <LOGOS.JWTIcon />,
      <LOGOS.MongoIcon />,
    ],
    deploy: "https://calenly.netlify.app/auth",
    repo: "https://github.com/maxiCalderonBuono/CalendarApp-FrontEnd",
  },

  {
    name: "PokeDelta",
    image: pokedelta,
    description:
      "A Pokedex web app with filters, cached data from queries, and customizable entry display",
    tech: [
      <LOGOS.TypescriptIcon />,
      <LOGOS.ReactIcon />,
      <LOGOS.ReactQueryIcon />,
      <LOGOS.ReactRouterIcon />,
      <LOGOS.ChakraIcon />,
    ],
    deploy: "https://pokedelta.netlify.app/",
    repo: "https://github.com/maxiCalderonBuono/WireDelta-Challenge",
  },

  {
    name: "Masked Heroes",
    image: heroes,
    description:
      "A web built using React Router to navigate through entries by ID and featuring a search component.",
    tech: [
      <LOGOS.ReactIcon />,
      <LOGOS.ReactRouterIcon />,
      <LOGOS.BootstrapIcon />,
    ],
    deploy: "https://maskedheroes.netlify.app/",
    repo: "https://github.com/maxiCalderonBuono/HeroesApp",
  },
  {
    name: "GiftExpert",
    image: giftexpert,
    description: "A web page built to master Fetch API using React",
    tech: [<LOGOS.ReactIcon />, <LOGOS.StyledComponentsIcon />],
    deploy: "https://maxicalderonbuono.github.io/react-gifexpertapp/",
    repo: "https://github.com/maxiCalderonBuono/react-gifexpertapp",
  },
  {
    name: "Library",
    image: library,
    description: "My first work with a team and React application",
    tech: [
      <LOGOS.ReactIcon />,
      <LOGOS.ReactRouterIcon />,
      <LOGOS.BootstrapIcon />,
      <LOGOS.StyledComponentsIcon />,
    ],
    deploy: "https://maxicalderonbuono.github.io/library-web-app/",
    repo: "https://github.com/maxiCalderonBuono/library-web-app",
  },
  {
    name: "GetPass",
    image: getpass,
    description:
      "My very first project, marking the start of my wonderful journey into web programming.",
    tech: [<LOGOS.HTMLIcon />, <LOGOS.CSSIcon />, <LOGOS.JavascriptIcon />],
    deploy: "https://getpassapp.netlify.app/",
    repo: "https://github.com/maxiCalderonBuono/GetPass",
  },
];
