// components/ProjectsInformation.tsx

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import type { Project } from "../data/projects";
import { useLanguage } from "../context/language/hook";

interface ProjectsInformationProps {
  project: Project;
  variant: Variants;
  texts: {
    caseStudy: string;
    website: string;
    github: string;
  };
}

export default function ProjectsInformation({ project, texts, variant,}: ProjectsInformationProps) {
  const { language } = useLanguage();

  return (
    <motion.div
      variants={variant}
      className="px-0 sm:px-5 md:px-10 xl:px-20 flex-1 flex flex-col items-center justify-center w-full space-y-4"
    >
      <h3 className="text-3xl font-semibold text-(--text-color) textShadow text-center">
        {project.title[language]}
      </h3>
      <p className="text-(--text-color)/80 text-justify">
        {project.shortDescription[language]}
      </p>
      <div className="flex flex-wrap justify-center items-center gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="text-sm bg-(--secondary) text-(--text-color) px-2 py-1 rounded componentShadowSoft hover:bg-(--text-color) hover:text-(--secondary)"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4 flex-col sm:flex-row flex-wrap text-center pt-10">
        <Link
          to={`/projects/${project.slug}`}
          className="text-lg px-4 py-2 bg-(--text-color) text-(--secondary) font-semibold rounded-xl componentShadowSoft hover:scale-105 transition-transform duration-300"
        >
          {texts.caseStudy}
        </Link>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg px-4 py-2 bg-(--text-color) text-(--secondary) font-semibold rounded-xl componentShadowSoft hover:scale-105 transition-transform duration-300"
          >
            {texts.website}
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg px-4 py-2 bg-(--text-color) text-(--secondary) font-semibold rounded-xl componentShadowSoft hover:scale-105 transition-transform duration-300"
          >
            {texts.github}
          </a>
        )}
      </div>
    </motion.div>
  );
}