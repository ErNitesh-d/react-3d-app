import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  niomart,
  mongodb,
  git,
  figma,
  docker,

  softqube,
  logicalWings,

  hms,
  library,
  tripguide,
  threejs,

  postman,
  intellij,
  python,
  java,
  mysql,
  vscode

  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "DevOps Engineer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "Java",
    icon: java,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "VS Code",
    icon: vscode,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Intellij IDe",
    icon: intellij,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "docker",
    icon: docker,
  },
];
const experiences = [
  {
    title: "Junior Java Software Developer",
    company_name: "Logical Wings Infoweb Pvt. Ltd.",
    icon: logicalWings, 
    iconBg: "#0F172A",
    date: "Oct 2025 - Present",
    points: [
      "Working as a Junior Java Developer with a strong focus on backend development using Java and Spring Boot.",
      "Designing and developing RESTful APIs following best practices and clean architecture principles.",
      "Collaborating with frontend developers, testers, and project managers to deliver scalable backend solutions.",
      "Writing optimized, maintainable code and participating in debugging and performance improvement activities.",
    ],
  },
  {
    title: "Java Trainee",
    company_name: "Logical Wings Infoweb Pvt. Ltd.",
    icon: logicalWings,
    iconBg: "#0F172A",
    date: "Jul 2025 - Sep 2025",
    points: [
      "Trained in backend development using Java, Spring Boot, and RESTful web services.",
      "Developed HealthPlus, a microservices-based healthcare management system using Spring Boot and MySQL.",
      "Implemented CRUD operations, request validation, and exception handling in REST APIs.",
      "Gained practical exposure to microservices architecture, API testing, and database integration.",
    ],
  },
  {
    title: "Java Developer Intern",
    company_name: "SoftQube Technologies Pvt. Ltd.",
    icon: softqube, 
    iconBg: "#1E293B",
    date: "Jan 2025 - Apr 2025",
    points: [
      "Developed and maintained Java-based backend applications using Spring Boot.",
      "Built RESTful APIs and integrated them with MySQL databases using JPA and Hibernate.",
      "Worked on core Java concepts including OOP principles, collections, and exception handling.",
      "Collaborated with senior developers to understand real-world backend development workflows.",
    ],
  },
];


const workPhilosophy = [
  {
    title: "Clean Code",
    description: "I write readable, maintainable code following industry best practices and design patterns. Every line is crafted with future developers in mind, ensuring easy collaboration and scalability.",
    icon: "💻",
  },
  {
    title: "Scalable Architecture",
    description: "I design systems that grow with your needs, using modular architectures and proven patterns. From microservices to monoliths, I choose the right approach for your specific requirements.",
    icon: "🏗️",
  },
  {
    title: "User-Centric Design",
    description: "I prioritize user experience in every decision, creating intuitive interfaces that delight users. Accessibility, responsiveness, and usability are at the core of my development process.",
    icon: "🎯",
  },
  {
    title: "Performance First",
    description: "I optimize for speed and efficiency at every level, from database queries to frontend rendering. Fast applications lead to better user engagement and business outcomes.",
    icon: "⚡",
  },
  {
    title: "Security Minded",
    description: "I build with security as a priority, implementing best practices for authentication, data protection, and vulnerability prevention. Your users' trust is paramount.",
    icon: "🔒",
  },
  {
    title: "Continuous Learning",
    description: "I stay current with emerging technologies and industry trends, constantly refining my skills. The tech landscape evolves rapidly, and I evolve with it.",
    icon: "📚",
  },
];

const projects = [
  {
    name: "Hospital Management System",
    description:
      "Web application that enables hospitals to manage patient records, doctor schedules, appointments, and billing operations efficiently through a secure and centralized system.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "java",
        color: "green-text-gradient",
      },
      {
        name: "microservice",
        color: "pink-text-gradient",
      },
      {
        name: "postgresql",
        color: "yellow-text-gradient",
      },
    ],
    image: hms,
    source_code_link: "https://github.com/ErNitesh-d/HealthPlus-A-Microservices-Based-Healthcare-Management",
  },
  {
    name: "NioMart (With Payment Gateway) ",
    description:
      "Web application that allows users to browse and search products, view detailed product information and pricing, manage their shopping cart, and place orders through a user-friendly e-commerce interface.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "thymeleaf",
        color: "green-text-gradient",
      },
      {
        name: "springboot",
        color: "pink-text-gradient",
      },
            {
        name: "mysql",
        color: "yellow-text-gradient",
      },
    ],
    image: niomart,
    source_code_link: "https://github.com/ErNitesh-d/NeoMart-Shop",
  },
    {
    name: "Library Management System ",
    description:
      "Web application that enables librarians and users to manage books, track borrowing and returns, monitor availability, and maintain member records through a centralized and efficient system.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "restAPIs",
        color: "green-text-gradi  ent",
      },
      {
        name: "springboot",
        color: "pink-text-gradient",
      },
            {
        name: "mysql",
        color: "yellow-text-gradient",
      },
    ],
    image: library,
    source_code_link: "https://github.com/ErNitesh-d/Library-Management",
  },
  {
    name: "Mirco-Services Concepts",
    description:
      "Demo applications illustrating core microservices principles including independent services, REST APIs, inter-service communication, and scalable system design.",
    tags: [
      {
        name: "microservice",
        color: "blue-text-gradient",
      },
      {
        name: "system-design",
        color: "green-text-gradient",
      },
      {
        name: "java",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/ErNitesh-d",
  },
];

export { services, technologies, experiences, workPhilosophy, projects };