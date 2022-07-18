import { FiGithub, FiLinkedin } from 'react-icons/fi';
import {
  SiCplusplus,
  SiCsharp,
  SiJava,
  SiPython,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiLinux,
} from 'react-icons/si';

export const social = [
  {
    icon: <FiLinkedin />,
    href: process.env.LINKEDIN,
  },
  {
    icon: <FiGithub />,
    href: process.env.GITHUB,
  },
];

export const skills = [
  {
      text: 'C++',
      icon: <SiCplusplus />,
  },
  {
    text: 'C#',
    icon: <SiCsharp />,
  },
  {
    text: 'Java',
    icon: <SiJava />,
  },
  {
    text: 'Python',
    icon: <SiPython />,
  },
  {
    text: 'HTML',
    icon: <SiHtml5 />,
  },
  {
    text: 'CSS',
    icon: <SiCss3 />,
  },
  {
    text: 'Javascript',
    icon: <SiJavascript />,
  },
  {
    text: 'Typescript',
    icon: <SiTypescript />,
  },
  {
    text: 'React',
    icon: <SiReact />,
  },
  {
    text: 'Node.js',
    icon: '',
  },
  {
    text: 'Express.js',
    icon: '',
  },
  {
    text: 'Linux',
    icon: <SiLinux />,
  },
];
