import { motion } from 'framer-motion'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiTailwindcss, SiThreedotjs } from 'react-icons/si'

export default function Footer() {
  return (
    <footer className="py-8 bg-gradient-to-r from-sky-900/90 to-blue-900/90 backdrop-blur-md border-t border-sky-700/50 w-full overflow-hidden relative">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute bottom-10 left-1/4 w-32 h-32 bg-cyan-400 rounded-full filter blur-3xl animate-float"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center justify-center gap-4 mb-2">
            <TechIcon icon={<FaReact className="text-cyan-300" />} tooltip="React" />
            <TechIcon icon={<SiThreedotjs className="text-sky-100" />} tooltip="Three.js" />
            <TechIcon icon={<SiTailwindcss className="text-sky-300" />} tooltip="Tailwind CSS" />
            <TechIcon icon={<FaNodeJs className="text-emerald-400" />} tooltip="Node.js" />
          </div>

          <p className="text-sky-200 text-sm md:text-base">
            © {new Date().getFullYear()} Kavini Gamalath. All rights reserved.
          </p>
          <p className="text-sky-300/80 text-xs mt-1">
            Crafted with passion and cutting-edge web technologies
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

function TechIcon({ icon, tooltip }) {
  return (
    <motion.div 
      whileHover={{ y: -3 }}
      className="relative group"
    >
      <div className="p-2 bg-sky-800/30 rounded-full backdrop-blur-sm border border-sky-700/50">
        {icon}
      </div>
      <span className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-xs text-sky-100 bg-sky-900/80 px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        {tooltip}
      </span>
    </motion.div>
  )
}