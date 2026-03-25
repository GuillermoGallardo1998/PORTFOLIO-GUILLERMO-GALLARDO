// pages/ProjectDetail.tsx

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { projects, type Project } from "../data/projects";
import ProjectDetailGallery from "../components/ProjectDetailGallery";
import ProjectDetailInfo from "../components/ProjectDetailInfo";
import { useLanguage } from "../context/language/hook";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProjectDetail = () => {
  const { slug } = useParams();
  const { language } = useLanguage();

  const project: Project | undefined = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } },
  };

  const leftVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const rightVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  {/* Page 404 */}
  if (!project)
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-(--primary) p-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col justify-center items-center text-center"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="text-6xl mb-6"
        >
          🔍
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-bold text-(--text-color) mb-4">
          {language === "es" ? "Proyecto no encontrado" : "Project not found"}
        </h1>
        <p className="text-(--text-color)/70 mb-10">
          {language === "es" ? "Lo sentimos, el proyecto que buscas no existe o fue movido." : "Sorry, the project you are looking for doesn't exist or has been moved."}
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/" className="px-6 py-3 bg-(--text-color) text-(--primary) rounded-lg font-medium transition-colors hover:opacity-90">
            {language === "es" ? "Volver al inicio" : "Back to home"}
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );

  return (
    <section className="pt-40 pb-30 px-10 lg:px-20 bg-(--primary)">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={leftVariant}>
          <ProjectDetailInfo project={project} language={language} />
        </motion.div>
        <motion.div variants={rightVariant}>
          <ProjectDetailGallery images={project.images[language]} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectDetail;