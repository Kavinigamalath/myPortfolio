import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, Sparkles } from '@react-three/drei'
import { useEffect, useState } from 'react'
import * as THREE from 'three'
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [dimensions, setDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
    isMobile: typeof window !== 'undefined' ? window.innerWidth <= 768 : false
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth <= 768
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="App w-full max-w-[100vw] overflow-x-hidden">
      {/* Enhanced Starry Background */}
      <div 
        className="fixed inset-0 w-full h-full z-[-1] bg-gradient-to-b from-black to-gray-900"
        style={{
          width: `${dimensions.width}px`,
          height: `${dimensions.height}px`
        }}
      >
        <Canvas
          dpr={Math.min(window.devicePixelRatio, 2)}
          gl={{ antialias: false, alpha: true }}
          camera={{ position: [0, 0, 1], fov: 75 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            touchAction: dimensions.isMobile ? 'auto' : 'none',
            pointerEvents: dimensions.isMobile ? 'none' : 'auto'
          }}
        >
          <ambientLight intensity={0.25} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#4fc3f7" />
          
          {/* Primary Star Field */}
          <Stars
            radius={dimensions.isMobile ? 60 : 120}
            depth={dimensions.isMobile ? 40 : 70}
            count={dimensions.isMobile ? 3000 : 8000}
            factor={dimensions.isMobile ? 3 : 6}
            saturation={0}
            fade
            speed={dimensions.isMobile ? 0.8 : 1.8}
            color="#ffffff"
            emissive="#ffffff"
            intensity={3}
          />
          
          {/* Secondary Sparkling Stars */}
          <Sparkles
            count={dimensions.isMobile ? 1000 : 2000}
            size={dimensions.isMobile ? 2 : 3}
            speed={dimensions.isMobile ? 0.5 : 1}
            opacity={1}
            scale={dimensions.isMobile ? 10 : 20}
            color="#ffffff"
            noise={0.2}
          />
          
          {/* Distant Twinkling Stars */}
          <Stars
            radius={dimensions.isMobile ? 100 : 200}
            depth={dimensions.isMobile ? 60 : 100}
            count={dimensions.isMobile ? 1500 : 3000}
            factor={dimensions.isMobile ? 1 : 2}
            saturation={0}
            fade
            speed={dimensions.isMobile ? 0.3 : 0.6}
            color="#4fc3f7"
            emissive="#4fc3f7"
            intensity={1.5}
          />
          
          {!dimensions.isMobile && (
            <OrbitControls 
              enableZoom={false}
              autoRotate
              autoRotateSpeed={0.9}
              enablePan={false}
              rotateSpeed={0.5}
            />
          )}
        </Canvas>
        
        {/* Animated Gradient Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(
              135deg,
              rgba(2, 8, 23, 0.8) 0%,
              rgba(15, 23, 42, 0.4) 50%,
              rgba(2, 8, 23, 0.8) 100%
            )`,
            animation: 'pulseBackground 20s infinite alternate',
            width: `${dimensions.width}px`,
            height: `${dimensions.height}px`
          }}
        ></div>
      </div>

      {/* Content */}
       <div className="content relative z-10 w-full max-w-[100vw] overflow-x-hidden px-4 sm:px-6">
        <Navbar />
        <div className="mx-auto w-full max-w-7xl">
        <HomeSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
        </div>
        </div>
        <Footer />
        
      {/* Global Styles */}
      <style jsx="true" global="true">{`
        @keyframes pulseBackground {
          0% { opacity: 0.7; }
          50% { opacity: 0.9; }
          100% { opacity: 0.7; }
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  )
}

export default App