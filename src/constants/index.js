import html from '/assets/tech/html.png';
import css from '/assets/tech/css.png';
import javascript from '/assets/tech/javascript.png';
import typescript from '/assets/tech/typescript.png';
import reactjs from '/assets/tech/reactjs.png';
import redux from '/assets/tech/redux.png';
import tailwind from '/assets/tech/tailwind.png';
import nodejs from '/assets/tech/nodejs.png';
import mongodb from '/assets/tech/mongodb.png';
import git from '/assets/tech/git.png';
import figma from '/assets/tech/figma.png';
import docker from '/assets/tech/docker.png';
import threejs from '/assets/tech/threejs.svg';

import projectLogo1 from '/assets/project-logo1.png';
import projectLogo2 from '/assets/project-logo2.png';
import projectLogo3 from '/assets/project-logo3.png';
import projectLogo4 from '/assets/project-logo4.png';
import projectLogo5 from '/assets/project-logo5.png';

import spotlight1 from '/assets/spotlight1.png';
import spotlight2 from '/assets/spotlight2.png';
import spotlight3 from '/assets/spotlight3.png';
import spotlight4 from '/assets/spotlight4.png';
import spotlight5 from '/assets/spotlight5.png';


export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: 'home',
  },
  {
    id: 2,
    name: 'About',
    href: 'about',
  },
  {
    id: 3,
    name: 'Work',
    href: 'work',
  },
  {
    id: 4,
    name: 'Contact',
    href: 'contact',
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Content",
    company_name: "Content",
    icon: projectLogo1,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Content",
      "Content",
      "Content",
      "Content",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Content",
    icon: projectLogo2,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Content",
      "Content",
      "Content",
      "Content",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Content",
    icon: projectLogo3,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Content",
      "Content",
      "Content",
      "Content",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Content",
    icon: projectLogo4,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Content",
      "Content",
      "Content",
      "Content",
    ],
  },
];


export const myProjects = [
  {
    title: 'Trendlens - an AI-powered Stock market Analyst',
    desc: 'Trendlens is my take on stock market analysis. It is created to educate people on financial literacy and help them make informed investment decisions. The app is built with React.js, Tailwind CSS, and Framer Motion.',
    subdesc:
      'Built as a unique SAAS app with Next.js 14, Tailwind CSS, TypeScript and Framer Motion , Trendlens is your financial buddy to keep your financial performance in check.',
    href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
    texture: '/textures/project/project1.mp4',
    logo: projectLogo1, 
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: spotlight1, 
    tags: [
      { id: 1, name: 'React.js', path: 'assets/tech/reactjs.png' },
      { id: 2, name: 'TailwindCSS', path: 'assets/tech/tailwind.png' },
      { id: 3, name: 'TypeScript', path: 'assets/tech/typescript.png' },
      { id: 4, name: 'Framer Motion', path: 'assets/tech/nodejs.png' },
    ],
  },
  {
    title: 'LiveDoc - Real-Time Google Docs Clone',
    desc: 'LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.',
    subdesc:
      'With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.',
    href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
    texture: '/textures/project/project2.mp4',
    logo: projectLogo2,  
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: spotlight2,  
    tags: [
      { id: 1, name: 'React.js', path: 'assets/tech/reactjs.png' },
      { id: 2, name: 'TailwindCSS', path: 'assets/tech/tailwind.png' },
      { id: 3, name: 'TypeScript', path: 'assets/tech/typescript.png' },
      { id: 4, name: 'Framer Motion', path: 'assets/tech/nodejs.png' },
    ],
  },
  {
    title: 'CarePulse - Health Management System',
    desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
    subdesc:
      'With a focus on efficiency, CarePulse integrates complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
    href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
    texture: '/textures/project/project3.mp4',
    logo: projectLogo3,  
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: spotlight3,  
    tags: [
      { id: 1, name: 'React.js', path: 'assets/tech/reactjs.png' },
      { id: 2, name: 'TailwindCSS', path: 'assets/tech/tailwind.png' },
      { id: 3, name: 'TypeScript', path: 'assets/tech/typescript.png' },
      { id: 4, name: 'Framer Motion', path: 'assets/tech/nodejs.png' },
    ],
  },
  {
    title: 'Horizon - Online Banking Platform',
    desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
    subdesc:
      'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
    href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
    texture: '/textures/project/project4.mp4',
    logo: projectLogo4,  
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: spotlight4,  
    tags: [
      { id: 1, name: 'React.js', path: 'assets/tech/reactjs.png' },
      { id: 2, name: 'TailwindCSS', path: 'assets/tech/tailwind.png' },
      { id: 3, name: 'TypeScript', path: 'assets/tech/typescript.png' },
      { id: 4, name: 'Framer Motion', path: 'assets/tech/nodejs.png' },
    ],
  },
  {
    title: 'Imaginify - AI Photo Manipulation App',
    desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
    subdesc:
      'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
    href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    texture: '/textures/project/project5.mp4',
    logo: projectLogo5,  
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: spotlight5,  
    tags: [
      { id: 1, name: 'React.js', path: 'assets/tech/reactjs.png' },
      { id: 2, name: 'TailwindCSS', path: 'assets/tech/tailwind.png' },
      { id: 3, name: 'TypeScript', path: 'assets/tech/typescript.png' },
      { id: 4, name: 'Framer Motion', path: 'assets/tech/nodejs.png' },
    ],
  },
];

const certifications = [
  {
    id: 1,
    title: 'Introduction to Artificial Intelligence',
    image: 'assets/certificates/AI.png',
    issuer: 'Infosys Springboard',
    date: 'September 2023',
    description: 'Advanced concepts in React development including hooks, context, and performance optimization.'
  },
  {
    id: 2,
    title: 'Introduction to Deep Learning',
    image: 'assets/certificates/DeepLearning.png',
    issuer: 'Infosys Springboard',
    date: 'September 2023',
    description: 'Comprehensive understanding of JavaScript including ES6+, async programming, and functional concepts.'
  },
  {
    id: 3,
    title: 'The Fundamentals of Digital Marketing',
    image: 'assets/certificates/DigitalMarketing.png',
    issuer: 'Google Digital Unlocked',
    date: 'May 2023',
    description: 'Mastery in building responsive and customized user interfaces using Tailwind CSS.'
  },
  {
    id: 4,
    title: 'Introduction to Natural Language Processing',
    image: 'assets/certificates/NLP.png',
    issuer: 'Infosys Springboard',
    date: 'September 2023',
    description: 'Expertise in creating inclusive web experiences and implementing WCAG guidelines.'
  },
  {
    id: 5,
    title: 'Natural Language Processing with Attention Models',
    image: 'assets/certificates/NLP_attention.png',
    issuer: 'DeepLearning.AI',
    date: 'August 2024',
    description: 'Expertise in creating inclusive web experiences and implementing WCAG guidelines.'
  },
];

export {experiences, technologies, certifications};