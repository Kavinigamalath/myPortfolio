import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaFileDownload, FaHome, FaProjectDiagram, FaTools, FaGraduationCap, FaEnvelope } from 'react-icons/fa';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Section detection logic
      const sections = ['home', 'projects', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full flex justify-center z-[9000] pointer-events-none">
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`flex items-center justify-center py-2 px-4 rounded-full 
                   bg-gradient-to-br from-blue-900/90 to-blue-800/90 backdrop-blur-lg
                   shadow-lg border border-blue-500/30 mt-4 pointer-events-auto
                   ${scrolled ? 'shadow-xl shadow-blue-500/20' : ''}
                   transition-all duration-300`}
      >
        <nav className="flex items-center gap-1 md:gap-2">
          <NavLink 
            href="#home" 
            active={activeSection === 'home'} 
            icon={<FaHome className="text-xs md:text-base" />}
            isMobile={isMobile}
          >
            Home
          </NavLink>
          
          <NavLink 
            href="#projects" 
            active={activeSection === 'projects'} 
            icon={<FaProjectDiagram className="text-xs md:text-base" />}
            isMobile={isMobile}
          >
            Projects
          </NavLink>
          
          <NavLink 
            href="#skills" 
            active={activeSection === 'skills'} 
            icon={<FaTools className="text-xs md:text-base" />}
            isMobile={isMobile}
          >
            Skills
          </NavLink>
          
          <NavLink 
            href="#experience" 
            active={activeSection === 'experience'} 
            icon={<FaGraduationCap className="text-xs md:text-base" />}
            isMobile={isMobile}
          >
            experience
          </NavLink>
          
          <NavLink 
            href="#contact" 
            active={activeSection === 'contact'} 
            icon={<FaEnvelope className="text-xs md:text-base" />}
            isMobile={isMobile}
          >
            Contact
          </NavLink>
          
          <div className="h-6 w-px bg-blue-400/50 mx-1 md:mx-2"></div>
          
          <CVButton isMobile={isMobile} />
        </nav>
      </motion.div>
    </div>
  );
}

function NavLink({ href, active, icon, children, isMobile }) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
      className={`flex items-center gap-1 px-2 py-1 md:px-3 md:py-2 rounded-lg text-xs md:text-sm font-medium
                ${active ? 'bg-blue-700/50 text-white' : 'text-blue-100 hover:text-white'}
                transition-all duration-300 group relative overflow-hidden`}
    >
      <motion.span
        animate={active ? { rotate: [0, 10, -10, 0] } : {}}
        transition={{ duration: 0.6 }}
        className="text-blue-300 group-hover:text-white"
      >
        {icon}
      </motion.span>
      <span className={`${isMobile ? 'text-xs' : 'text-sm'} ${children.length > 5 ? 'hidden md:inline' : 'inline'}`}>
        {children}
      </span>
      
      {active && (
        <motion.div 
          layoutId="navActiveIndicator"
          className="absolute inset-0 border border-blue-400/50 rounded-lg pointer-events-none"
          initial={false}
          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
        />
      )}
      
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400 origin-left scale-x-0 group-hover:scale-x-100"
        initial={false}
        animate={{ scaleX: active ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
  );
}

function CVButton({ isMobile }) {
  return (
    <a
      href="https://kavinigamalath.github.io/myPortfolio/Kavini_Gamalath_CV.pdf"
      download="Kavini_Gamalath-CV.pdf"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`flex items-center gap-1 px-3 py-1 md:px-4 md:py-2 bg-gradient-to-r from-blue-600 to-blue-500
                   rounded-full text-white text-xs md:text-sm font-semibold shadow-md
                   hover:shadow-lg hover:shadow-blue-500/30 transition-all`}
      >
        <span className={isMobile ? 'xs:hidden' : 'hidden md:inline'}>Download CV</span>
        <motion.div
          animate={{ y: [0, 2, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FaFileDownload className="text-blue-100 text-xs md:text-sm" />
        </motion.div>
      </motion.button>
    </a>
  );
}