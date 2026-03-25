// components/About.tsx

import { useLanguage } from "../context/language/hook";
import { motion } from "framer-motion";

export default function About() {
  const { language } = useLanguage();

  const texts = {
    es: {
      title: "Sobre mí",
      paragraphs: [
        "Soy desarrollador web e ingeniero, especializado en crear productos completos con frontend, automatización de flujos y estructuras escalables.",
        "Me apasiona integrar APIs, bases de datos y experiencia de usuario en soluciones funcionales que optimicen negocios."
      ],
    },
    en: {
      title: "About me",
      paragraphs: [
        "I’m a web developer and engineer, specialized in building complete products with frontend, workflow automation, and scalable structures.",
        "I’m passionate about integrating APIs, databases, and user experience into functional solutions that optimize businesses."
      ],
    },
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } },
  };

  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const imageVariant = {
    hidden: { opacity: 0, y: -50 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="about"
      className="px-5 lg:px-20 py-30 lg:py-60 flex justify-center items-center bg-(--primary)"
    >
      <motion.div
        className="flex flex-col md:flex-row items-center gap-10 bg-(--secondary) rounded-4xl p-8 componentShadowStrong max-w-7xl w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="flex flex-col justify-start items-center md:items-start"
          variants={imageVariant}
        >
          <img
            src="/images/GuillermoGallardo.webp"
            alt="Foto de perfil"
            className="w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 bg-(--primary) rounded-full object-cover object-top border-4 border-(--text-color) componentShadowSoft"
            onContextMenu={(e) => e.preventDefault()}
            draggable={false}
          />
        </motion.div>
        <div className="flex-1 text-center lg:text-left md:px-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-(--text-color) textShadow"
            variants={textVariant}
          >
            {texts[language].title}
          </motion.h2>
          {texts[language].paragraphs.map((p, i) => (
            <motion.p
              key={i}
              className="text-(--text-color) mb-4"
              variants={textVariant}
            >
              {p}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}