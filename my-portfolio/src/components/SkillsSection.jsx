import { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { FaReact, FaNodeJs, FaJava, FaPython, FaDocker, FaGitAlt, FaFigma } from 'react-icons/fa';
import { SiTypescript, SiPostman, SiVite, SiFramer, SiJavascript, SiCplusplus, SiTailwindcss, SiFirebase, SiMongodb, SiMysql, SiAndroidstudio, SiLinux } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { IoHardwareChip, IoShieldCheckmark } from 'react-icons/io5';
import { motion } from 'framer-motion';

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState('development');
  
  const developmentSkills = [
    // { name: "JavaScript/TypeScript", icon: <div className="flex gap-1"><SiJavascript className="text-yellow-400" /><SiTypescript className="text-blue-500" /></div> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "Java/JUnit", icon: <FaJava className="text-red-500" /> },
    { name: "Python", icon: <FaPython className="text-blue-400" /> },
    { name: "C/C++", icon: <SiCplusplus className="text-blue-600" /> },
    { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <div className="text-gray-300 font-bold text-xs">EX</div> },
    { name: "RESTful APIs", icon: <TbApi className="text-green-400" /> },
    { name: "Android Studio", icon: <SiAndroidstudio className="text-green-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
    { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
    { name: "JWT Authentication", icon: <IoShieldCheckmark className="text-green-500" /> },
    { name: "Vite", icon: <SiVite className="text-yellow-500" /> },
    { name: "CI/CD Pipelines", icon: <IoHardwareChip className="text-purple-400" /> },
    { name: "Figma", icon: <FaFigma className="text-purple-500" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    { name: "Framer Motion", icon: <SiFramer className="text-blue-500" /> },
       
  ];

  const softSkills = [
    { name: "Leadership", icon: "👔" },
    { name: "Team Management", icon: "👥" },
    { name: "Communication", icon: "💬" },
    { name: "Teamwork", icon: "🤝" },
    { name: "Problem-solving", icon: "🔍" },
    { name: "Time Management", icon: "⏳" },
    { name: "Adaptability", icon: "🌱" },
    { name: "Analytical Thinking", icon: "📈" },
    { name: "Fast Learning", icon: "🚀" },
    { name: "Self-Motivation", icon: "💪" },
    { name: "Critical Thinking", icon: "🧠" },
    { name: "Creativity", icon: "🎨" },
    { name: "Emotional Intelligence", icon: "❤️" },
  ];

  const interests = [
    
    { name: "Android Development", icon: "📱" },
    { name: "Full Stack Development", icon: "🛠️" },
    { name: "Backend Development", icon: "🏗️" },
    { name: "Cloud Computing", icon: "☁️" },
    { name: "Amazon Web Services (AWS)", icon: "🌩️" },
    { name: "DevOps & CI/CD", icon: "🔄" },
    { name: "UI/UX Design", icon: "🎨" },
    { name: "Linux & Shell Scripting", icon: "🐧" },
    { name: "Open Source Contributions", icon: "📂" },
    { name: "Artificial Intelligence & Machine Learning", icon: "🤖" },
    { name: "Blockchain & Web3", icon: "⛓️" },
    { name: "Internet of Things (IoT)", icon: "🌐" },
    { name: "Augmented & Virtual Reality (AR/VR)", icon: "👓" },

  ];

  const getActiveSkills = () => {
    switch (activeTab) {
      case 'development': return developmentSkills;
      case 'soft': return softSkills;
      case 'interests': return interests;
      default: return developmentSkills;
    }
  };

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-10 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-400 rounded-full filter blur-3xl animate-float-delay"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-teal-400 to-indigo-400 text-transparent bg-clip-text">
            My Skills & Expertise
            </span>
          </h2>
          
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          
          {/* Skills Content */}
          <div className="w-full lg:w-2/3">
            {/* Tab Navigation */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center mb-8"
            >
              <div className="inline-flex bg-blue-900/30 backdrop-blur-md rounded-full p-1 border border-blue-500/20 shadow-lg">
                {['development', 'soft', 'interests'].map((tab) => (
                  <motion.button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeTab === tab 
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md' 
                        : 'text-blue-500 hover:blue-700'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </motion.button>
                ))}
              </div>
            </motion.div>
            
            {/* Skills Grid */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-4xl mx-auto "
            >
              {getActiveSkills().map((skill, index) => (
                <SkillBadge key={index} skill={skill.name} icon={skill.icon} />
              ))}
            </motion.div>
            
            {/* Description */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-10 max-w-2xl mx-auto text-center text-blue-200 bg-blue-900/30 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20"
            >
              <p>
                {activeTab === 'development' && "I specialize in full-stack development with expertise in JavaScript. My technical skills enable me to build robust, scalable applications from concept to deployment."}
                {activeTab === 'soft' && "Beyond code, I excel in leadership, communication, and problem-solving. These skills allow me to collaborate effectively, lead teams, and deliver solutions that meet both technical and business needs."}
                {activeTab === 'interests' && "Continuously exploring emerging technologies, I'm passionate about AI/ML, cloud computing, and open-source development, always seeking innovative solutions to complex problems."}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillBadge({ skill, icon }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="group relative"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-lg opacity-40 blur-sm group-hover:opacity-70 transition duration-300"></div>
      <div className="relative px-2 py-3 bg-blue-900/70 rounded-lg text-white font-medium cursor-default
                    border border-blue-500/20 backdrop-blur-sm
                    transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(56,182,255,0.3)] flex flex-col items-center gap-2">
        <div className="text-xl md:text-2xl">{icon}</div>
        <span className="text-xs md:text-sm text-center font-medium">{skill}</span>
      </div>
    </motion.div>
  );
}

function SkillSphere({ activeTab }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  const getColor = () => {
    switch (activeTab) {
      case 'development': return new THREE.Color(0x3b82f6); // Blue-500
      case 'soft': return new THREE.Color(0x60a5fa); // Blue-400
      case 'interests': return new THREE.Color(0x93c5fd); // Blue-300
      default: return new THREE.Color(0x3b82f6);
    }
  };

  return (
    <group ref={meshRef}>
      <Sphere args={[3.5, 32, 32]}>
        <meshPhongMaterial
          color={getColor()}
          shininess={100}
          specular="#ffffff"
          emissive="#1e40af"
          emissiveIntensity={0.3}
          wireframe={false}
          transparent
          opacity={0.9}
        />
      </Sphere>
    </group>
  );
}