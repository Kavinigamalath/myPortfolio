import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { FiDownload, FiGithub, FiBook, FiCode, FiAward, FiUser, FiStar } from "react-icons/fi";
import { FaReact,FaTools, FaFigma,FaNodeJs, FaPython, FaJava,FaDocker } from "react-icons/fa";
import { SiJavascript,SiPostman, SiMysql, SiMongodb, SiExpress, SiFramer,SiVite,SiCplusplus } from "react-icons/si";
import { IoHardwareChip, IoShieldCheckmark } from 'react-icons/io5';

// 3D Profile Sphere Component
function ProfileSphere() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
      <Sphere args={[1, 32, 32]}>
        <meshStandardMaterial color="#38bdf8" />
        
      </Sphere>
    </Canvas>
  );
}

// Custom components
function StatBox({ number, label, icon }) {
  return (
    <div className="bg-sky-100/20 p-4 sm:p-5 rounded-xl border border-sky-200/30 backdrop-blur-sm w-full">
      <div className="flex items-center gap-3">
        <div className="text-white text-2xl text-center">{icon}</div>
        <div>
          <div className="text-xl sm:text-2xl font-bold text-white text-center">{number}</div>
          <div className="text-xs sm:text-sm text-sky-100 text-center">{label}</div>
        </div>
      </div>
    </div>
  );
}


function SkillBadge({ skill, icon }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2 bg-sky-100/10 px-3 py-2 rounded-full border border-sky-200/20">
      {icon}
      <span className="text-sm text-white">{skill}</span>
    </motion.div>
  );
}

function ProfileImage() {
  return (
    <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto">
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 opacity-20 animate-pulse"></div>
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-32 h-32 md:w-40 md:h-40">
          <ProfileSphere />
          <img
            src="https://github.com/Kavinigamalath.png"
            alt="Profile"
            className="absolute inset-0 w-full h-full object-cover rounded-full z-10"
          />
        </div>
      </div>
      <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-sky-300 to-blue-400 opacity-30 blur-md -z-10"></div>
    </div>
  );
}

function EducationItem({ degree, institution }) {
  return (
    <div className="mt-3 pl-4 border-l-2 border-sky-400/50">
      <p className="text-white font-medium">{degree}</p>
      <p className="text-sky-200 text-sm">{institution}</p>
    </div>
  );
}

