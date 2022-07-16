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
  SiNodedotjs,
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
    icon: <SiCplusplus />,
  },
  {
    icon: <SiCsharp />,
  },
  {
    icon: <SiJava />,
  },
  {
    icon: <SiPython />,
  },
  {
    icon: <SiHtml5 />,
  },
  {
    icon: <SiCss3 />,
  },
  {
    icon: <SiJavascript />,
  },
  {
    icon: <SiTypescript />,
  },
  {
    icon: <SiReact />,
  },
  {
    icon: <SiNodedotjs />,
  },
  {
    icon: <SiLinux />,
  },
];
