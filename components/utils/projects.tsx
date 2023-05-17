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
import mindenkie from "../../public/images/mindekie-web.png";

export const PROJECTS = [
  {
    name: "Mindenkié",
    image: mindenkie,
    description:
      "Developed a client's blog, implementing webhooks to trigger automatic deployments, edge functions for dynamic OG image generation, and server components.",
    tech: [
      { name: "Typescript", logo: <LOGOS.TypescriptIcon /> },
      { name: "Next.js", logo: <LOGOS.NextIcon /> },
      { name: "React.js", logo: <LOGOS.ReactIcon /> },
      { name: "Contentful", logo: <LOGOS.ContentfulIcon /> },
      { name: "Zod", logo: <LOGOS.ZodIcon /> },
      { name: "Cloudinary", logo: <LOGOS.CloudinaryIcon /> },
    ],
    deploy: "https://mindenkie.vercel.app/",
    repo: "https://github.com/maxiCalderonBuono/nextjs-blog-with-headless-CMS",
  },
  {
    name: "Versatile",
    image: versatile,
    description:
      "React blog utilizing RTK-query, optimistic updates and normalized cache state",
    tech: [
      { name: "React.js", logo: <LOGOS.ReactIcon /> },
      { name: "Chrakra UI", logo: <LOGOS.ChakraIcon /> },
      { name: "Redux", logo: <LOGOS.ReduxIcon /> },
      { name: "Supabase", logo: <LOGOS.SupabaseIcon /> },
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
      { name: "React.js", logo: <LOGOS.ReactIcon /> },
      { name: "Redux", logo: <LOGOS.ReduxIcon /> },
      { name: "React router", logo: <LOGOS.ReactRouterIcon /> },
      { name: "Firebase", logo: <LOGOS.FirebaseIcon /> },
      { name: "Chrakra UI", logo: <LOGOS.ChakraIcon /> },
      { name: "Framer motion", logo: <LOGOS.FramerMotionIcon /> },
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
      { name: "Gatsby", logo: <LOGOS.GatsbyIcon /> },
      { name: "Styled Components", logo: <LOGOS.StyledComponentsIcon /> },
      { name: "GraphQL", logo: <LOGOS.GraphQLIcon /> },
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
      { name: "React.js", logo: <LOGOS.ReactIcon /> },
      { name: "Redux", logo: <LOGOS.ReduxIcon /> },
      { name: "React router", logo: <LOGOS.ReactRouterIcon /> },
      { name: "Tailwind", logo: <LOGOS.TailwindIcon /> },
      { name: "Node.Js", logo: <LOGOS.NodeIcon /> },
      { name: "Express.Js", logo: <LOGOS.ExpressIcon /> },
      { name: "JSON Web Token", logo: <LOGOS.JWTIcon /> },
      { name: "Mongo DB", logo: <LOGOS.MongoIcon /> },
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
      { name: "Typescript", logo: <LOGOS.TypescriptIcon /> },
      { name: "React.js", logo: <LOGOS.ReactIcon /> },
      { name: "React-Query", logo: <LOGOS.ReactQueryIcon /> },
      { name: "React router", logo: <LOGOS.ReactRouterIcon /> },
      { name: "Chrakra UI", logo: <LOGOS.ChakraIcon /> },
    ],
    deploy: "https://pokedelta.netlify.app/",
    repo: "https://github.com/maxiCalderonBuono/WireDelta-Challenge",
  },
  {
    name: "Mejor Postor",
    image: mejorpostor,
    description:
      "As part of a multidisciplinary team at No Country organization, I played a key role in developing a betting website",
    tech: [
      { name: "React.js", logo: <LOGOS.ReactIcon /> },
      { name: "Redux", logo: <LOGOS.ReduxIcon /> },
      { name: "React router", logo: <LOGOS.ReactRouterIcon /> },
      { name: "Tailwind CSS", logo: <LOGOS.TailwindIcon /> },
      { name: "Headless UI", logo: <LOGOS.HeadlessIcon /> },
    ],
    deploy: "https://mejorpostor.vercel.app/",
    repo: "https://github.com/maxiCalderonBuono/S1-07-T-FrontEnd",
  },

  {
    name: "Masked Heroes",
    image: heroes,
    description:
      "A web built using React Router to navigate through entries by ID and featuring a search component.",
    tech: [
      { name: "React.js", logo: <LOGOS.ReactIcon /> },
      { name: "React-Query", logo: <LOGOS.ReactQueryIcon /> },
      { name: "Bootstrap", logo: <LOGOS.BootstrapIcon /> },
    ],
    deploy: "https://maskedheroes.netlify.app/",
    repo: "https://github.com/maxiCalderonBuono/HeroesApp",
  },
  {
    name: "GiftExpert",
    image: giftexpert,
    description: "A web page built to master Fetch API using React",
    tech: [
      { name: "React.js", logo: <LOGOS.ReactIcon /> },
      { name: "Styled Components", logo: <LOGOS.StyledComponentsIcon /> },
    ],
    deploy: "https://maxicalderonbuono.github.io/react-gifexpertapp/",
    repo: "https://github.com/maxiCalderonBuono/react-gifexpertapp",
  },
  {
    name: "Library",
    image: library,
    description: "My first work with a team and React application",
    tech: [
      { name: "React.js", logo: <LOGOS.ReactIcon /> },
      { name: "React router", logo: <LOGOS.ReactRouterIcon /> },
      { name: "Bootstrap", logo: <LOGOS.BootstrapIcon /> },
      { name: "Styled Components", logo: <LOGOS.StyledComponentsIcon /> },
    ],
    deploy: "https://maxicalderonbuono.github.io/library-web-app/",
    repo: "https://github.com/maxiCalderonBuono/library-web-app",
  },
  {
    name: "GetPass",
    image: getpass,
    description:
      "My very first project, marking the start of my wonderful journey into web programming.",
    tech: [
      { name: "HTML", logo: <LOGOS.HTMLIcon /> },
      { name: "CSS", logo: <LOGOS.CSSIcon /> },
      { name: "JasvaScript", logo: <LOGOS.JavascriptIcon /> },
    ],
    deploy: "https://getpassapp.netlify.app/",
    repo: "https://github.com/maxiCalderonBuono/GetPass",
  },
];
