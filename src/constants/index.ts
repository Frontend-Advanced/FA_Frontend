export const HEADER_ITEMS = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "Topics", href: "/topics" },
  { id: 3, label: "Resources", href: "/resources" },
];

export const FOOTER_COLUMN_ONE = [
  { id: 1, label: "Platform", href: "/platform" },
  { id: 2, label: "About", href: "/about" },
  { id: 3, label: "Career", href: "/career" },
  { id: 4, label: "Contact", href: "/contact" },
];

export const FOOTER_COLUMN_TWO = [
  { id: 1, label: "Resources", href: "/resources" },
  { id: 2, label: "All Topics", href: "/topics" },
  { id: 3, label: "Community", href: "/community" },
  { id: 3, label: "Newsletter", href: "/newsletter" },
];

export interface SectionItem {
  id: number;
  h1Content: string;
  pContent: string;
  src: string;
  alt: string;
}

export const SECTION_CONTENT: SectionItem[] = [
  {
    id: 1,
    h1Content: "Deep dives into frameworks.",
    pContent:
      "Unpack the complexities of React, Vue, and other cutting-edge libraries with real-world scenarios.",
    src: "/Section-1-img.webp",
    alt: "This image contains the vue.js logo and a developer who is working with his laptop and exploring the framework.",
  },
  {
    id: 2,
    h1Content: "Performance and architecture.",
    pContent:
      "Learn advanced techniques in performance optimization and scalable frontend architecture.",
    src: "/Section-2-img.webp",
    alt: "This image shows a high-level overview of a web application's architecture, with various components and layers.",
  },
  {
    id: 3,
    h1Content: "Modern tooling mastery.",
    pContent:
      "Expert workflows covering build tools, testing, accessibility, and much more.",
    src: "/Section-3-img.webp",
    alt: "This image features modern web development coding and HTML on the sides of a laptop.",
  },
];

export const USER_SOCIALS_ICONS = [
  { id: 1, label: "X", src: "/icons/x.svg" },
  { id: 2, label: "Devto", src: "/icons/devdotto.svg" },
  { id: 3, label: "LinkedIn", src: "/icons/linkedIn.png" },
  { id: 4, label: "GitHub", src: "/icons/github.svg" },
];

export interface UserProfileTabItem {
  id: string;
  label: string;
  heading?: string;
  content: string;
}

export const USER_PROFILE_TABS: UserProfileTabItem[] = [
  {
    id: "achievements",
    label: "Achievements",
    heading: "System architect",
    content:
      "Responsible for designing and overseeing complex enterprise technical implementation with business objectives, define architectural standards, and guides development teams through strategic technology decisions",
  },
  {
    id: "trophies",
    label: "Trophies",
    content: "trophies.....",
  },
  {
    id: "badges",
    label: "Badges",
    content: "list of badges.....",
  },
];
