// components/ProjectDetailInfo.tsx

import type { Project } from "../data/projects";

interface ProjectDetailInfoProps {
  project: Project;
  language: "es" | "en";
}

const ProjectDetailInfo = ({ project, language }: ProjectDetailInfoProps) => {
  return (
    <div className="flex flex-col gap-10 text-(--text-color)">
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl font-bold textShadow">
          {project.title[language]}
        </h1>
        <p className="text-(--text-color)/80 text-justify">
          {project.description[language]}
        </p>
      </div>
      <div className="flex flex-col gap-6">
        <h3 className="text-2xl font-semibold textShadow">
          {language === "es" ? "Tecnologías" : "Technologies"}
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-2">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-(--secondary) rounded-full componentShadowSoft hover:bg-(--text-color) hover:text-(--secondary) textShadow"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
			<div className="flex flex-col gap-6">
				<h3 className="text-2xl font-semibold textShadow">
					{language === "es" ? "Áreas aplicadas" : "Applied areas"}
				</h3>
				<ul className="list-disc list-inside text-(--text-color)/80">
					{project.areas.map((area, index) => (
						<li key={index} className="text-justify">
							{area}
						</li>
					))}
				</ul>
			</div>
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          className="mt-6 w-full text-center px-6 py-3 bg-(--text-color) text-(--secondary) font-semibold rounded-xl componentShadowSoft transform-gpu hover:scale-103 transition-transform duration-300 ease-in-out"
        >
          {language === "es" ? "Explora el sitio y vive la experiencia" : "Explore the site and experience it"}
        </a>
      )}
    </div>
  );
};

export default ProjectDetailInfo;