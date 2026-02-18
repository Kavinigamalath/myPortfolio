import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaUserTie, FaUsers } from 'react-icons/fa';

export default function ExperienceSection() {
  const certifications = [
    {
      title: "Financial Modeling Course",
      provider: "Udemy",
      date: "Feb 2025"
    },
    {
      title: "Finance Focus Badge",
      provider: "HP LIFE",
      date: "Jan 2025"
    },
    {
      title: "Basics of Finance",
      provider: "HP LIFE",
      date: "Jan 2025"
    },
    {
      title: "Profit and Loss",
      provider: "HP LIFE",
      date: "Jan 2025"
    },
    {
      title: "Cash Flow",
      provider: "HP LIFE",
      date: "Jan 2025"
    },
    {
      title: "Sales Forecasting",
      provider: "HP LIFE",
      date: "Jan 2025"
    },
    {
      title: "Finding Funding",
      provider: "HP LIFE",
      date: "Jan 2025"
    },
    {
      title: "Financial Services Industry Knowledge Accelerator",
      provider: "MongoDB",
      date: "Oct 2025"
    },
    {
      title: "Card Fraud Prevention for Financial Services",
      provider: "MongoDB",
      date: "Oct 2025"
    },
    {
      title: "Blockchain for Financial Services",
      provider: "MongoDB",
      date: "Oct 2025"
    },
    {
      title: "Introduction to Key Payment Trends and Initiatives for Financial Services",
      provider: "MongoDB",
      date: "Oct 2025"
    },
    {
      title: "Introduction MongoDB for Financial Services Industry (FSI)",
      provider: "MongoDB",
      date: "Oct 2025"
    },
    {
      title: "Associate Professional Risk Manager APRM Certificate",
      provider: "Udemy",
      date: "Jan 2025"
    },
    {
      title: "Certificate of Participation - Holamozilla",
      provider: "Mozilla Campus Club of SLIIT",
      date: "Oct 2025"
    },
    {
      title: "MongoDB Atlas Administrator Path",
      provider: "MongoDB",
      date: "Oct 2025"
    },
    {
      title: "MongoDB Data Modeling Path",
      provider: "MongoDB",
      date: "Oct 2025"
    },
    {
      title: "Schema Design Anti Patterns",
      provider: "MongoDB",
      date: "Oct 2025"
    },
    {
      title: "Schema Design Patterns",
      provider: "MongoDB",
      date: "Oct 2025"
    },
    {
      title: "Advanced Schema Design Patterns",
      provider: "MongoDB",
      date: "Oct 2025"
    },
    {
      title: "Getting Started with MongoDB Atlas",
      provider: "MongoDB",
      date: "Oct 2025"
    },
    {
      title: "Postman API Fundamentals Student Expert Certificate",
      provider: "Postman",
      date: "May 2025"
    },
    {
      title: "Certificate in Ethical Artificial Intelligence (AI) Course",
      provider: "The CISI",
      date: "Jan 2025"
    },
    {
      title: "Data Science & Analytics",
      provider: "HP LIFE",
      date: "Jan 2025"
    },
    {
      title: "Agile Project Management",
      provider: "HP LIFE",
      date: "Jan 2025"
    },
    {
      title: "IT for Business Success",
      provider: "HP LIFE",
      date: "Jan 2025"
    },
    {
      title: "Inventory Management",
      provider: "HP LIFE",
      date: "Jan 2025"
    },
    {
      title: "Operational Aspects Badge",
      provider: "HP LIFE",
      date: "Jan 2025"
    },
    {
      title: "Social Media Marketing",
      provider: "HP LIFE",
      date: "Jan 2025"
    },
    {
      title: "Certificate in Business & Operations Management Excellence",
      provider: "Udemy",
      date: "Jan 2025"
    },
    {
      title: "Digital Transformation & Customer Experience Management CXM",
      provider: "Udemy",
      date: "Jan 2025"
    },
    {
      title: "Diploma: Human Resources, Compensation & Benefits Management",
      provider: "Udemy",
      date: "Jan 2025"
    },
    {
      title: "Python for Beginners",
      provider: "University of Moratuwa",
      date: "Jul 2024"
    },
    {
      title: "Web Design for Beginners",
      provider: "University of Moratuwa",
      date: "Jul 2024"
    },
    {
      title: "Certificate course in computer Applications",
      provider: "IHRA University of Colombo",
      date: "May 2023"
    },
    {
      title: "Certificate course in English language",
      provider: "IHRA University of Colombo",
      date: "Jan 2023"
    }
  ]

  const uniqueCertifications = []
  const seenCertifications = new Set()

  for (const certification of certifications) {
    const key = `${certification.title}__${certification.provider}`

    if (seenCertifications.has(key)) {
      continue
    }

    seenCertifications.add(key)
    uniqueCertifications.push(certification)
  }

  return (
    <section id="experience" className="min-h-screen relative py-10  overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-600 rounded-full filter blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-teal-500 rounded-full filter blur-3xl"
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-teal-400 to-indigo-400 text-transparent bg-clip-text">
              My Journey
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Education, certifications, and experiences that shaped my professional path
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ShowcaseCard index={0} className="lg:col-span-2">
            <div className="flex justify-center">
              <SectionHeader 
                icon={<FaUserTie className="text-2xl" />}
                title="Experience"
                color="from-fuchsia-500 to-rose-500"
              />
            </div>

            <ExperienceCard
              title="Software Engineer Intern"
              period="Sep 2025 - Present"
              company="Mobitel (Pvt) Ltd · Internship"
              location="Colombo, Western Province, Sri Lanka · Hybrid"
              bullets={[]}
            />
          </ShowcaseCard>

          <ShowcaseCard index={1} className="lg:col-span-2">
            <div className="flex justify-center">
              <SectionHeader 
                icon={<FaGraduationCap className="text-2xl" />}
                title="Education"
                color="from-indigo-500 to-teal-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <EducationCard 
                title="BSc (Hons) in Information Technology (Specialized in SE)"
                period="2023 - 2027"
                institution="Sri Lanka Institute of Information Technology (SLIIT)"
                achievement="Dean's List - Year 2 Semester 2"
              />

              <EducationCard 
                title="B.B.Mgt Honours in Financial Engineering"
                period="2023 - 2027"
                institution="University of Kelaniya"
              />
              <EducationCard 
                title="3 A's for Advanced Level (Commerce Stream)"
                period="2019 - 2022"
                institution="Visakha Vidyalaya, Colombo 05"
              />

              <EducationCard 
                title="9 A's for Ordinary Level Examination"
                period="2008 - 2019"
                institution="Dharmapala Vidyalaya, Pannipitiya"
              />
            </div>
          </ShowcaseCard>

          <ShowcaseCard index={2} className="lg:col-span-2">
            <div className="flex justify-center">
              <SectionHeader 
                icon={<FaCertificate className="text-2xl" />}
                title="Certifications"
                color="from-emerald-500 to-cyan-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {uniqueCertifications.map((certification) => (
                <CertificationCard
                  key={`${certification.title}-${certification.provider}`}
                  title={certification.title}
                  provider={certification.provider}
                  date={certification.date}
                />
              ))}
            </div>
          </ShowcaseCard>

          <ShowcaseCard index={3} className="lg:col-span-2">
            <div className="flex justify-center px-4 sm:px-0">
              <SectionHeader 
                icon={<FaUsers className="text-2xl " />}
                title="Extracurricular Activities"
                color="from-amber-500 to-orange-500"
              />             
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ExtracurricularCard 
                title="Dev- Subcommittee Member"
                period="Aug 2025 - Present"
                organization="Mozilla Campus Club of SLIIT · Malabe, Western Province, Sri Lanka "
              />
              <ExtracurricularCard 
                title="TV- Subcommittee Member"
                period="Aug 2025 - Present"
                organization="Mozilla Campus Club of SLIIT · Malabe, Western Province, Sri Lanka "
              />
              <ExtracurricularCard 
                title="Project Group Leader"
                period="2023-2024 (Year 1 & 2)"
                organization="SLIIT"
                //description="Led student project teams during Year 1 Semester 1 & 2 and Year 2 Semester 1 (2021-2022), coordinating group work, managing timelines, and ensuring successful project delivery."
              />              
              <ExtracurricularCard 
                title="Organizing Committee Member"
                period="March 2019 - March 2020"
                organization="Social Services Society, Visakha Vidyalaya"
              />
              <ExtracurricularCard 
                title="Recorder Playing Competitions"
                period="2015 - 2017"
                organization="Participated"
              />
              <ExtracurricularCard 
                title="English Vocal Music Competitions"
                period="2014 - 2016"
                organization="Participated"
              />
            </div>
          </ShowcaseCard>
        </div>
      </div>
    </section>
  )
}

