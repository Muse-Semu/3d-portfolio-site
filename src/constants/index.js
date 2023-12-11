import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  django,
  mysql,
  postgre,
  python,
  java,
  food,
  st2,
  github,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: reactjs,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
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
    name: "Python",
    icon: python,
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "PostgreSQL",
    icon: postgre,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },

  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  // {
  //   title: "React.js Developer",
  //   company_name: "Starbucks",
  //   icon: starbucks,
  //   iconBg: "#383E56",
  //   date: "March 2020 - April 2021",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: " Intern at Anku ICT solution",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Full stack Developer",
    company_name: "Intern at Anku ICT Consulting",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Oct 2022",
    link: "https://dreamblog-23ek.onrender.com/",
    code: "https://github.com/Muse-Semu/dreams-blog-deployed",
    points: [
      "I designed and implemented the frontend of the blog website, ensuring an appealing and responsive user interface through HTML for structure, CSS for styling, and JavaScript for interactive elements. ",
      "On the backend, I utilized Django, a powerful Python web framework, to manage server-side logic, routing, and data handling. ",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "PostgreSQL served as the database, providing a scalable and efficient storage solution for blog posts and related data.",
      "To make it accessible to the public, I deployed the application on the Render platform.",
    ],
  },
];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Food Delivery",
    description:
      "built with React, Django, Tailwind CSS, Redux, and PostgreSQL, offers a user-friendly experience with key features for seamless food ordering. Users can easily register, log in, and explore a dynamic menu with various categories. The platform supports secure online transactions and enables users to track the real-time status of their orders. Additionally, the system includes personalized user profiles for managing information and viewing order history. For administrators, an intuitive backend dashboard facilitates order management and menu updates.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "postgre",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: food,
    source_code_link: "https://github.com/Muse-Semu/django-react-final_project",
  },
  {
    name: "Student Record Management",
    description:
      "Student Management System is a comprehensive desktop application that combines the power of Java and JavaFX for a robust frontend, SceneBuilder for intuitive UI design, and MySQL for efficient data management. The incorporation of analytics tools elevates the system, providing administrators with valuable insights through clear and visually appealing charts. This application stands as a testament to your skillful integration of various technologies to create a powerful and user-friendly solution for student and department management.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "javaFX",
        color: "green-text-gradient",
      },

      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: st2,
    source_code_link:
      "https://github.com/Muse-Semu/javafx_student_record_system/tree/javafx/",
  },
];

const tech = [
  {
    title: "Programming Language and web development",
    items: [
      {
        name: "JavaScript",
        icon: javascript,
      },
      {
        name: "Python",
        icon: python,
      },
      {
        name: "Java",
        icon: java,
      },
      {
        name: "HTML",
        icon: html, 
      },
      {
        name: "CSS",
        icon: css, 
      },
    ],
  },

  {
    title: "Libraries and Frameworks",
    items: [
      {
        name: "React JS",
        icon: reactjs,
      },
      {
        name: "Redux Toolkit",
        icon: redux,
      },
      {
        name: "Tailwind CSS",
        icon: tailwind,
      },
      {
        name: "Django",
        icon: django,
      },
      {
        name: "Node JS",
        icon: nodejs,
      },
    ],
  },
  {
    title: "Database Managment",
    items: [
      {
        name: "PostgreSQL",
        icon: postgre,
      },
      {
        name: "MongoDB",
        icon: mongodb,
      },
      {
        name: "MySQL",
        icon: mysql,
      },
    ],
  },
  {
    title: "Version Controlling",
    items: [
      { name: "Git", icon: git },
      { name: "Github", icon: github },
    ],
  },
];

export { services, technologies, experiences, testimonials, projects,tech };
