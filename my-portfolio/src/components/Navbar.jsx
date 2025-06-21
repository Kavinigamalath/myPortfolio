import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaFileDownload, FaMoon, FaSun } from 'react-icons/fa';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(false);

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
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`flex items-center justify-center py-3 px-6 rounded-full 
                   ${darkMode ? 'bg-gray-900' : 'bg-white'} 
                   shadow-lg backdrop-blur-md border ${
                     darkMode ? 'border-blue-400/30' : 'border-blue-600/20'
                   } mt-4 pointer-events-auto transition-all duration-300
                   ${scrolled ? 'py-2 shadow-xl' : ''}`}
      >
        <nav className="flex items-center gap-1 sm:gap-4">
          <NavLink href="#home" active={activeSection === 'home'} darkMode={darkMode}>
            Home
          </NavLink>
          <NavLink href="#projects" active={activeSection === 'projects'} darkMode={darkMode}>
            Projects
          </NavLink>
          <NavLink href="#skills" active={activeSection === 'skills'} darkMode={darkMode}>
            Skills
          </NavLink>
          <NavLink href="#experience" active={activeSection === 'experience'} darkMode={darkMode}>
            Experience
          </NavLink>
          <NavLink href="#contact" active={activeSection === 'contact'} darkMode={darkMode}>
            Contact
          </NavLink>
          
          <div className="flex items-center gap-2 ml-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full ${
                darkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-600'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </motion.button>
            
            <CVButton darkMode={darkMode} />
          </div>
        </nav>
      </motion.div>
    </div>
  );
}

function NavLink({ href, active, darkMode, children }) {
  return (
    <a href={href} className="relative px-3 py-1 group">
      <span className={`text-sm font-medium transition-colors ${
        darkMode 
          ? active ? 'text-blue-400' : 'text-gray-300 hover:text-blue-300' 
          : active ? 'text-blue-600' : 'text-gray-700 hover:text-blue-500'
      }`}>
        {children}
      </span>
      
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: active ? '100%' : 0 }}
        transition={{ duration: 0.3 }}
        className={`absolute bottom-0 left-0 h-0.5 ${
          darkMode ? 'bg-blue-400' : 'bg-blue-600'
        } rounded-full`}
      />
      
      <motion.div
        className={`absolute bottom-0 left-0 h-0.5 ${
          darkMode ? 'bg-blue-400' : 'bg-blue-600'
        } rounded-full`}
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.3 }}
      />
    </a>
  );
}

function CVButton({ darkMode }) {
  return (
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href="https://kavinigamalath.github.io/myPortfolio/Kavini_Gamalath-CV.pdf"
      download="Kavini_Gamalath-CV.pdf"
      className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
        darkMode
          ? 'bg-gradient-to-r from-blue-700 to-blue-500 text-white shadow-blue-900/50'
          : 'bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-blue-500/50'
      } shadow-md hover:shadow-lg`}
    >
      <span>Download CV</span>
      <FaFileDownload className="text-xs" />
    </motion.a>
  );
}