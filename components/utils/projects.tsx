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
      "React blog utilizing RTK-query, optimistic updates and normalized cache state",
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
      "React blog utilizing RTK-query, optimistic updates and normalized cache state",
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
      "React blog utilizing RTK-query, optimistic updates and normalized cache state",
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
      "React blog utilizing RTK-query, optimistic updates and normalized cache state",
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
    description:
      "React blog utilizing RTK-query, optimistic updates and normalized cache state",
    tech: [<LOGOS.ReactIcon />, <LOGOS.StyledComponentsIcon />],
    deploy: "https://maxicalderonbuono.github.io/react-gifexpertapp/",
    repo: "https://github.com/maxiCalderonBuono/react-gifexpertapp",
  },
  {
    name: "Library",
    image: library,
    description:
      "React blog utilizing RTK-query, optimistic updates and normalized cache state",
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
      "React blog utilizing RTK-query, optimistic updates and normalized cache state",
    tech: [<LOGOS.HTMLIcon />, <LOGOS.CSSIcon />, <LOGOS.JavascriptIcon />],
    deploy: "https://getpassapp.netlify.app/",
    repo: "https://github.com/maxiCalderonBuono/GetPass",
  },
];
