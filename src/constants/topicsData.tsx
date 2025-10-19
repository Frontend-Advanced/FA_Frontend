import { Boxes, Video, Code, BookMinus } from "lucide-react";

export interface TopicStat {
  icon: React.ReactNode;
  label: string;
  value: number;
}

export interface TopicItem {
  title: string;
  description: string;
  duration: string;
  imageUrl: string;
  stats: TopicStat[];
}

export const TOPICS_DATA: TopicItem[] = [
  {
    title: "Design Patterns Explained",
    description:
      "In this course, we’ll explain every single design pattern in frontend development.",
    duration: "12min",
    imageUrl: "01-Topic-Design-Patterns.png",
    stats: [
      { icon: <Boxes size={15} className="text-[#02542D]" />, label: "Diagrams", value: 5 },
      { icon: <Video size={15} className="text-[#02542D]" />, label: "Videos", value: 7 },
      { icon: <Code size={15} className="text-[#02542D]" />, label: "Practices", value: 5 },
      { icon: <BookMinus size={15} className="text-[#02542D]" />, label: "Examples", value: 5 },
    ],
  },
  {
    title: "JavaScript ES6 Deep Dive",
    description:
      "Master modern JavaScript features and boost your coding productivity.",
    duration: "18min",
    imageUrl: "01-Topic-Design-Patterns.png",
    stats: [
      { icon: <Boxes size={15} className="text-[#02542D]" />, label: "Diagrams", value: 3 },
      { icon: <Video size={15} className="text-[#02542D]" />, label: "Videos", value: 8 },
      { icon: <Code size={15} className="text-[#02542D]" />, label: "Practices", value: 6 },
      { icon: <BookMinus size={15} className="text-[#02542D]" />, label: "Examples", value: 4 },
    ],
  },
  {
    title: "React Hooks Simplified",
    description:
      "Understand useState, useEffect, and custom hooks with real-world examples.",
    duration: "15min",
    imageUrl: "01-Topic-Design-Patterns.png",
    stats: [
      { icon: <Boxes size={15} className="text-[#02542D]" />, label: "Diagrams", value: 4 },
      { icon: <Video size={15} className="text-[#02542D]" />, label: "Videos", value: 5 },
      { icon: <Code size={15} className="text-[#02542D]" />, label: "Practices", value: 7 },
      { icon: <BookMinus size={15} className="text-[#02542D]" />, label: "Examples", value: 3 },
    ],
  },
  {
    title: "TypeScript for Beginners",
    description:
      "Get comfortable with types, interfaces, and generics to write robust JavaScript code.",
    duration: "20min",
    imageUrl: "01-Topic-Design-Patterns.png",
    stats: [
      { icon: <Boxes size={15} className="text-[#02542D]" />, label: "Diagrams", value: 6 },
      { icon: <Video size={15} className="text-[#02542D]" />, label: "Videos", value: 9 },
      { icon: <Code size={15} className="text-[#02542D]" />, label: "Practices", value: 5 },
      { icon: <BookMinus size={15} className="text-[#02542D]" />, label: "Examples", value: 8 },
    ],
  },
  {
    title: "Advanced CSS Techniques",
    description:
      "Dive into animations, grid systems, and responsive layouts with modern CSS.",
    duration: "10min",
    imageUrl: "01-Topic-Design-Patterns.png",
    stats: [
      { icon: <Boxes size={15} className="text-[#02542D]" />, label: "Diagrams", value: 2 },
      { icon: <Video size={15} className="text-[#02542D]" />, label: "Videos", value: 6 },
      { icon: <Code size={15} className="text-[#02542D]" />, label: "Practices", value: 8 },
      { icon: <BookMinus size={15} className="text-[#02542D]" />, label: "Examples", value: 5 },
    ],
  },
  {
    title: "Next.js Fundamentals",
    description:
      "Build lightning-fast web apps with server-side rendering and API routes using Next.js.",
    duration: "25min",
    imageUrl: "01-Topic-Design-Patterns.png",
    stats: [
      { icon: <Boxes size={15} className="text-[#02542D]" />, label: "Diagrams", value: 7 },
      { icon: <Video size={15} className="text-[#02542D]" />, label: "Videos", value: 10 },
      { icon: <Code size={15} className="text-[#02542D]" />, label: "Practices", value: 6 },
      { icon: <BookMinus size={15} className="text-[#02542D]" />, label: "Examples", value: 9 },
    ],
  },
  {
    title: "Frontend Performance Optimization",
    description:
      "Learn how to reduce load times and boost rendering speed with modern techniques.",
    duration: "22min",
    imageUrl: "01-Topic-Design-Patterns.png",
    stats: [
      { icon: <Boxes size={15} className="text-[#02542D]" />, label: "Diagrams", value: 5 },
      { icon: <Video size={15} className="text-[#02542D]" />, label: "Videos", value: 8 },
      { icon: <Code size={15} className="text-[#02542D]" />, label: "Practices", value: 9 },
      { icon: <BookMinus size={15} className="text-[#02542D]" />, label: "Examples", value: 7 },
    ],
  },
  {
    title: "Building RESTful APIs",
    description:
      "Explore API architecture, endpoints, and best practices with Node.js and Express.",
    duration: "30min",
    imageUrl: "01-Topic-Design-Patterns.png",
    stats: [
      { icon: <Boxes size={15} className="text-[#02542D]" />, label: "Diagrams", value: 4 },
      { icon: <Video size={15} className="text-[#02542D]" />, label: "Videos", value: 6 },
      { icon: <Code size={15} className="text-[#02542D]" />, label: "Practices", value: 8 },
      { icon: <BookMinus size={15} className="text-[#02542D]" />, label: "Examples", value: 5 },
    ],
  },
  {
    title: "Mastering Git & GitHub",
    description:
      "Understand branching, merging, and collaboration workflows using Git and GitHub.",
    duration: "16min",
    imageUrl: "01-Topic-Design-Patterns.png",
    stats: [
      { icon: <Boxes size={15} className="text-[#02542D]" />, label: "Diagrams", value: 3 },
      { icon: <Video size={15} className="text-[#02542D]" />, label: "Videos", value: 7 },
      { icon: <Code size={15} className="text-[#02542D]" />, label: "Practices", value: 4 },
      { icon: <BookMinus size={15} className="text-[#02542D]" />, label: "Examples", value: 6 },
    ],
  },
  {
    title: "Understanding Async JavaScript",
    description:
      "Learn event loops, callbacks, promises, and async/await for asynchronous programming.",
    duration: "14min",
    imageUrl: "01-Topic-Design-Patterns.png",
    stats: [
      { icon: <Boxes size={15} className="text-[#02542D]" />, label: "Diagrams", value: 2 },
      { icon: <Video size={15} className="text-[#02542D]" />, label: "Videos", value: 5 },
      { icon: <Code size={15} className="text-[#02542D]" />, label: "Practices", value: 7 },
      { icon: <BookMinus size={15} className="text-[#02542D]" />, label: "Examples", value: 3 },
    ],
  },
  {
    title: "Web Accessibility Essentials",
    description:
      "Create inclusive websites that are accessible to all users following WCAG guidelines.",
    duration: "12min",
    imageUrl: "01-Topic-Design-Patterns.png",
    stats: [
      { icon: <Boxes size={15} className="text-[#02542D]" />, label: "Diagrams", value: 3 },
      { icon: <Video size={15} className="text-[#02542D]" />, label: "Videos", value: 6 },
      { icon: <Code size={15} className="text-[#02542D]" />, label: "Practices", value: 5 },
      { icon: <BookMinus size={15} className="text-[#02542D]" />, label: "Examples", value: 4 },
    ],
  },
  {
    title: "Testing in React with Jest",
    description:
      "Learn how to test components, hooks, and async functions using Jest and React Testing Library.",
    duration: "17min",
    imageUrl: "01-Topic-Design-Patterns.png",
    stats: [
      { icon: <Boxes size={15} className="text-[#02542D]" />, label: "Diagrams", value: 4 },
      { icon: <Video size={15} className="text-[#02542D]" />, label: "Videos", value: 8 },
      { icon: <Code size={15} className="text-[#02542D]" />, label: "Practices", value: 6 },
      { icon: <BookMinus size={15} className="text-[#02542D]" />, label: "Examples", value: 7 },
    ],
  },
  {
    title: "Understanding Async JavaScript",
    description:
      "Learn event loops, callbacks, promises, and async/await for asynchronous programming.",
    duration: "14min",
    imageUrl: "01-Topic-Design-Patterns.png",
    stats: [
      { icon: <Boxes size={15} className="text-[#02542D]" />, label: "Diagrams", value: 2 },
      { icon: <Video size={15} className="text-[#02542D]" />, label: "Videos", value: 5 },
      { icon: <Code size={15} className="text-[#02542D]" />, label: "Practices", value: 7 },
      { icon: <BookMinus size={15} className="text-[#02542D]" />, label: "Examples", value: 3 },
    ],
  },
  {
    title: "Web Accessibility Essentials",
    description:
      "Create inclusive websites that are accessible to all users following WCAG guidelines.",
    duration: "12min",
    imageUrl: "01-Topic-Design-Patterns.png",
    stats: [
      { icon: <Boxes size={15} className="text-[#02542D]" />, label: "Diagrams", value: 3 },
      { icon: <Video size={15} className="text-[#02542D]" />, label: "Videos", value: 6 },
      { icon: <Code size={15} className="text-[#02542D]" />, label: "Practices", value: 5 },
      { icon: <BookMinus size={15} className="text-[#02542D]" />, label: "Examples", value: 4 },
    ],
  },
  {
    title: "Testing in React with Jest",
    description:
      "Learn how to test components, hooks, and async functions using Jest and React Testing Library.",
    duration: "17min",
    imageUrl: "01-Topic-Design-Patterns.png",
    stats: [
      { icon: <Boxes size={15} className="text-[#02542D]" />, label: "Diagrams", value: 4 },
      { icon: <Video size={15} className="text-[#02542D]" />, label: "Videos", value: 8 },
      { icon: <Code size={15} className="text-[#02542D]" />, label: "Practices", value: 6 },
      { icon: <BookMinus size={15} className="text-[#02542D]" />, label: "Examples", value: 7 },
    ],
  },
];
