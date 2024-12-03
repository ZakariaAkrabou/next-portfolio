import { 
  FaReact, 
  FaNodeJs, 
  FaLaravel, 
  FaHtml5, 
  FaCss3Alt, 
  FaPhp, 
  FaGit, 
  FaDocker, 
  FaTools,
  FaCode 
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiTailwindcss, 
  SiJavascript, 
  SiTypescript, 
  SiPython, 
  SiMongodb, 
  SiPostgresql, 
  SiMysql, 
  SiPostman,
  SiJira 
} from 'react-icons/si';

export const skillCategories = [
  {
    title: "Core Languages",
    skills: [
      { name: "HTML", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "PHP", icon: FaPhp, color: "#777BB4" },
    ]
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Laravel", icon: FaLaravel, color: "#FF2D20" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "PHP", icon: FaPhp, color: "#777BB4" },
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "SQL", icon: FaCode, color: "#F29111" },
    ]
  },
  {
    title: "Tools & Methods",
    skills: [
      { name: "Git", icon: FaGit, color: "#F05032" },
      { name: "Docker", icon: FaDocker, color: "#2496ED" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Agile/Jira", icon: SiJira, color: "#0052CC" },
    ]
  }
];
