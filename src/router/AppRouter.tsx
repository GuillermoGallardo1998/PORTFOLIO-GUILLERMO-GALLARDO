// router/AppRouter.tsx

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProjectDetail from "../pages/ProjectDetail";
import AllCertificates from "../pages/AllCertificates";
import ScrollToHash from "../components/ScrollToHash";
import { useLanguage } from "../context/language/hook";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AppRouter() {
  const { language } = useLanguage();

  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/certificates" element={<AllCertificates />} />
        <Route
          path="*"
          element={
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
                  {language === "es" ? "Página no encontrada" : "Page not found"}
                </h1>
                <p className="text-(--text-color)/70 mb-10">
                  {language === "es" ? "Lo sentimos, la página que buscas no existe o ha sido movida." : "Sorry, the page you are looking for doesn't exist or has been moved."}
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
          }
        />
      </Routes>
    </BrowserRouter>
  );
}