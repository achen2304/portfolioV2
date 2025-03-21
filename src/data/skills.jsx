import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaPython,
  FaMicrosoft,
  FaGoogle,
  FaGitlab,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiMongoosedotws,
  SiPostman,
  SiGnubash,
  SiC,
  SiVite,
  SiTypescript,
} from 'react-icons/si';
import { DiMysql } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io5';
import { RiNextjsFill } from 'react-icons/ri';

export const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', icon: <FaHtml5 className="w-8 h-8" /> },
      { name: 'CSS', icon: <FaCss3Alt className="w-8 h-8" /> },
      { name: 'Javascript', icon: <IoLogoJavascript className="w-8 h-8" /> },
      { name: 'Typescript', icon: <SiTypescript className="w-8 h-8" /> },
      { name: 'React', icon: <FaReact className="w-8 h-8" /> },
      { name: 'Next.js', icon: <RiNextjsFill className="w-8 h-8" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-8 h-8" /> },
      { name: 'Vite', icon: <SiVite className="w-8 h-8" /> },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Java', icon: <FaJava className="w-8 h-8" /> },
      { name: 'C', icon: <SiC className="w-6 h-6" /> },
      { name: 'Node.js', icon: <FaNodeJs className="w-8 h-8" /> },
      { name: 'Express', icon: <SiExpress className="w-8 h-8" /> },
      { name: 'MongoDB', icon: <SiMongodb className="w-8 h-8" /> },
      { name: 'Mongoose', icon: <SiMongoosedotws className="w-8 h-8" /> },
      { name: 'SQL', icon: <DiMysql className="w-8 h-8" /> },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Python', icon: <FaPython className="w-8 h-8" /> },
      { name: 'Bash', icon: <SiGnubash className="w-8 h-8" /> },
      { name: 'Git', icon: <FaGitAlt className="w-8 h-8" /> },
      { name: 'PostMan', icon: <SiPostman className="w-8 h-8" /> },
      { name: 'GitLab', icon: <FaGitlab className="w-8 h-8" /> },
      { name: 'Microsoft 365', icon: <FaMicrosoft className="w-8 h-8" /> },
      { name: 'Google Suite', icon: <FaGoogle className="w-8 h-8" /> },
    ],
  },
];
