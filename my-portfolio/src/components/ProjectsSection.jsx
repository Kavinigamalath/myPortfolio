import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere } from '@react-three/drei'
import { FiGithub, FiExternalLink, FiCode, FiDatabase, FiCpu, FiLayers, FiSmartphone, FiLayout } from 'react-icons/fi'
import { FaReact, FaNodeJs, FaFigma } from 'react-icons/fa'

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
      description: "This backend project involves the development of a RESTful API for managing a Personal Finance Tracker system. The API is designed to ensure secure access, data integrity, and userfriendly interfaces while providing core functionalities such as Manage financial records, Track expenses, set budgets, Analyze spending trends.",
      Git_link:"https://github.com/Kavinigamalath/Backend--Finance-Tracker",
      tech: ["Node.js", "MongoDB", "JWT", "Nodemailer", "REST APIs", "Jest", "Supertest","Helmet (HTTP headers)", "Express Rate Limit"],
      icon: <FiDatabase className="text-sky-400" />
    },
    {
      title: "Country Explore",
      description: "Developing a web application where travelers and get details about different countries. Supports User Session using google Sign-In via firebase authentication. favorite countries are persistently stored and managed in cloud firestore with responsive user interface.",
      link:"https://countries-app-ahb.pages.dev/",
      Git_link:"https://github.com/Kavinigamalath/countries-app",
      tech: ["React", "Vite", "Firebase Authentication (Google Auth)", "Cloud Firestore", "Tailwind CSS", "Material-UI", "Axios", "Jest","Framer Motion"],
      icon: <FaReact className="text-sky-400" />
    },
    {
      title: "My Portfolio Website",
      description: "A modern, responsive personal portfolio website showcasing my projects and professional experience. Features dynamic content loading, responsive design, and modern UI/UX principles.",
      link: "https://icy-r.dev",
      Git_link:"",
      tech: ["React.js", "Vite", "Modern UI/UX design principles", "ESLint", "SWC", "GitHub Pages","Framer Motion"],
      icon: <FiLayout className="text-sky-400" />
    },
    {
      title: "HealthHorizon: UI design",
      description: "This project showcases the UI design for a health and fitness tracker app built with Android XML and Kotlin in Android Studio. The app follows the 60-30-10 rule for color.",
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
    <section id="projects" className="min-h-screen relative py-20 ">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-sky-300 to-cyan-400 text-transparent bg-clip-text">
            My Projects
          </h2>
          <p className="text-sky-200 max-w-2xl mx-auto">
            A collection of my work showcasing full-stack development, UI/UX design, and problem-solving skills
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
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
      className="bg-sky-900/30 backdrop-blur-sm rounded-xl overflow-hidden border border-sky-700/50
                shadow-lg hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300
                flex flex-col h-full"
    >
      <div className="p-6 flex-1">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-sky-800/50 rounded-lg">
              {project.icon}
            </div>
            <h3 className="text-xl font-bold text-sky-100">{project.title}</h3>
          </div>
          <div className="flex gap-2">
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" 
                className="text-sky-300 hover:text-sky-100 transition-colors p-1"
                aria-label="Live Demo">
                <FiExternalLink size={18} />
              </a>
            )}
            {project.Git_link && (
              <a href={project.Git_link} target="_blank" rel="noopener noreferrer" 
                className="text-sky-300 hover:text-sky-100 transition-colors p-1"
                aria-label="GitHub Repository">
                <FiGithub size={18} />
              </a>
            )}
          </div>
        </div>

        <p className="text-sky-200 mb-6 text-sm leading-relaxed">{project.description}</p>

        <div className="mt-auto">
          <div className="flex items-center gap-2 text-sky-300 mb-3 text-sm font-medium">
            <FiCode />
            <span>Tech Stack</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <span 
                key={i} 
                className="px-3 py-1 bg-sky-800/50 text-xs rounded-full border border-sky-700 text-sky-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}