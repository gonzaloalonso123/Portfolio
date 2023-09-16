import Photoshop from "../images/photoshop.png";
import Blender from "../images/blender.png";
import Firebase from "../images/firebase.svg";
import MUI from "../images/mui.png";
import OpenAI from "../images/openai.png";
import PyQT5 from "../images/pyqt5.png";
import Python from "../images/python.png";
import ReactLogo from "../images/react.png";
import SQL from "../images/sql.png";
import Tailwind from "../images/tailwind.png";
import Unity from "../images/unity.webp";
import Typescript from "../images/typescript.png";
import Unreal from "../images/unrealengine.png";
import Java from "../images/java.webp";
import Rocketteam from "../images/rocketteam.webp";
import Hacktogether from "../images/hacktogether.webp";
import Taskwise from "../images/taskwise.webp";
import PasstheLightr from "../images/passthelightr.webp";
import Convileo from "../images/convileo.webp";
import Hashiban from "../images/hashiban.webp";
import Iconic from "../images/iconic.webp";
import CoolSnippets from "../images/coolsnipets.webp";
import Lifetrack from "../images/lifetrack.webp";
import SSC from "../images/ssc.webp";
import AutoInvestor from "../images/autoinvestor.webp";
import Squeenks from "../images/squeenks.webp";
import BasicRPG from "../images/basicrpg.webp";
import TTK from "../images/ttk.webp";
import Github from "../images/github.png";
import Playstore from "../images/playstore.svg";
import Website from "../images/website.png";
import Slides from "../images/slides.svg";

const projects = [
  {
    name: "Auto investor",
    description: "AI market prediction tool",
    image: AutoInvestor,
    stack: [
      {
        name: "Python",
        image: Python,
      },
      {
        name: "SQL",
        image: SQL,
      },
      {
        name: "PyQT5",
        image: PyQT5,
      },
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/gonzaloalonso123/auto_investor",
        image: Github,
      },
      {
        name: "Presentation",
        url: "https://docs.google.com/presentation/d/e/2PACX-1vT1hIJV9bzMc2y9xfWyXKb8avJUbA8JVrasahGXJLkzjtitWfD8P0zh65oEI1vsIEiUCkxHrqXN6ao3/pub?start=false&loop=false&delayms=3000",
        image: Slides,
      },
    ],
  },
  {
    name: "Pass the lighter",
    description: "Lighter social platform",
    image: PasstheLightr,
    stack: [
      {
        name: "React",
        image: ReactLogo,
      },
      {
        name: "Firebase",
        image: Firebase,
      },
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/gonzaloalonso123/pass-the-lightr",
        image: Github,
      },
      {
        name: "Website",
        url: "https://www.passthelightr.com/",
        image: Website,
      },
    ],
  },
  {
    name: "Hashiban",
    description: "Site for my board game",
    image: Hashiban,
    stack: [
      {
        name: "React",
        image: ReactLogo,
      },
      {
        name: "Firebase",
        image: Firebase,
      },
      {
        name: "Typescript",
        image: Typescript,
      },
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/gonzaloalonso123/hashiban",
        image: Github,
      },
      {
        name: "Website",
        url: "https://hashiban.es/",
        image: Website,
      },
    ],
  },
  {
    name: "SSC",
    description: "Site for a surf NFT game",
    image: SSC,
    stack: [
      {
        name: "React",
        image: ReactLogo,
      },
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/gonzaloalonso123/std-surfers-club-web",
        image: Github,
      },
      {
        name: "Website",
        url: "https://stonedsurfer.io/",
        image: Website,
      },
    ],
  },
  {
    name: "Hack Together",
    description: "Platform to find code-leagues",
    image: Hacktogether,
    stack: [
      {
        name: "React",
        image: ReactLogo,
      },
      {
        name: "Firebase",
        image: Firebase,
      },
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/gonzaloalonso123/hack-together",
        image: Github,
      },
    ],
  },
  {
    name: "Taskwise",
    description: "Task management app with AI",
    image: Taskwise,
    stack: [
      {
        name: "React",
        image: ReactLogo,
      },
      {
        name: "Firebase",
        image: Firebase,
      },
      {
        name: "OpenAI",
        image: OpenAI,
      },
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/CodeOnBoat/Project-Manager-App-Frontend",
        image: Github,
      },
      {
        name: "Website",
        url: "https://taskwise.pro/",
        image: Website,
      },
    ],
  },
  {
    name: "Iconic",
    description: "Site for a beauty saloon",
    image: Iconic,
    stack: [
      {
        name: "React",
        image: ReactLogo,
      },
      {
        name: "Firebase",
        image: Firebase,
      },
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/CodeOnBoat/iconic-browse-and-beuty",
        image: Github,
      },
      {
        name: "Website",
        url: "https://iconicbrowsandbeauty.se/",
        image: Website,
      },
    ],
  },
  {
    name: "Social App",
    description: "Meet new people",
    image: Convileo,
    stack: [
      {
        name: "React",
        image: ReactLogo,
      },
      {
        name: "Firebase",
        image: Firebase,
      },
      {
        name: "MUI",
        image: MUI,
      },
    ],
    links: [],
  },
  {
    name: "Cool snippets",
    description: "Store your snippets easily",
    image: CoolSnippets,
    stack: [
      {
        name: "React",
        image: ReactLogo,
      },
      {
        name: "Firebase",
        image: Firebase,
      },
      {
        name: "MUI",
        image: MUI,
      },
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/gonzaloalonso123/Components-Snippets",
        image: Github,
      },
      {
        name: "Website",
        url: "https://gonzalo-236c9.web.app/",
        image: Website,
      },
    ],
  },
  {
    name: "Lifetrack",
    description: "Personal diary with stats",
    image: Lifetrack,
    stack: [
      {
        name: "React",
        image: ReactLogo,
      },
      {
        name: "Firebase",
        image: Firebase,
      },
      {
        name: "MUI",
        image: MUI,
      },
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/gonzaloalonso123/LifeTrack",
        image: Github,
      },
    ],
  },
  {
    name: "Rocket team",
    description: "Rocket team",
    image: Rocketteam,
    stack: [
      {
        name: "React",
        image: ReactLogo,
      },
      {
        name: "Firebase",
        image: Firebase,
      },
      {
        name: "Tailwind",
        image: Tailwind,
      },
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/CodeOnBoat/rocketteam",
        image: Github,
      },
      {
        name: "Website",
        url: "https://www.rocket-team.space/",
        image: Website,
      },
    ],
  },
  {
    name: "The Three Kingdoms",
    description: "MMORPG game",
    image: TTK,
    stack: [
      {
        name: "Unity",
        image: Unity,
      },
      {
        name: "Blender",
        image: Blender,
      },
    ],
    links: [],
  },
  {
    name: "Squeenks",
    description: "Simulation",
    image: Squeenks,
    stack: [
      {
        name: "Unreal engine",
        image: Unreal,
      },
      {
        name: "Blender",
        image: Blender,
      },
    ],
    links: [
      {
        name: "PlayStore",
        url: "https://play.google.com/store/apps/details?id=com.DreamingBig.Squeenks&pli=1",
        image: Playstore,
      },
    ],
  },
  {
    name: "Basic RPG",
    description: "RPG game",
    image: BasicRPG,
    stack: [
      {
        name: "Unity",
        image: Unity,
      },

      {
        name: "Photoshop",
        image: Photoshop,
      },
    ],
    links: [
      {
        name: "PlayStore",
        url: "https://play.google.com/store/apps/details?id=com.dreamingbig.basicrpg",
        image: Playstore,
      },
    ],
  },
];

export default projects;
