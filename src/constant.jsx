// src/constants.js

// You can use SVGs from public folder OR URLs OR local imports.
// Easiest: put logos inside /public/skills/...
// Example paths used below: "/skills/html.svg"


export const skillsInfo = [
  {
    title: "FrontEnd",
    skills: [
      { name: "HTML", logo: "public/skills/html.svg" },
      { name: "CSS", logo: "/skills/css.svg" },
      { name: "JavaScript", logo: "/skills/javascript.svg" },
      { name: "React JS", logo: "/skills/react.svg" },
      { name: "Next JS", logo: "/skills/nextjs.svg" },
      { name: "Tailwind CSS", logo: "/skills/tailwind.svg" },
    
    ],
  },
  {
    title: "BackEnd",
    skills: [
   
      { name: "Node JS", logo: "/skills/nodejs.svg" },
      { name: "Express JS", logo: "/skills/express.svg" },
      { name: "MySQL", logo: "/skills/mysql.svg" },
      { name: "MongoDB", logo: "/skills/mongodb.svg" },
      { name: "Firebase", logo: "/skills/firebase.svg" },
      
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: "/skills/c.svg" },
      { name: "C++", logo: "/skills/cpp.svg" },
      { name: "Java", logo: "/skills/java.svg" },
      { name: "JavaScript", logo: "/skills/javascript.svg" },
    
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: "/skills/git.svg" },
      { name: "GitHub", logo: "/skills/github.svg" },
      { name: "VS Code", logo: "/skills/vscode.svg" },
      { name: "Postman", logo: "/skills/postman.svg" },
      { name: "Docker", logo: "/skills/docker.svg" },
    ],
  },
];




// src/constant.jsx

export const experiences = [
  {
    id: 1,
    role: "FrontEnd Developer",
    Institute: "youtube",
    img: "/skills/react.svg", // image from public folder
    desc: "Worked on building responsive user interfaces using React and Tailwind CSS. Collaborated with designers and backend developers to deliver high-quality web applications.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS","Figma"],
     
  },
  {
    id: 2,
    role: "BackEnd Developer ",
   Institute: "youtube",
    img: "/skills/javascript.svg",
    desc: "I develop server-side applications using Node.js and Express, manage data with MongoDB, and create REST APIs to support smooth and secure frontend experiences.",
    skills: ["Node Js", "Express Js", "MangoDB", "MandoDB Compass"],
  },
  {
    id: 3,
    role: "Mern Stack Developer",
    Institute: "youtube",
    img: "/skills/html.svg",
    desc: "I build full-stack web applications using MongoDB, Express, React, and Node.js. I enjoy creating responsive user interfaces and reliable backend systems that work smoothly together to deliver fast and user-friendly experiences.",
    skills: ["HTML", "CSS", "JavaScript", "React","Tailwind CSS","Figma","Node Js", "Express Js", "MangoDB","MandoDB Compass"],
  },
];



// src/constant.jsx

export const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A personal portfolio website where I share my projects, skills, and experiences, reflecting my growth and passion for web development.",
      image: "/projects/image.png",
    tags: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    github: "",
    webapp: "",
  },
  {
    id: 2,
    title: "Book store Website",
    description:
      "A book store is a web application where user can view book, add to cart and place order .",
   image: "/projects/book.jpg",
    tags: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    
    
  },
  {
    id: 3,
    title: "Ecommerce Website",
    description:
      "An eCommerce clothing website allows users to shop for trendy clothes online with ease and secure payment options",
    image: "/projects/ecommerce.jpg",
  tags: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
   
  },
  {
    id: 4,
    title: "Traffic Sign Detection",
    description:
      "Traffic sign detection is a computer vision technique that automatically identifies road signs from images or videos..",
    image: "/projects/traffic.jpg",
   tags: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    
  },
  
  
];



// src/constants.js

export const education = [
  {
    id: 1,
    school: " ",
    degree: "MERN Stack Tranning",
    date: "Jan 2026 – Completed",
    grade: "Successful",
    desc: "MERN Stack Development Training helped me build full-stack web applications using HTML, CSS, JavaScript, React, MongoDB, Express Js,  and Node.js. It strengthened my practical skills and boosted my confidence in modern web development.",
    img: "/projects/hacker.jpg", 
  },
  {
    id: 2,
    school: "Cosmos College of Manegement and tech",
    degree: "Bachelor in Computer Engg",
    date: "2021-2025",
    grade: "3.71 (92.75%)",
    desc: "Bachelor’s in Computer Engineering helped me deepen my understanding of software, systems, and technology while strengthening my analytical and problem-solving skills. This program prepared me for professional growth and real-world engineering challenges.",
    img: "/projects/bachelor.png", 
  },
  
];



