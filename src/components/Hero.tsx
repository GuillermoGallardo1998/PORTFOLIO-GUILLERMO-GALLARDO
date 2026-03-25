// components/Hero.tsx

import { useLanguage } from "../context/language/hook";
import { motion } from "framer-motion";

export default function Hero() {
  const { language } = useLanguage();

  const texts = {
    es: {
      name: "Guillermo Gallardo Pino",
      role: "Programador Web",
    },
    en: {
      name: "Guillermo Gallardo Pino",
      role: "Web Developer",
    },
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } },
  };

  const textVariant = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative pt-30 pb-5 px-10 lg:px-20 bg-(--primary) text-(--text-color) transition-colors duration-300 min-h-screen flex items-center justify-center flex-col md:flex-row gap-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col md:flex-row items-center gap-10 w-full max-w-7xl"
      >
        <div className="flex-1">
          <motion.h2
            variants={textVariant}
            className="text-4xl lg:text-5xl text-center md:text-start font-extrabold mb-5"
            style={{ textShadow: "var(--text-shadow-strong)" }}
          >
            {language === "es" ? (
              <>Creando <span className="animated-color">experiencias</span> únicas</>
            ) : (
              <>Creating unique <span className="animated-color">experiences</span></>
            )}
          </motion.h2>
          <motion.h1
            variants={textVariant}
            className="text-xl lg:text-2xl text-center md:text-start font-bold"
            style={{ color: "var(--text-color)" }}
          >
            {texts[language].name} / {texts[language].role}
          </motion.h1>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-none"
        >
          <img
            src="/images/GuillermoHero.webp"
            sizes="(max-width: 768px) 360px, 720px"
            loading="eager"
            fetchPriority="high"
            alt="Hero Image"
            width={360}
            height={540}
            className="bg-(--secondary) w-60 lg:w-90 object-contain rounded-4xl componentShadowStrong"
            onContextMenu={(e) => e.preventDefault()}
            draggable={false}
          />
        </motion.div>
      </motion.div>
      <motion.a
        href="#about"
        className="relative flex flex-col items-center cursor-pointer animate-bounce
          md:absolute md:bottom-4 md:left-1/2 md:-translate-x-1/2 text-lg"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, repeat: Infinity, repeatType: "mirror" }}
      >
        <p className="text-(--text-color) opacity-80">
          {language === "es" ? "Conoce más" : "Learn more"}
        </p>
        <span className="text-(--text-color) opacity-80 text-lg mt-1">v</span>
      </motion.a>
    </section>
  );
}