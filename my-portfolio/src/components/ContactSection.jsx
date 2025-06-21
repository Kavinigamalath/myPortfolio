import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaGlobe, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa'
import { SiThreedotjs } from 'react-icons/si'

export default function ContactSection() {
  return (
    <section id="contact" className="min-h-screen py-20 relative w-full flex items-center justify-center overflow-hidden ">
      
      {/* Animated floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
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
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
            }}
          />
        ))}
      </div>

      {/* Floating 3D-like glow */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-sky-500 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-400 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-sky-300 to-cyan-400 text-transparent bg-clip-text">
              Let's 
            </span>
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mx-4 text-white"
            >
              WORK
            </motion.span>
            <span className="bg-gradient-to-r from-cyan-400 to-sky-300 text-transparent bg-clip-text">
              Together
            </span>
          </h2>
          <p className="text-lg md:text-xl text-sky-200 max-w-2xl mx-auto">
            Excited to grow and contribute — I’m currently seeking internship opportunities where I can bring ideas to life and learn from the best.
          </p>
        </motion.div>
        
        {/* Centered Contact Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto bg-gradient-to-br from-sky-900/50 to-blue-900/50 backdrop-blur-lg 
                     rounded-2xl p-8 border-2 border-sky-700/50
                     shadow-2xl hover:shadow-3xl hover:shadow-sky-500/20 transition-all duration-500
                     relative overflow-hidden max-w-2xl"
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
      <h3 className="text-2xl font-bold text-sky-100 mb-6 flex items-center gap-3">
        <motion.span 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-4 h-4 bg-cyan-400 rounded-full"
        ></motion.span>
        Contact Information
      </h3>
      
      <div className="space-y-5">
        <ContactItem 
          icon={<FaEnvelope className="text-cyan-300 text-xl" />}
          text="kavinigamalathofficial@gmail.com"
          link="mailto:kavinigamalathofficial@gmail.com"
          pulseColor="bg-cyan-400"
        />
        <ContactItem 
          icon={<FaPhone className="text-cyan-300 text-xl" />}
          text="+94 71 580 5080"
          link="tel:+94715805080"
          pulseColor="bg-sky-400"
        />
        <ContactItem 
          icon={<FaGlobe className="text-cyan-300 text-xl" />}
          text="https://kavinigamalath.github.io/myPortfolio/"
          link="https://kavinigamalath.github.io/myPortfolio/"
          pulseColor="bg-blue-400"
        />
        <ContactItem 
          icon={<FaMapMarkerAlt className="text-cyan-300 text-xl" />}
          text="Colombo, Sri Lanka"
          link="https://goo.gl/maps/yourlocation"
          pulseColor="bg-teal-400"
        />
      </div>

      <div className="mt-10">
        <h4 className="text-xl font-bold text-sky-100 mb-6 flex items-center gap-3">
          <motion.span 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="w-4 h-4 bg-cyan-400 rounded-full"
          ></motion.span>
          Let's Connect
        </h4>
        <div className="flex gap-5 justify-center">
          <SocialLink 
            href="https://www.linkedin.com/in/kavinigamalath/"
            icon={<FaLinkedin className="text-xl" />}
            color="bg-blue-600"
          />
          <SocialLink 
            href="https://github.com/Kavinigamalath"
            icon={<FaGithub className="text-xl" />}
            color="bg-gray-800"
          />
          <SocialLink 
            href="https://threejs.org"
            icon={<SiThreedotjs className="text-xl" />}
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
      className="flex items-center gap-4 group relative"
    >
      <motion.div 
        className={`absolute -left-1 w-2 h-2 rounded-full ${pulseColor} opacity-0 group-hover:opacity-100`}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.8, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
      />
      <div className="p-3 bg-gradient-to-br from-cyan-400/20 to-sky-500/20 rounded-xl group-hover:from-cyan-400/30 group-hover:to-sky-500/30 transition-all shadow-sm group-hover:shadow-cyan-400/10">
        {icon}
      </div>
      <span className="text-sky-200 group-hover:text-cyan-300 transition-colors font-medium">
        {text}
      </span>
    </motion.a>
  )
}


function SocialLink({ href, icon, color = "bg-cyan-600" }) {
  return (
    <motion.a 
      whileHover={{ 
        y: -5,
        scale: 1.1,
        boxShadow: `0 5px 15px rgba(255,255,255,0.2)`
      }}
      whileTap={{ scale: 0.9 }}
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`p-4 ${color} rounded-full text-white hover:text-white transition-all shadow-md hover:shadow-lg relative overflow-hidden`}
    >
      <motion.span
        className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity"
        whileHover={{ scale: 1.5 }}
      />
      {icon}
    </motion.a>
  )
}


// function ContactForm() {
//   return (
//     <div>
//       <h3 className="text-2xl font-bold text-yellow-200 mb-4">Send Me a Message</h3>
//       <form className="space-y-4">
//         <div>
//           <input 
//             placeholder="Your Name" 
//             className="w-full px-4 py-2 bg-yellow-900/30 border border-yellow-500/30 rounded-lg focus:outline-none focus:border-yellow-500/70 text-white placeholder-yellow-200/70" 
//             type="text" 
//           />
//         </div>
//         <div>
//           <input 
//             placeholder="Your Email" 
//             className="w-full px-4 py-2 bg-yellow-900/30 border border-yellow-500/30 rounded-lg focus:outline-none focus:border-yellow-500/70 text-white placeholder-yellow-200/70" 
//             type="email" 
//           />
//         </div>
//         <div>
//           <textarea 
//             rows="4" 
//             placeholder="Your Message" 
//             className="w-full px-4 py-2 bg-yellow-900/30 border border-yellow-500/30 rounded-lg focus:outline-none focus:border-yellow-500/70 text-white placeholder-yellow-200/70 resize-none"
//           ></textarea>
//         </div>
//         <div>
//           <button 
//             type="button" 
//             className="px-6 py-3 bg-gradient-to-r from-yellow-600 to-amber-600 text-white font-medium rounded-lg hover:from-amber-600 hover:to-yellow-600 transition-all hover:scale-105 shadow-[0_0_10px_rgba(245,158,11,0.5)] w-full"
//           >
//             Send Message
//           </button>
//         </div>
//       </form>
//     </div>
//   )
// }