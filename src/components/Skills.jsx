//import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaRobot,
  FaTools,
  FaCode,
} from "react-icons/fa";

const skillCategories = [
  {
    title: "Frontend",
    icon: <FaLaptopCode className="w-6 h-6 text-primary" />,
    skills: ["React.js", "Next.js", "JavaScript", "HTML5", "CSS"],
  },
  {
    title: "Backend",
    icon: <FaServer className="w-6 h-6 text-primary" />,
    skills: ["Node.js", "Express.js", "Python", "FastAPI", "Flask", "PHP"],
  },
  {
    title: "Databases",
    icon: <FaDatabase className="w-6 h-6 text-primary" />,
    skills: ["Supabase","PostgreSQL", "MongoDB", "MySQL", "SQL Server", "PhpMyAdmin"],
  },
  {
    title: "AI / ML",
    icon: <FaRobot className="w-6 h-6 text-primary" />,
    skills: ["PyTorch", "TensorFlow", "Keras", "OpenCV", "LangChain", "FAISS"],
  },
  {
    title: "DevOps & Tools",
    icon: <FaTools className="w-6 h-6 text-primary" />,
    skills: ["Git", "GitHub Actions (CI/CD)", "Docker", "Kubernetes"],
  },
  {
    title: "Programming Languages",
    icon: <FaCode className="w-6 h-6 text-primary" />,
    skills: ["C", "C++", "C#", "Python", "JavaScript", "Java", "SQL"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl font-bold text-primary mb-4">
            Skills &amp; Technologies
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            The languages, frameworks, and tools I use to build AI-powered
            web platforms and full-stack systems
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-primary/20 p-3 rounded-full">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-dark">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full text-xs tracking-wide"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
