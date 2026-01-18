// data/portfolioData.ts

// Sample portfolio data - you can customize this with your own information

export const personalInfo = {
  name: "Rafay Khan",
  title: "Senior Software & Web Developer",
  email: "mrafaykhan15@gmail.com",
  phone: "+92 310 2074074",
  location: "Karachi, Pakistan",
  bio: "Passionate software engineer with 5+ years of experience building scalable web applications. Specialized in modern JavaScript frameworks and cloud technologies.",
  avatar: "/images/DP.png", // Your profile picture
};

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 95 },
      { name: "Vue.js", level: 85 },
      { name: "JavaScript", level: 98 },
      { name: "TypeScript", level: 90 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 92 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 80 },
      { name: "Express", level: 85 },
      { name: "GraphQL", level: 75 },
      { name: "RESTful APIs", level: 95 },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git", level: 95 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 80 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description: "Modern responsive portfolio website showcasing skills, projects, and professional experience with dark mode support.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    imageUrl: "/images/Portfolio.jpg",
    liveUrl: "https://portfolio-website-pi-kohl-91.vercel.app/",
    githubUrl: "https://github.com/therafaykhan/Portfolio",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "A full-featured online shopping platform with payment integration and inventory management.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    imageUrl: "/images/project2.jpg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    imageUrl: "/images/project3.jpg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    description: "A data visualization dashboard for business intelligence and reporting.",
    technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
    imageUrl: "/images/project4.jpg",
    liveUrl: "#",
    githubUrl: "#",
  },
];

export const experiences = [
  {
    id: 1,
    role: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    duration: "Jan 2021 - Present",
    description: "Lead development of customer-facing applications using React and Node.js. Mentored junior developers and implemented CI/CD pipelines.",
    logo: "/images/company1.png",
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Digital Solutions LLC",
    duration: "Mar 2019 - Dec 2020",
    description: "Built responsive web applications using Vue.js and integrated with REST APIs. Improved page load times by 40%.",
    logo: "/images/company2.png",
  },
  {
    id: 3,
    role: "Web Developer Intern",
    company: "Startup Hub",
    duration: "Jun 2018 - Feb 2019",
    description: "Developed and maintained client websites using HTML, CSS, and JavaScript. Assisted in migrating legacy systems to modern frameworks.",
    logo: "/images/company3.png",
  },
];