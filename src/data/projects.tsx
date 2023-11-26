import { Technologies } from "./constants";

export interface projectsType {
  id: string;
  poster: string;
  images?: string[];
  link?: string;
  title: string;
  description: string;
  technologies: {
    name: string;
    logo: string;
  }[];
}

export const projects: projectsType[] = [
  {
    id: "PrutekaWeb",
    poster: "/assets/prutteka.png",
    link: "https://kjeybook.vercel.app/",
    title: "Prutteka Web",
    description: `
    Prutteka
    a website that helps the people find events
    and allows users to browse, create, and promote local
    events. Those include education event, exhibition event,
    sport event, charity events and more.
        `,
    technologies: [
      Technologies.nextjs,
      Technologies.tailwindcss,
      Technologies.typescript,
      Technologies.aws,
      Technologies.docker,
      Technologies.expressJs,
      Technologies.figma,
      Technologies.firebase,
    ],
    images: [
      "https://firebasestorage.googleapis.com/v0/b/todo-81bff.appspot.com/o/Screenshot%202023-11-09%20at%2012.59.27%20in%20the%20afternoon.png?alt=media&token=90f3bf85-7dd0-4c4e-9e88-9f6b238d6536",
      "https://firebasestorage.googleapis.com/v0/b/todo-81bff.appspot.com/o/Screenshot%202023-11-09%20at%2012.59.55%20in%20the%20afternoon.png?alt=media&token=fefc5449-75d6-4c2f-8e24-7f9315917b0d",
      "https://firebasestorage.googleapis.com/v0/b/todo-81bff.appspot.com/o/Screenshot%202023-11-09%20at%201.01.10%20in%20the%20afternoon.png?alt=media&token=e6660534-231c-4c9b-b652-830ecce0952b",
      "https://firebasestorage.googleapis.com/v0/b/todo-81bff.appspot.com/o/Screenshot%202023-11-09%20at%201.00.42%20in%20the%20afternoon.png?alt=media&token=0523264c-a084-4c09-af70-5d45bac674d9",
    ],
  },
  {
    id: "PrutekaFlutter",
    poster: "/assets/prutteka.png",
    link: "https://kjeybook.vercel.app/",
    title: "Prutteka Flutter",
    description: `
          Prutteka Flutter is a Mobile application that I've built using Flutter, Getx and Dart that i've integrate with prutteka web API.
          This application is an application where the user find events and allows users to browse, create, and promote local events. Those include education event, exhibition event, sport event, charity events and more.
          
          This Mobile application is the result of my group for the bootcamp project.
        `,
    technologies: [
      Technologies.flutter,
      Technologies.dart,
      Technologies.figma,
      Technologies.getX,
    ],
    images: [
      "https://firebasestorage.googleapis.com/v0/b/todo-81bff.appspot.com/o/Screenshot_20230825-161423.png?alt=media&token=e4c8c6b6-6dfd-4d14-9c56-4640d37265e6",
      "https://firebasestorage.googleapis.com/v0/b/todo-81bff.appspot.com/o/Screenshot_20230825-161426.png?alt=media&token=4142a769-94a1-4d43-8cc5-4f99aa0c47fe",
      "https://firebasestorage.googleapis.com/v0/b/todo-81bff.appspot.com/o/Screenshot_20230825-161441.png?alt=media&token=f83cea67-8792-4089-887d-92ed817a6393",
      "https://firebasestorage.googleapis.com/v0/b/todo-81bff.appspot.com/o/Screenshot_20230902-144711.png?alt=media&token=dbaed8f0-b531-4c9a-9771-0ab1e9ef9881",
    ],
  },
  {
    id: "speedtest",
    poster: "/assets/speedtest.png",
    link: "https://kjeybook.vercel.app/",
    title: "Speed Test",
    description: `
   Flutter Speed Test is a cutting-edge mobile application developed using the Flutter framework, designed to provide users with a seamless and visually appealing experience while testing their internet speed.
    
    This personal project aims to offer a comprehensive and accurate assessment of network performance on both iOS and Android devices.
        `,
    technologies: [
      Technologies.flutter,
      Technologies.dart,
      Technologies.figma,
      Technologies.getX,
      Technologies.getXCleanArch,
    ],
    images: [
      "https://firebasestorage.googleapis.com/v0/b/todo-81bff.appspot.com/o/Screenshot_20231109-125609.png?alt=media&token=450970fc-732a-4ff8-ae3f-ca654a9bc59f",
      "https://firebasestorage.googleapis.com/v0/b/todo-81bff.appspot.com/o/Screenshot_20231109-125623.png?alt=media&token=bc85bb01-888f-4c0e-b6c0-2c3150420d57",
      "https://firebasestorage.googleapis.com/v0/b/todo-81bff.appspot.com/o/Screenshot_20231109-125646.png?alt=media&token=fc035631-5bed-4a1f-ac6f-d326e54e2960",
    ],
  },
];
