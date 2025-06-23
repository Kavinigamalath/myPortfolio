import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaGlobe, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa'
import { SiThreedotjs } from 'react-icons/si'

export default function ContactSection() {
  return (
    <section id="contact" className="min-h-screen py-10 md:py-20 relative w-full flex items-center justify-center overflow-hidden px-4">
      
      {/* Animated floating particles - reduced count for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-400/20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
              opacity: 0.3
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              transition: {
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                repeatType: 'reverse'
              }
            }}
            style={{
              width: Math.random() * 8 + 3,
              height: Math.random() * 8 + 3,
            }}
          />
        ))}
      </div>

      {/* Floating 3D-like glow - adjusted for mobile */}
      <div className="absolute inset-0 overflow-hidden opacity-20 md:opacity-30">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-sky-500 rounded-full filter blur-xl md:blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-32 h-32 md:w-64 md:h-64 bg-cyan-400 rounded-full filter blur-xl md:blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-4xl w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-sky-300 to-cyan-400 text-transparent bg-clip-text">
              Let's 
            </span>
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mx-2 md:mx-4 text-white"
            >
              WORK
            </motion.span>
            <span className="bg-gradient-to-r from-cyan-400 to-sky-300 text-transparent bg-clip-text">
              Together
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-sky-200 max-w-md sm:max-w-xl md:max-w-2xl mx-auto">
            Excited to grow and contribute — I'm currently seeking internship opportunities where I can bring ideas to life and learn from the best.
          </p>
        </motion.div>
        
        {/* Responsive Contact Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto bg-gradient-to-br from-sky-900/50 to-blue-900/50 backdrop-blur-lg 
                     rounded-xl md:rounded-2xl p-6 md:p-8 border border-sky-700/50 md:border-2
                     shadow-lg hover:shadow-xl md:hover:shadow-3xl hover:shadow-sky-500/20 transition-all duration-500
                     relative overflow-hidden w-full max-w-md md:max-w-2xl"
        >
          <motion.div 
            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-sky-500"
            initial={{ x: '-100%' }}
            whileInView={{ x: '100%' }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            viewport={{ once: true }}
          />

          {/* CONTACT INFO ONLY */}
          <ContactInfo />
        </motion.div>
      </div>
    </section>
  )
}


function ContactInfo() {
  return (
    <div>
      <h3 className="text-xl md:text-2xl font-bold text-sky-100 mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
        <motion.span 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-3 h-3 md:w-4 md:h-4 bg-cyan-400 rounded-full"
        ></motion.span>
        Contact Information
      </h3>
      
      <div className="space-y-3 md:space-y-5">
        <ContactItem 
          icon={<FaEnvelope className="text-cyan-300 text-lg md:text-xl" />}
          text="kavinigamalathofficial@gmail.com"
          link="mailto:kavinigamalathofficial@gmail.com"
          pulseColor="bg-cyan-400"
        />
        <ContactItem 
          icon={<FaPhone className="text-cyan-300 text-lg md:text-xl" />}
          text="+94 71 580 5080"
          link="tel:+94715805080"
          pulseColor="bg-sky-400"
        />
        <ContactItem 
          icon={<FaGlobe className="text-cyan-300 text-lg md:text-xl" />}
          text="kavinigamalath.github.io/myPortfolio"
          link="https://kavinigamalath.github.io/myPortfolio/"
          pulseColor="bg-blue-400"
        />
        <ContactItem 
          icon={<FaMapMarkerAlt className="text-cyan-300 text-lg md:text-xl" />}
          text="Colombo, Sri Lanka"
          link="https://goo.gl/maps/yourlocation"
          pulseColor="bg-teal-400"
        />
      </div>

      <div className="mt-8 md:mt-10">
        <h4 className="text-lg md:text-xl font-bold text-sky-100 mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
          <motion.span 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="w-3 h-3 md:w-4 md:h-4 bg-cyan-400 rounded-full"
          ></motion.span>
          Let's Connect
        </h4>
        <div className="flex gap-3 md:gap-5 justify-center">
          <SocialLink 
            href="https://www.linkedin.com/in/kavinigamalath/"
            icon={<FaLinkedin className="text-lg md:text-xl" />}
            color="bg-blue-600"
          />
          <SocialLink 
            href="https://github.com/Kavinigamalath"
            icon={<FaGithub className="text-lg md:text-xl" />}
            color="bg-gray-800"
          />
          <SocialLink 
            href="https://threejs.org"
            icon={<SiThreedotjs className="text-lg md:text-xl" />}
            color="bg-sky-800"
          />
        </div>
      </div>
    </div>
  )
}


function ContactItem({ icon, text, link, pulseColor }) {
  return (
    <motion.a 
      whileHover={{ x: 5 }}
      whileTap={{ scale: 0.98 }}
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex items-center gap-3 md:gap-4 group relative"
    >
      <motion.div 
        className={`absolute -left-1 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${pulseColor} opacity-0 group-hover:opacity-100`}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.8, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
      />
      <div className="p-2 md:p-3 bg-gradient-to-br from-cyan-400/20 to-sky-500/20 rounded-lg md:rounded-xl group-hover:from-cyan-400/30 group-hover:to-sky-500/30 transition-all shadow-sm group-hover:shadow-cyan-400/10">
        {icon}
      </div>
      <span className="text-sm sm:text-base text-sky-200 group-hover:text-cyan-300 transition-colors font-medium break-all">
        {text}
      </span>
    </motion.a>
  )
}


function SocialLink({ href, icon, color = "bg-cyan-600" }) {
  return (
    <motion.a 
      whileHover={{ 
        y: -3,
        scale: 1.1,
        boxShadow: `0 5px 15px rgba(255,255,255,0.2)`
      }}
      whileTap={{ scale: 0.9 }}
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`p-3 md:p-4 ${color} rounded-full text-white hover:text-white transition-all shadow-md hover:shadow-lg relative overflow-hidden`}
    >
      <motion.span
        className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity"
        whileHover={{ scale: 1.5 }}
      />
      {icon}
    </motion.a>
  )
}