function ProfileContent({ githubStats }) {
  return (
    <div className="flex-1 text-center md:text-left mt-8 md:mt-0 md:pl-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-teal-400 to-indigo-400 text-transparent bg-clip-text">
          KAVINI GAMALATH
            </span>
        </h2>
        <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
          <FiUser className="text-sky-300" />
          <h2 className="text-xl text-sky-200">
            23yrs, Financial Engineering Student
          </h2>
        </div>
        
        <p className="mt-4 text-sky-100 max-w-2xl mx-auto md:mx-0 text-justify">
          I'm a Financial Engineering undergraduate pursuing a Bachelor of Business Management in Financial Engineering, alongside
          a BSc (Hons) in Software Engineering, with a strong foundation in financial analysis, quantitative techniques, and
          data-driven decision making. Experienced in applying programming and analytical skills to financial modeling, business
          analytics, automation, and fintech-related solutions. Actively seeking a finance or financial engineering internship to
          contribute to investment analysis, risk management, fintech development, or corporate finance operations.
          {/* I'm a passionate Software Engineering student at SLIIT, specializing in 
          modern web development, AI applications, and cloud technologies. 
          Dedicated to creating elegant solutions through clean code and innovative thinking. */}
        </p>

        <div className="mt-6">
          <div className="flex items-center gap-2 text-sky-300 justify-center md:justify-start">
            <FiBook className="text-lg" />
            <h3 className="text-lg font-semibold">Education</h3>
          </div>
          <EducationItem 
            degree="B.B.Mgt Honours in Financial Engineering"
            institution="University of Kelaniya"
          />
          <EducationItem 
            degree="BSc (Hons) in Information Technology Specialising in Software Engineering"
            institution="Sri Lanka Institute of Information Technology"
          />
          
        </div>

        <div className="mt-6">
          <div className="flex items-center gap-2 text-sky-300 justify-center md:justify-start">
            <FiCode className="text-lg" />
            <h3 className="text-lg font-semibold">Technical Skills</h3>
          </div>
          <div className="flex flex-wrap gap-3 mt-3 justify-center md:justify-start">
            <SkillBadge skill="JavaScript" icon={<SiJavascript className="text-yellow-300" />} />
            <SkillBadge skill="Docker" icon={<FaDocker className="text-blue-400" />} />
            <SkillBadge skill="React" icon={<FaReact className="text-cyan-400" />} />
            <SkillBadge skill="Node.js" icon={<FaNodeJs className="text-green-500" />} />
            <SkillBadge skill="Python" icon={<FaPython className="text-blue-400" />} />
            <SkillBadge skill="Java" icon={<FaJava className="text-red-500" />} />
            <SkillBadge skill="MongoDB" icon={<SiMongodb className="text-green-400" />} />
            <SkillBadge skill="JWT Authentication"  icon={<IoShieldCheckmark className="text-green-500" /> }/>
            <SkillBadge skill="Vite"  icon={<SiVite className="text-yellow-500" /> }/>
            <SkillBadge skill="CI/CD Pipelines" icon={<FaTools className="text-purple-400" />} />
            <SkillBadge skill="Figma" icon={<FaFigma className="text-purple-500" /> }/>
            <SkillBadge skill="Postman" icon={<SiPostman className="text-orange-500" /> }/>
            <SkillBadge skill="Framer Motion" icon={<SiFramer className="text-blue-500" /> }/>
            <SkillBadge skill="C/C++" icon={<SiCplusplus className="text-blue-600" /> }/>
            <SkillBadge skill="Express.js" icon={<SiExpress className="text-gray-300" />} />
            <SkillBadge skill="MySQL" icon={<SiMysql className="text-blue-500" />} />

            
          </div>
        </div>

        <div className="mt-6 px-4 md:px-0">
  <div className="flex items-center gap-2 text-sky-300 justify-center md:justify-start">
    <FiStar className="text-lg" />
    <h3 className="text-lg font-semibold">GitHub Stats</h3>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 max-w-3xl mx-auto md:mx-0">
    <StatBox number={githubStats.public_repos} label="Repos" icon={<FiCode className="text-sky-300" />} />
    <StatBox number={githubStats.followers} label="Followers" icon={<FiUser className="text-sky-300" />} />
    <StatBox number={githubStats.following} label="Following" icon={<FiUser className="text-sky-300" />} />
  </div>
</div>


        <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://kavinigamalath.github.io/myPortfolio/Kavini_Gamalath_CV.pdf"
            download="Kavini_Gamalath-CV.pdf"
            className="flex items-center px-5 py-2.5 bg-gradient-to-r from-sky-500 to-blue-600 
                       rounded-lg text-white font-medium
                       transition-all duration-300 shadow-lg gap-2"
          >
            <FiDownload />
            <span>Download CV</span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://github.com/Kavinigamalath"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-5 py-2.5 bg-gradient-to-r from-gray-700 to-gray-900 
                       rounded-lg text-white font-medium
                       transition-all duration-300 shadow-lg gap-2"
          >
            <FiGithub />
            <span>GitHub Profile</span>
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}

export default function HomeSection() {
  const [githubStats, setGitHubStats] = useState({
    public_repos: 0,
    followers: 0,
    following: 0,
  });

  useEffect(() => {
    fetch("https://api.github.com/users/Kavinigamalath")
      .then((res) => res.json())
      .then((data) =>
        setGitHubStats({
          public_repos: data.public_repos,
          followers: data.followers,
          following: data.following,
        })
      )
      .catch((err) => console.error("GitHub API error:", err));
  }, []);

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center py-10 px-4 md:px-8  pt-32">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-48 h-48 bg-sky-500 rounded-full filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-float-delay"></div>
      </div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-5xl z-10"
      >
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden bg-gradient-to-b from-sky-900/30 to-blue-900/10 border border-sky-200/20 p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <ProfileImage />
            <ProfileContent githubStats={githubStats} />
          </div>
        </div>
      </motion.div>
    </section>
  );
}