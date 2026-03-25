// components/Certificates.tsx

import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/language/hook";
import { motion } from "framer-motion";

const certificateImages = [
  { src: "/images/certificates/opencode/Desarrollo_web_con_enfasis_en_inteligencia_artificial.webp",
    name: {
      es: "Desarrollo Web con Énfasis en Inteligencia Artificial",
      en: "Web Development with Emphasis on Artificial Intelligence",
    },
    issuer: "Código Abierto",
  },
  { src: "/images/certificates/platzi/CompleteRoutes/Fundamentos_de_programacion_y_desarrollo_web.webp",
    name: {
      es: "Fundamentos de Programación y Desarrollo Web",
      en: "Programming and Web Development Fundamentals",
    },
    issuer: "Platzi",
  },
  { src: "/images/certificates/platzi/CompleteRoutes/Html_y_css_a_profundidad.webp",
    name: {
      es: "HTML y CSS a Profundidad",
      en: "HTML and CSS in Depth",
    },
    issuer: "Platzi",
  },
  { src: "/images/certificates/sena/Conceptualizacion_del_lenguaje_de_programacion_c++.webp",
    name: {
      es: "Conceptualización del Lenguaje de Programación C++",
      en: "Conceptualization of the C++ Programming Language",
    },
    issuer: "SENA",
  },
  { src: "/images/certificates/cofam/Certificado_de_logistica_integral.webp",
    name: {
      es: "Logística Integral",
      en: "Integral Logistics",
    },
    issuer: "COFAM",
  },
];

export default function Certificates() {
  const { language } = useLanguage();

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const boxVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="certificates"
      className="min-h-200 px-5 lg:px-20 py-30 flex justify-center items-center bg-(--primary)"
    >
      <motion.div
        className="max-w-7xl min-w-75 flex flex-col"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-3xl text-center md:text-4xl font-bold mb-15 text-(--text-color) textShadow"
          variants={textVariant}
        >
          {language === "es" ? "Certificados" : "Certificates"}
        </motion.h2>
        <motion.div
          className="overflow-hidden rounded-xl componentShadowStrong bg-(--secondary) py-6 px-2 md:p-6"
          variants={boxVariant}
        >
          <Marquee pauseOnHover speed={50} gradient={false}>
            {certificateImages.map((cert, i) => (
              <div
                key={i}
                className="m-4 h-60 rounded-lg overflow-hidden componentShadowSoft"
              >
                <img
                  src={cert.src}
                  alt={`${cert.name[language]} - ${cert.issuer}`}
                  className="w-full h-full object-cover"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable={false}
                />
              </div>
            ))}
          </Marquee>
        </motion.div>
        <motion.div
          className="flex justify-center md:self-end mt-5"
          variants={textVariant}
        >
          <Link to="/certificates">
            <button className="px-4 py-2 bg-(--text-color) text-(--secondary) font-semibold rounded-xl componentShadowSoft transform-gpu hover:scale-103 transition-transform duration-300 ease-in-out cursor-pointer">
              {language === "es"
                ? "Ver más certificados"
                : "See more certificates"}
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}