function SectionHeader({ icon, title, color }) {
  return (
    <div className="flex items-center text-center gap-4 mb-6">
      <div className={`p-3 bg-gradient-to-r ${color} rounded-lg text-white`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white">{title}</h3>
    </div>
  )
}

function ShowcaseCard({ children, index, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`bg-transparent rounded-xl overflow-hidden  
            shadow-lg hover:shadow-xl hover:shadow-slate-500/10 transition-all duration-300 p-6 ${className}`}
    >
      {children}
    </motion.div>
  )
}

function ExperienceCard({ title, period, company, location, bullets }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="mb-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm 
                rounded-xl p-6 border border-white/10
                shadow-lg hover:shadow-xl hover:shadow-purple-500/10
                transition-all duration-300"
    >
      <div className="flex justify-between items-start flex-wrap gap-2">
        <h4 className="text-xl font-bold text-pink-200">{title}</h4>
        <span className="text-sm text-cyan-300 bg-slate-800/50 px-2 py-1 rounded">{period}</span>
      </div>
      <div className="flex items-center gap-2 mt-2 mb-3">
        <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
        <p className="text-gray-300">{company}</p>
      </div>
      <p className="text-gray-400 text-sm mb-4">{location}</p>
      <ul className="space-y-2">
        {bullets.map((bullet, index) => (
          <motion.li 
            key={index}
            whileHover={{ x: 5 }}
            className="text-gray-300 pl-4 relative text-sm before:content-[''] 
                     before:absolute before:left-0 before:top-2 before:w-2 before:h-2 
                     before:bg-gradient-to-r before:from-pink-500 before:to-purple-500 
                     before:rounded-full transition-all"
          >
            {bullet}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

function EducationCard({ title, period, institution, achievement }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="mb-6 bg-gradient-to-br from-indigo-900/30 to-teal-900/30 backdrop-blur-sm 
                rounded-xl p-6 border border-white/10
                shadow-lg hover:shadow-xl hover:shadow-indigo-500/10
                transition-all duration-300"
    >
      <div className="flex justify-between items-start flex-wrap gap-2">
        <h4 className="text-xl font-bold text-teal-200">{title}</h4>
        <span className="text-sm text-pink-300 bg-slate-800/50 px-2 py-1 rounded">{period}</span>
      </div>
      <div className="flex items-center gap-2 mt-2 mb-2">
        <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
        <p className="text-gray-300">{institution}</p>
      </div>
      {achievement && (
        <div className="mt-3 flex items-center gap-2">
          <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
          <p className="text-amber-300 font-medium text-sm">{achievement}</p>
        </div>
      )}
    </motion.div>
  )
}

function CertificationCard({ title, provider, date }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-gradient-to-br from-emerald-900/30 to-cyan-900/30 backdrop-blur-sm 
                rounded-xl p-4 border border-white/10
                shadow-lg hover:shadow-xl hover:shadow-emerald-500/10
                transition-all duration-300"
    >
      <h4 className="text-lg font-semibold text-emerald-200 mb-1">{title}</h4>
      <div className="flex items-center gap-2 text-sm text-gray-300 mb-1">
        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
        {provider}
      </div>
      <div className="flex items-center gap-2 text-xs text-gray-400">
        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
        {date}
      </div>
    </motion.div>
  )
}

function ExtracurricularCard({ title, period, organization }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="mb-4 bg-gradient-to-br from-amber-900/30 to-orange-900/30 backdrop-blur-sm 
                rounded-xl p-4 border border-white/10
                shadow-lg hover:shadow-xl hover:shadow-amber-500/10
                transition-all duration-300"
    >
      <div className="flex justify-between items-start flex-wrap gap-2">
        <h4 className="text-lg font-semibold text-amber-200">{title}</h4>
        <span className="text-xs text-blue-300 bg-slate-800/50 px-2 py-1 rounded">{period}</span>
      </div>
      <div className="flex items-center gap-2 mt-1">
        <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
        <p className="text-gray-300 text-sm">{organization}</p>
      </div>
    </motion.div>
  )
}