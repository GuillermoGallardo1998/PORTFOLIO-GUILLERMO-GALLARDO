// pages/AllCertificates.tsx

import { useEffect, useState } from "react";
import CertificatesFilter from "../components/certificates/CertificatesFilter";
import CertificatesGrid from "../components/certificates/CertificatesGrid";
import Pagination from "../components/certificates/Pagination";
import { useLanguage } from "../context/language/hook";
import { motion } from "framer-motion";

export default function AllCertificates() {
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const handleFilterChange = (filter: string | null) => {
    setActiveFilter(filter);
    setPage(1);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page, activeFilter]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main className="px-5 lg:px-20 py-30 bg-(--primary) min-h-screen">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl font-bold text-center mb-12 text-(--text-color)"
          variants={itemVariant}
        >
          {language === "es" ? "Certificados" : "Certificates"}
        </motion.h1>
        <motion.div variants={itemVariant}>
          <CertificatesFilter active={activeFilter} setActive={handleFilterChange}/>
        </motion.div>
        <motion.div variants={itemVariant}>
          <CertificatesGrid filter={activeFilter} page={page}/>
        </motion.div>
        <motion.div variants={itemVariant}>
          <Pagination page={page} setPage={setPage} filter={activeFilter}/>
        </motion.div>
      </motion.div>
    </main>
  );
}