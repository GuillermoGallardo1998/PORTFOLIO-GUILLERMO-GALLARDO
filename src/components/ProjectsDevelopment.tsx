// components/ProjectsDevelopment.tsx

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import type { Project } from "../data/projects";
import { useLanguage } from "../context/language/hook";

interface ProjectsDevelopmentProps {
  projects: Project[];
  texts: {
    development: string;
    inDev: string;
  };
  variant: Variants;
}

export default function ProjectsDevelopment({ projects, texts, variant }: ProjectsDevelopmentProps) {
  const { language } = useLanguage();

  if (projects.length === 0) return null;

  const gridContainerVariant = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } },
  };

  const titleVariant = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
  };

  return (
    <div id="prueba1" className="py-20 flex flex-col justify-center items-center px-5 sm:px-10">
      <motion.h2 className="text-center text-4xl font-bold text-(--text-color) textShadow mb-20"
        variants={titleVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }}
      >
        {texts.development}
      </motion.h2>
      <motion.div
        variants={gridContainerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }}
        className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-12 group"
      >
        {projects.map((project) => (
          <motion.div
            key={project.slug}
            variants={variant}
            className="bg-(--secondary) rounded-2xl overflow-hidden componentShadowStrong flex flex-col transition-opacity duration-800 group-hover:opacity-50 hover:opacity-100 gap-6 max-w-100"
          >
            <img
              src={project.images[language][0]}
              alt={project.title[language]}
              className="w-full h-80 object-cover object-top componentShadowSoft"
              onContextMenu={(e) => e.preventDefault()}
              draggable={false}
            />
            <div className="p-6 flex flex-col flex-1 relative">
              <h3 className="text-3xl text-center font-semibold text-(--text-color) mb-6 textShadow">
                {project.title[language]}
              </h3>
              <p className="text-(--text-color)/80 text-center mb-10">
                {project.shortDescription[language] || texts.inDev}
              </p>
              <div className="flex flex-wrap justify-center items-center gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-center bg-(--text-color) text-(--secondary) font-semibold px-2 py-1 rounded-lg text-sm componentShadowSoft"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}