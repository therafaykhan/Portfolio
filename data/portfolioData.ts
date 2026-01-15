// data/portfolioData.ts

// Sample portfolio data - you can customize this with your own information

export const personalInfo = {
  name: "John Doe",
  title: "Senior Software & Web Developer",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  bio: "Passionate software engineer with 5+ years of experience building scalable web applications. Specialized in modern JavaScript frameworks and cloud technologies.",
  avatar: "/images/avatar.jpg", // Placeholder
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
    title: "E-commerce Platform",
    description: "A full-featured online shopping platform with payment integration and inventory management.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    imageUrl: "/images/project1.jpg", // Placeholder
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    imageUrl: "/images/project2.jpg", // Placeholder
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description: "A data visualization dashboard for business intelligence and reporting.",
    technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
    imageUrl: "/images/project3.jpg", // Placeholder
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Travel Blog Platform",
    description: "A content-rich travel blog platform with geolocation features and social sharing.",
    technologies: ["Next.js", "Strapi", "Mapbox", "Tailwind CSS"],
    imageUrl: "/images/project4.jpg", // Placeholder
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
    logo: "/images/company1.png", // Placeholder
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Digital Solutions LLC",
    duration: "Mar 2019 - Dec 2020",
    description: "Built responsive web applications using Vue.js and integrated with REST APIs. Improved page load times by 40%.",
    logo: "/images/company2.png", // Placeholder
  },
  {
    id: 3,
    role: "Web Developer Intern",
    company: "Startup Hub",
    duration: "Jun 2018 - Feb 2019",
    description: "Developed and maintained client websites using HTML, CSS, and JavaScript. Assisted in migrating legacy systems to modern frameworks.",
    logo: "/images/company3.png", // Placeholder
  },
];