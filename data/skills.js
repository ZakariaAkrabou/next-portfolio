import { 
  FaNodeJs, 
  FaLaravel, 
  FaHtml5, 
  FaCss3Alt, 
  FaPhp, 
  FaGit, 
  FaTools,
  FaCode,
  FaAngular,
  FaJava,
  FaLeaf
} from 'react-icons/fa';
import { 

  SiJavascript, 
 
  SiMongodb, 
  SiPostgresql, 
  SiMysql, 
  SiPostman,
  SiJira,
  SiExpress
} from 'react-icons/si';

export const skillCategories = [
  {
    title: "Frontend",
    icon: FaCode,
    skills: [
      { name: "HTML", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
     
    ]
  },
  {
    title: "Backend",
    icon: FaTools,
    skills: [
      { name: "PHP", icon: FaPhp, color: "#777BB4" },
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Java", icon: FaJava, color: "#007396" },
    ]
  },
  {
    title: "Frameworks",
    icon: FaCode,
    skills: [
      { name: "Angular", icon: FaAngular, color: "#DD0031" },
      { name: "Laravel", icon: FaLaravel, color: "#FF2D20" },
      { name: "Express.js", icon: SiExpress, color: "#ffffff" },
      { name: "Spring Boot", icon: FaLeaf, color: "#6DB33F" },
    ]
  },
  {
    title: "Databases",
    icon: FaCode,
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    ]
  },
  {
    title: "Tools & Methods",
    icon: FaTools,
    skills: [
      { name: "Git", icon: FaGit, color: "#F05032" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Agile/Jira", icon: SiJira, color: "#0052CC" },
    ]
  }
];
