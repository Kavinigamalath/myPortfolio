import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App w-full max-w-full overflow-x-hidden">
      {/* Background Canvas with forced dark backdrop */}
      <div className="fixed inset-0 w-full h-screen z-[-1] bg-black">
        <Canvas>
          <Stars 
            radius={100} 
            depth={10} 
            count={5000} 
            factor={4} 
            saturation={0} 
            fade 
            speed={1} 
            color="#ffffff" // Pure white color
            emissive="#ffffff" // Self-illumination
            intensity={2.5} // Brighter stars
          />
          <OrbitControls 
            enableZoom={false} 
            autoRotate 
            autoRotateSpeed={0.75} 
          />
        </Canvas>
      </div>

      {/* Rest of your content remains the same */}
      <div className="content relative z-10 w-full overflow-x-hidden">
        <Navbar />
        <HomeSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  )
}

export default App