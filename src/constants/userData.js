import ReactIcon from "../assets/React.svg";
import JavaScriptIcon from "../assets/JavaScript.svg";
import ExpressIcon from "../assets/Express.svg";
import MongoDBIcon from "../assets/MongoDB.svg";
import TypeScriptIcon from "../assets/TypeScript.svg";
import GitIcon from "../assets/Git.svg";
import NextJsIcon from "../assets/Next.js.svg";
import NodeJsIcon from "../assets/Node.js.svg";
import AccentureIcon from "../assets/Accenture.svg";
import DeloitteIcon from "../assets/Deloitte.svg";
import InterIcon from "../assets/Inter.svg";
import JntuaIcon from "../assets/Jntua.svg";
import MophImage from "../assets/Moph.jpeg";
import PortfolioImage from "../assets/portfolio.jpeg";
import SchoolIcon from "../assets/School.svg";
import SudokuImage from "../assets/Sudoku.jpeg";



export const userData = {
  name: "Dinakar Sai Reddy Lingala",
  location: "Dharmavaram,India",
  role: "Web Developer",
  role_desc:
    "Hi, I'm Dinakar Reddy Lingala. A dedicated frontend professional exploring backend technologies to build robust, full-stack websites.",
  socials: {
    linkedin: "https://www.linkedin.com/in/dinakar2407",
    github: "https://github.com/dinakar-24",
    email: "dinakarsaireddylingala@gmail.com",
  },
  skillsData: {
    title: "My Tech Stack",
    desc: "I'm proficient in a range of modern technologies that empower me to build highly functional solutions.",
    technologies: [
      // Programming Languages
      {
        id: 1,
        name: "JavaScript",
        type: "Programming Language",
        image: JavaScriptIcon,
      },
      {
        id: 2,
        name: "TypeScript",
        type: "Programming Language",
        image: TypeScriptIcon,
      },

      // Frontend Libraries and Frameworks
      {
        id: 3,
        name: "React",
        type: "JavaScript Library",
        image: ReactIcon,
      },
      {
        id: 4,
        name: "Next.js",
        type: "React Framework",
        image: NextJsIcon,
      },

      // Styling and CSS Frameworks
      // {
      //   id: 5,
      //   name: "Tailwind CSS",
      //   type: "CSS Framework",
      //   image: TailwindIcon,
      // },

      // Backend and Databases
      {
        id: 6,
        name: "Node.js",
        type: "JavaScript Runtime",
        image: NodeJsIcon,
      },
      {
        id: 7,
        name: "Express",
        type: "Web Framework",
        image: ExpressIcon,
      },
      {
        id: 8,
        name: "MongoDB",
        type: "Database",
        image: MongoDBIcon,
      },

      // Tools and Version Control
      {
        id: 9,
        name: "Git",
        type: "Version Control",
        image: GitIcon,
      },
    ],
  },
  experienceData: {
    title: "Experience",
    desc: "A glimpse into my academic and profesional experience, shaping my growth in the tech world.",
    exp: [
      {
        id: 1,
        title: "Software Engineering Intern",
        company: "Accenture (Forage Virtual Experience)",
        year: "Jul-2025 ",
        role: "Completed practical tasks in software engineering through virtual job simulations, gaining hands-on experience in real-world scenarios.",
        image: AccentureIcon,
      },

      {
        id: 2,
        title: "Technology Intern",
        company: "Deloitte (Forage Virtual Experience)",
        year: "Jul-2025",
        role: "Completed technology-focused job simulation with practical coding tasks,Developed skills in coding and software development through hands-on experience.",
        image: DeloitteIcon,
      },

    ],
    edu: [
      {
        id: 1,
        degree: "Bachelor of Technology in Computer Science and Engineering",
        university: "Jawaharlal Nehru Technological University Anantapur",
        year: "Jul 2022 - May 2026",
        cgpa: "CGPA - 7.87",
        image: JntuaIcon,
      },

      {
        id: 2,
        degree: "Pre-University Certificate/12th Std, Specialization: MPC",
        university: "Sri Saikurpa Junior College, Dharmavaram",
        year: "Jul 2020 - May 2022",
        cgpa: "CGPA - 7.62",
        image: InterIcon,
        
      },

      {
        id: 3,
        degree: "SSLC/10th Standard",
        cgpa: "CGPA - 9.7",
        university: "Balaji English medium high school (Nallamada)",
        year: "March 2020",
        image: SchoolIcon,
        
      },

    ],
  },
  projectsData: {
    title: "Personal Projects",
    desc: "Code-Powered Designs in Action",
    projects: [
      {
        id: 1,
        name: "Real-time Sudoku ",
        description:
          "A real-time multiplayer Sudoku game built with React and Node.js, featuring user authentication, game rooms, and a chat system.",
          techStack: [
          "JavaScript",
          "React",
          "React Router",
          "Node Js",
          "Express",
          "MongoDB",
        ],
        image: SudokuImage,
        
        website: "https://realtime-sudokuu.vercel.app/",
      },
      
      {
        id: 2,
        name: "GPU system with wave-animation",
        description: 'This project is an interactive GPU particle system with wave-based distortion and displacement, controlled via shader uniforms, built likely in Three.js with custom shaders.',
        techStack: ["JavaScript", "React", "GUI", "Three.js", "Node Js"],
        image: MophImage,
        
        website: "https://morph-animation-omega.vercel.app",
      },
      
      {
        id: 3,
        name: "Quick-Chat App",
        description: 'A Realtime Language Exchange PlatformmA app for real-time language practice with native speakers with video call functionality, real-time messaging, and partner matching.',
        techStack: ["JavaScript", "React", "Jwt Auth", "MangoDB", "Node Js"],
        image: PortfolioImage,
        
        website: "https://quickchat-amdn.onrender.com",
      },
      

      
      
      
    ],
  },
  contactData: {
    salutation: "Hi There",
    title: "Send me a message",
    subTitle: "Let's code your vision together.",
    emailDesc: "Mail me at",
    linkedin: "Linkedin",
    github: "Github",
  },
};
