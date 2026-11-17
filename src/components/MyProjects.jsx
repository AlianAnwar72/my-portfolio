//import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaGlobe } from "react-icons/fa";
import DownloadCV from "./DownloadCV";

const projects = [
  {
    title: "Eligient",
    shortTitle: "AI-Powered Legal Technology Platform",
    description:
      "Developed Eligient, an AI-powered legal technology platform for contract generation and contract review. Integrated an AI chatbot to provide conversational assistance and support users across the platform.",
    link: "https://www.eligient.co.uk",
    linkLabel: "Visit Website",
    linkType: "website",
    tools: ["Next.js", "React.js", "Python", "FastAPI", "PostgreSQL", "AI Integration"],
  },
  {
    title: "NaturalFlow AI",
    shortTitle: "Voice Agent Platform",
    description:
      "Developed frontend features for a construction website using Next.js, focusing on responsive and user-friendly interfaces. Contributed to the backend of a platform for creating AI-powered voice agents for phone calls.",
    tools: ["Next.js", "Python", "Backend APIs", "AI Voice Agents"],
  },
  {
    title: "SmartTutor",
    shortTitle: "Final Year Project at FAST NUCES, ISB",
    description:
      "Developed an AI-driven tutor-student matching system based on preferences and sentiment analysis. Integrated real-time chat, tutor-created communities, and collaborative learning tools.",
    link: "https://github.com/AlianAnwar72/SmartTutor",
    linkLabel: "View on GitHub",
    linkType: "github",
    tools: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "HTML",
      "CSS",
      "Python",
      "Socket.IO",
    ],
  },
  {
    title: "VirtuWear",
    shortTitle: "Virtual Try-On System",
    description:
      "I developed VirtuWear, a GAN-based virtual try-on system leveraging the HR-VITON architecture with a UNet generator to enable realistic garment fitting. The system enhances visual realism and minimizes warping compared to baseline models, providing a seamless virtual dressing experience.",
    link: "https://github.com/AlianAnwar72/VirtuWear",
    linkLabel: "View on GitHub",
    linkType: "github",
    tools: ["PyTorch", "TensorFlow", "OpenCV"],
  },
  {
    title: "Story2Audio",
    shortTitle: "Story to Audio Microservice",
    description:
      "I developed Story2Audio, a microservice that converts written stories into expressive audio using local NLP and TTS models. The system features a gRPC API, Gradio-based user interface, Docker deployment, and text enhancement powered by Falcon-RW-1B.",
    link: "https://github.com/AlianAnwar72/Story2Audio",
    linkLabel: "View on GitHub",
    linkType: "github",
    tools: [
      "Python",
      "PyTorch",
      "Transformers",
      "Kokoro-82M",
      "gRPC",
      "Docker",
      "Gradio",
    ],
  },
  {
    title: "Timetable Scheduler",
    shortTitle: "Artificial Intelligence Course Project",
    description:
      "Timetable Scheduler is an AI-powered system designed to solve the university timetable scheduling problem using genetic algorithms. It efficiently assigns time slots to courses, ensuring minimal conflicts between professors, sections, and classrooms.",
    link: "https://github.com/AlianAnwar72/Smart-Timetable-Scheduler",
    linkLabel: "View on GitHub",
    linkType: "github",
    tools: ["Python", "Pandas", "Numpy", "IPython Notebook"],
  },
  {
    title: "My Dressing Organizer",
    shortTitle: "Wardrobe Management System",
    description:
      "Wardrobe Manager is a smart web application that helps users organize and manage their clothing. Built with the MERN stack, it allows users to track clothing items, update last worn dates, and receive outfit suggestions based on wardrobe history, enhancing convenience and personal style management.",
    link: "https://github.com/AlianAnwar72/My-Dressing-Organizer",
    linkLabel: "View on GitHub",
    linkType: "github",
    tools: ["React", "Node.js", "MongoDB", "Express", "REST API"],
  },
  {
    title: "FLEX LMS",
    shortTitle: "Database Project",
    description:
      "I developed Flex LMS, a scalable Learning Management System that streamlines academic management by handling attendance, course registration, evaluations, and marks. Designed as a database-driven application, it ensures efficient record-keeping and provides a user-friendly interface for both students and faculty.",
    link: "https://github.com/AlianAnwar72/Flex-LMS",
    linkLabel: "View on GitHub",
    linkType: "github",
    tools: [
      "MySQL",
      ".NET",
      "C#",
      "JavaScript"
    ],
  },
];

const MyProjects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-white to-background"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl font-bold text-primary mb-4">
            My Projects
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            A showcase of my work and contributions to various projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface rounded-2xl shadow-xl p-8 flex flex-col hover:shadow-2xl transition-shadow duration-300 group"
              whileHover={{ scale: 1.03 }}
            >
              <div className="mb-4">
                <h3 className="font-heading text-2xl font-bold text-dark mb-1">
                  {project.title}
                </h3>
                {project.shortTitle && (
                  <p className="text-base text-muted mb-2">
                    {project.shortTitle}
                  </p>
                )}
                <p className="text-muted mb-4 text-base">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="inline-block bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full text-xs tracking-wide group-hover:bg-primary/20 transition-colors duration-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              {project.link && (
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white font-heading rounded-full shadow hover:from-secondary hover:to-primary hover:scale-105 transition-all duration-300"
                  whileHover={{ scale: 1.07 }}
                >
                  {project.linkType === "website" ? (
                    <FaGlobe className="w-5 h-5" />
                  ) : (
                    <FaGithub className="w-5 h-5" />
                  )}
                  {project.linkLabel || "View on GitHub"}
                </motion.a>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <DownloadCV />
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
