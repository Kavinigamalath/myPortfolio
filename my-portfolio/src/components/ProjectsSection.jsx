import React from 'react';
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere } from '@react-three/drei'
import { FiGithub, FiExternalLink, FiCode, FiDatabase, FiCpu, FiLayers, FiSmartphone, FiLayout } from 'react-icons/fi'
import { FaReact, FaNodeJs, FaFigma } from 'react-icons/fa'
import { SiOracle } from 'react-icons/si';

function TechSphere() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
      <Sphere args={[1, 32, 32]}>
        <meshStandardMaterial color="#7dd3fc" />
      </Sphere>
    </Canvas>
  )
}

export default function ProjectsSection() {
  const projects = [
    {
      title: "Food_ordering and delivery system",
      description: "Full-stack development used microservice architecture,Developed core microservices for User Service (authentication, authorization, profile management) and Order Service (order lifecycle, status tracking) and also frontend for them using MERN stack Implemented JWT-based authentication with role-based access control (customer/restaurant/admin/delivery person) Designed order processing workflow with MongoDB transactions for data consistency Integrated real-time updates using delivery sevice (Socket.IO) and payment service (order status notifications) Collaborated via Git with CI/CD pipelines (GitHub Actions) and containerized deployment using docker",
      Git_link: "https://github.com/SLIIT-Y3S1-DS-Project/food_ordering_and_delivery_system",
      tech: ["JavaScript","Node.js", "Express.js", "MongoDB", "React.js","Vite", "JWT", "Docker", "Git (CI/CD pipelines) ","REST APIs","SweetAlert2", "Helmet (HTTP headers)", "Express Rate Limit","app-net"],
      icon: <FiLayers className="text-sky-400" />
    },
    {
      title: "Finance Tracker: Backend Project",
      description: "This backend project involves the development of a RESTful API for managing a Personal Finance Tracker system. The API is designed to ensure secure access, data integrity, and userfriendly interfaces while providing core functionalities such as Manage financial records, Track expenses, set budgets, Analyze spending trends.The API uses JWT-based authentication to secure endpoints. Bcrypt is used to hash sensitive data like passwords before storing them in the database. API access is role-based, with Admin and User roles. Only Admins can access certain routes. HTTPS should be used to ensure secure communication between the client and server.",
      Git_link:"https://github.com/Kavinigamalath/Backend--Finance-Tracker",
      tech: ["Node.js", "MongoDB", "JWT", "Nodemailer", "REST APIs", "Jest", "Supertest","Helmet (HTTP headers)", "Express Rate Limit"],
      icon: <FiDatabase className="text-sky-400" />
    },
    {
      title: "Country Explore",
      description: "Country Explorer is a modern, responsive web application designed to provide travelers with comprehensive details about countries worldwide. Built with a mobile-first approach, the app features a clean, intuitive interface powered by Tailwind CSS and Material-UI, ensuring seamless usability across all devices. Users can explore country data, including flags, population, region, and capital, with dynamic filtering capabilities by region, language, or name via dedicated routes (/region/{region}, /name/{name}). Clicking a country reveals in-depth details through its alpha code (/alpha/{code}).To personalize the experience, the app integrates Firebase Authentication for secure Google Sign-In, enabling users to log in, log out, or delete their accounts (used User Session). Favorite countries are persistently stored and managed in Cloud Firestore, allowing users to bookmark and revisit their preferred destinations effortlessly. The combination of Firebase for backend services and React for the frontend ensures a fast, scalable, and user-friendly platform for global travel research.",
      link:"https://countries-app-ahb.pages.dev/",
      Git_link:"https://github.com/Kavinigamalath/countries-app",
      tech: ["React", "Vite", "Firebase Authentication (Google Auth)", "Cloud Firestore", "Tailwind CSS", "Material-UI", "Axios", "Jest","Framer Motion"],
      icon: <FaReact className="text-sky-400" />
    },
    {
      "title": "Customer Management System",
      "description": "Developed a robust web application using Java Servlets, JSP, and MySQL to manage customer data with full CRUD functionality. The system features a responsive UI with custom CSS, Bootstrap, and Font Awesome icons, ensuring a seamless user experience across devices. Implemented security measures like password strength validation, input sanitization, and SQL injection prevention via JDBC prepared statements. The backend leverages Java 17, Servlet 4.0, and Maven for dependency management, while MySQL 8.0 handles data storage with optimized connection pooling. Key highlights include form validations (phone number formatting), modern animations, and a mobile-first design. Hosted on Apache Tomcat 9.0+, this project demonstrates my full-stack proficiency in Java EE technologies and database integration.",
      "Git_link": "https://github.com/Kavinigamalath/Customer-Management-System", // Update if different
      "tech": ["Java", "Servlet", "JSP", "MySQL", "Bootstrap", "JDBC"],
      "icon": <SiOracle className="text-sky-500" /> // Using Java icon as primary technology
    },
    {
      title: "My Portfolio Website",
      description: "This professional portfolio is a meticulously crafted, high-performance web application designed to showcase my technical skills, creative projects, and professional journey. Built with React and enhanced with Three.js for immersive 3D elements, it delivers a seamless user experience across all devices through responsive design principles. The interface combines modern aesthetics with intuitive navigation, featuring dynamic content loading, smooth animations powered by Framer Motion, and optimized performance for fast loading times. Interactive project showcases demonstrate my development capabilities, while the clean, content-focused layout highlights my professional achievements with clarity and impact. This portfolio represents both my technical expertise in frontend development and my commitment to creating engaging, user-centered digital experiences.",
      link: "https://kavinigamalath.github.io/myPortfolio/",
      Git_link:"https://github.com/Kavinigamalath/myPortfolio.git",
      tech: ["React.js", "Vite", "Modern UI/UX design principles", "Three.js", "React Icons", "GitHub Pages","Framer Motion"],
      icon: <FiLayout className="text-sky-400" />
    },
    {
      title: "HealthHorizon: UI design",
      description: "This project showcases the UI design for a health and fitness tracker app built with Android XML and Kotlin in Android Studio. HealthHorizon is designed to provide users with an intuitive, engaging, and aesthetically pleasing interface to track their fitness and health journey.HealthHorizon makes it easier for individuals to track and visualize their fitness activities, ensuring they stay motivated and on track to achieve their health and fitness goals. It provides a clear overview of health metrics and workout history, helping users stay focused and achieve their targets. The app follows the 60-30-10 rule for color.",
      Git_link: "https://github.com/Kavinigamalath/HealthHorizon",
      tech: ["Android XML", "Kotlin", "Android Studio IDE"],
      icon: <FiSmartphone className="text-sky-400" />
    },
    {
      title: "Coffee Shop App: UI mockups using Figma",
      description: "This project showcases the user interface design for a coffee shop mobile app created using Figma. The app is designed to provide coffee lovers with a seamless and intuitive experience for browsing the menu, placing orders, and managing their coffee preferences.This is a UI-only project, which focuses solely on the design and layout of the app interface. It is not a functional app, but rather a Figma mockup that showcases the user journey and app design.",
      link: "https://www.figma.com/design/keVm8G0TQm4FPzxGRJYKD2/Kavini-Gamalath-s-team-library?t=xAXPKXr5Al6bJwDh-1",
      Git_link: "https://github.com/Kavinigamalath/UI-mockups-Coffee-shop-mobile-application",
      tech: ["Figma", "Design System", "Prototyping"],
      icon: <FaFigma className="text-sky-400" />
    }
  ]

  return (
    <section id="projects" className="min-h-screen relative py-10 ">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-sky-500 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-400 rounded-full filter blur-3xl animate-float-delay"></div>
      </div>

      {/* 3D Tech Sphere */}
      <div className="absolute right-10 top-1/4 hidden lg:block w-40 h-40">
        <TechSphere />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-teal-400 to-indigo-400 text-transparent bg-clip-text">
            My Projects
            </span>
          </h2>
          <p className="text-sky-200 max-w-2xl mx-auto">
            A collection of my work showcasing full-stack development, UI/UX design, and problem-solving skills
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-gradient-to-br from-sky-900/30 to-sky-900/10 backdrop-blur-sm rounded-xl overflow-hidden border border-sky-700/50
                shadow-lg hover:shadow-xl hover:shadow-sky-500/20 transition-all duration-300
                flex flex-col h-full hover:border-sky-600/70 group"
    >
      <div className="p-6 flex-1 flex flex-col">
        {/* Header with icon and title */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-sky-800/50 rounded-xl group-hover:bg-sky-700/60 transition-colors">
              {React.cloneElement(project.icon, { className: "text-sky-300 text-xl" })}
            </div>
            <h3 className="text-xl font-bold text-sky-100 group-hover:text-white transition-colors">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Description - Added text-justify here */}
        <p className="text-sky-200/90 mb-6 text-sm leading-relaxed text-justify">
          {project.description}
        </p>

         {/* Tech Stack */}
        <div className="mt-auto">
          <div className="flex items-center gap-2 text-sky-300 mb-3 text-sm font-medium">
            <FiCode className="opacity-80" />
            <span>Built With</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, i) => (
              <span 
                key={i} 
                className="px-3 py-1 bg-sky-800/40 text-xs rounded-full border border-sky-700/50 text-sky-200 hover:bg-sky-700/60 hover:border-sky-600 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>


          {/* Action Buttons */}
          <div className="flex gap-3 mt-4 pt-4 border-t border-sky-800/50">
            {project.Git_link && (
              <a
                href={project.Git_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-sky-800/50 hover:bg-sky-700/60 text-sky-100 rounded-lg text-sm font-medium transition-colors border border-sky-700/50 hover:border-sky-600/70 flex-1 justify-center"
              >
                <FiGithub size={16} />
                <span>View Code</span>
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-sky-700/60 hover:bg-sky-600/70 text-white rounded-lg text-sm font-medium transition-colors border border-sky-600/50 hover:border-sky-500/70 flex-1 justify-center"
              >
                <FiExternalLink size={16} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
          </div>
        </div>
    
    </motion.div>
  );
}