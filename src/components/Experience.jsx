//import React from 'react';
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";

const experiences = [
  {
    title: "Full Stack AI Developer",
    company: "DataEye",
    year: "Feb 2026 – Present",
    location: "NUST-NSTP, Islamabad",
    points: [
      "Developed Eligient, an AI-powered legal technology platform for contract generation and review.",
      "Integrated an AI chatbot to provide conversational assistance and support users across the platform.",
      "Built full-stack features using Next.js, React.js, Python, FastAPI, PostgreSQL, and AI technologies.",
      "Worked on authentication, billing, backend services, admin functionality, and production deployment.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "NaturalFlow AI",
    type: "Internship",
    year: "Aug 2025 – Sep 2025",
    points: [
      "Developed the frontend of a construction website using Next.js, focusing on building a responsive design and enhancing overall user experience",
      "Contributed to the backend development of a platform for creating voice agents for phone calls, ensuring smooth integration with the core system",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "Power Moves Engineering Limited",
    type: "Internship",
    year: "Aug 2024 – Sep 2024",
    points: [
      "Built and maintained web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Developed responsive user interfaces and supported backend API integration.",
      "Assisted the Solution Design Department with web development tasks and troubleshooting.",
    ],
  },
  {
    title: "Lab Demonstrator / Teaching Assistant",
    company: "FAST NUCES",
    year: "Sep 2022 – Jan 2025",
    location: "Islamabad, Pakistan",
    points: [
      "Guided labs in OOP, Data Structures, OS, and COAL.",
      "Evaluated work and mentored students in Computer Networks.",
    ],
  },
];

const education = [
  {
    degree: "Pre Engineering",
    institution: "Fauji Foundation College",
    location: "Rawalpindi, Pakistan",
    year: "2018-2020",
  },
  {
    degree: "Bachelor's in Computer Science",
    institution: "National University of Computer and Emerging Sciences - FAST",
    location: "Islamabad, Pakistan",
    year: "2021-2025",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl font-bold text-primary mb-4">
            My Education & Experience
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            My professional journey and academic background that shaped my
            skills
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-surface p-8 rounded-2xl shadow-xl h-full">
              <div className="flex items-center mb-6">
                <div className="bg-primary/20 p-3 rounded-full mr-4">
                  <FaBriefcase className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-dark">Experience</h3>
              </div>
              <div className="space-y-10">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 }}
                    className="relative pl-8 border-l-4 border-primary"
                  >
                    <div className="absolute -left-3 top-2 w-5 h-5 bg-primary rounded-full border-4 border-white"></div>
                    <h4 className="text-xl font-semibold text-dark flex items-center gap-2">
                      {exp.title}{" "}
                      {exp.company && (
                        <span className="text-muted text-base font-normal">
                          @ {exp.company}
                        </span>
                      )}
                    </h4>
                    <div className="flex flex-wrap gap-2 mt-1 mb-3 text-sm text-muted">
                      {exp.type && (
                        <span className="flex items-center gap-1">
                          <FaBriefcase /> {exp.type}
                        </span>
                      )}
                      {exp.year && (
                        <span className="flex items-center gap-1">
                          <FaCalendarAlt /> {exp.year}
                        </span>
                      )}
                      {exp.location && (
                        <span className="flex items-center gap-1">
                          <FaMapMarkerAlt /> {exp.location}
                        </span>
                      )}
                    </div>
                    <ul className="space-y-2 text-muted text-base">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-surface p-8 rounded-2xl shadow-xl h-full">
              <div className="flex items-center mb-6">
                <div className="bg-secondary/20 p-3 rounded-full mr-4">
                  <FaGraduationCap className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-dark">Education</h3>
              </div>
              <div className="space-y-10">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 }}
                    className="relative pl-8 border-l-4 border-secondary"
                  >
                    <div className="absolute -left-3 top-2 w-5 h-5 bg-secondary rounded-full border-4 border-white"></div>
                    <h4 className="text-xl font-semibold text-dark flex items-center gap-2">
                      {edu.degree}
                    </h4>
                    <div className="flex flex-wrap gap-2 mt-1 mb-3 text-sm text-muted">
                      <span className="flex items-center gap-1">
                        <FaGraduationCap /> {edu.institution}
                      </span>
                      {edu.location && (
                        <span className="flex items-center gap-1">
                          <FaMapMarkerAlt /> {edu.location}
                        </span>
                      )}
                      {edu.year && (
                        <span className="flex items-center gap-1">
                          <FaCalendarAlt /> {edu.year}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
