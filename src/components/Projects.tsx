// components/Projects.tsx

import ProjectsInformation from "./ProjectsInformation";
import ProjectsDevelopment from "./ProjectsDevelopment";
import { projects } from "../data/projects";
import { useLanguage } from "../context/language/hook";
import { motion } from "framer-motion";

export default function Projects() {
  const { language } = useLanguage();
  const liveProjects = projects.filter(p => p.status === "live");
  const devProjects = projects.filter(p => p.status === "development");

  const texts = {
    es: {
      active: "Proyectos Activos",
      development: "Proyectos en Desarrollo",
      caseStudy: "Ver desarrollo",
      website: "Página Web",
      github: "Código",
      inDev: "En desarrollo"
    },
    en: {
      active: "Active Projects",
      development: "Projects in Development",
      caseStudy: "View Development",
      website: "Website",
      github: "Code",
      inDev: "In development"
    }
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } },
  };

   const titleVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.2 } },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const imageVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="w-full flex flex-col justify-center items-center py-30 px-5 md:px-10 bg-(--primary)">
      <motion.h2 
        className="text-4xl font-bold text-(--text-color) textShadow text-center"
        variants={titleVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {texts[language].active}
      </motion.h2>
      <div className="flex flex-col justify-center items-center w-full max-w-360 mx-auto gap-30 py-30">
        {liveProjects.map((project, index) => {
          const images = project.images[language];

          {/* Layout 1 */}
          if (index === 0) {
            return (
              <motion.div key={project.slug} className="flex flex-col xl:flex-row items-center w-full gap-10 xl:gap-0"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="p-0 xl:px-10 xl:pl-20 flex-1 flex justify-center">
                  <motion.div
                    className="relative w-70 h-90 sm:w-100 sm:h-120 md:w-150 md:h-170"
                    variants={imageVariant}
                  >
                    <div className="absolute top-0 left-0 w-50 h-70 sm:w-80 sm:h-100 md:w-120 md:h-150 overflow-hidden rounded componentShadowStrong">
                      <img src={images[0]} className="object-cover object-top" onContextMenu={(e) => e.preventDefault()}
                        draggable={false}  alt={project.title[language]}/>
                    </div>
                    {images[1] && (
                      <motion.div
                        className="absolute bottom-0 right-0 w-50 h-60 sm:w-80 sm:h-90 md:w-120 md:h-140 overflow-hidden rounded componentShadowStrong"
                        variants={imageVariant}
                      >
                        <img src={images[1]} className="object-cover object-top" onContextMenu={(e) => e.preventDefault()}
                          draggable={false} alt={project.title[language]}/>
                      </motion.div>
                    )}
                  </motion.div>
                </div>
                <ProjectsInformation project={project} texts={texts[language]} variant={textVariant}/>
              </motion.div>
            );
          }

          {/* Layout 2 */}
          if (index === 1) {
            return (
              <motion.div key={project.slug} className="flex flex-col xl:flex-row-reverse items-center w-full gap-10 xl:gap-0"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="p-0 xl:px-10 xl:pl-20 flex-1 flex justify-center">
                  <motion.div
                    className="relative w-70 h-90 sm:w-100 sm:h-120 md:w-150 md:h-170"
                    variants={imageVariant}
                  >
                    <div className="absolute top-0 right-0 w-55 h-90 sm:w-80 sm:h-120 md:w-120 md:h-170 overflow-hidden rounded componentShadowStrong z-10">
                      <img src={images[0]} className="object-cover object-top" onContextMenu={(e) => e.preventDefault()}
                        draggable={false} alt={project.title[language]}/>
                    </div>
                    {images[1] && (
                      <motion.div
                        className="absolute w-69  sm:w-full bottom-6 sm:bottom-10 md:h-150 overflow-hidden rounded componentShadowStrong z-0"
                        variants={imageVariant}
                      >
                        <img src={images[1]} className="object-cover object-top" onContextMenu={(e) => e.preventDefault()}
                          draggable={false} alt={project.title[language]}/>
                      </motion.div>
                    )}
                  </motion.div>
                </div>
                <ProjectsInformation project={project} texts={texts[language]} variant={textVariant}/>
              </motion.div>
            );
          }

          {/* Layout 3 */}
          if (index === 2) {
            return (
              <motion.div key={project.slug} className="flex flex-col xl:flex-row items-center w-full gap-10 xl:gap-0"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}>
                <div className="p-0 xl:px-10 xl:pl-20 flex-1 flex justify-center">
                  <motion.div className="relative w-70 h-80 sm:w-100 sm:h-110 md:w-150 md:h-170" variants={imageVariant}>
                    <div className="absolute top-0 left-0 w-70 h-80 sm:w-100 sm:h-110 md:w-150 md:h-170 overflow-hidden rounded componentShadowStrong">
                      <img src={images[0]} className="object-cover object-top" onContextMenu={(e) => e.preventDefault()}
                        draggable={false} alt={project.title[language]}/>
                    </div>
                  </motion.div>
                </div>
                <ProjectsInformation project={project} texts={texts[language]} variant={textVariant}/>
              </motion.div>
            );
          }
          return null;
        })}
      </div>
      <ProjectsDevelopment projects={devProjects} texts={texts[language]} variant={itemVariant}/>
    </section>
  );
}