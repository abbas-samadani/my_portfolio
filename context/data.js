/* eslint-disable no-template-curly-in-string */
import {
  CodeIcon,
  DesktopComputerIcon,
  MicrophoneIcon,
} from "@heroicons/react/outline";
import { v4 } from "uuid";

export const ServicesData = [
  {
    id: v4(),
    icon: CodeIcon,
    title: "Web Development",
    description:
      "Get a full-stack website done with all types of features that you aspire to and desire. I've built tons of websites, check out my portfolio section",
  },
  {
    id: v4(),
    icon: DesktopComputerIcon,
    title: "One on one Mentoring",
    description:
      "I've taught programming to lots of students both privately and for larger groups. Some of the domains I've helped students with - ES6 , React , HTML5 , CSS3, Node JS etc.",
  },

];

export const MyProjects = [
  {
    id: "VVVJUFpWQXdER2EtQTRaSnhDQnZYUnVRLmdRX2wtMXpwVkJv",
    title: "Real Estate React & Next.js Application ",
    techStack: "React JS,Next.js,RapidApi,Chakra UI",
    description:
      "Build a Real Estate React & Next.js Application ",
    thumbnail: "/property.gif",
    url: "https://propertyfinderr.vercel.app/",
    github: "https://github.com/abbas-samadani/propertyFinder",
  },
  {
    id: "VVVJUFpWQXdER2EtQTRaSnhDQnZYUnVRLmdRX2wtMXpwVkJv",
    title: "Advanced Travel Companion Application using Google Maps",
    techStack: "React JS,RapidApi,Material-ui",
    description:
      "Build and Deploy an advanced Travel Companion Application using Google Maps. With Geolocation, Google Maps API, Searching for places, Fetching restaurants, hotels and attractions based on location from specialized Rapid APIs, data filtering and much more",
    thumbnail: "/trip.gif",
    url: "https://travelexplore.netlify.app",
    github: "https://github.com/abbas-samadani/Travel_advisor",
  },
  {
    id: "VVVJUFpWQXdER2EtQTRaSnhDQnZYUnVRLmdRX2wtMXpwVkJv",
    title: "FullStack twitter with Reactjs, Nextjs, Tailwind and Sanity",
    techStack: "Reactjs",
    description:
      "Build a site like twitter with using Reactjs, Nextjs, Tailwind and Sanity",
    thumbnail: "/twitter.gif",
    url: "https://my-twitterr.vercel.app/",
    github: "https://github.com/abbas-samadani/my_twitter",
  },

];