// components/Technologies.tsx

import { useLanguage } from "../context/language/hook";
import { motion } from "framer-motion";

export default function Technologies() {
  const { language } = useLanguage();

  const titleVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const sectionVariant = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const gridContainerVariant = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <motion.section
      id="technologies"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="py-30 px-10 lg:px-20 bg-(--primary) flex flex-col justify-center items-center"
    >
      <motion.h2
        variants={titleVariant}
        className="text-3xl md:text-4xl font-bold mb-20 text-(--text-color) textShadow"
      >
        {language === "es" ? "Tecnologías" : "Technologies"}
      </motion.h2>
      <div className="max-w-5xl w-full flex flex-col gap-16">
        <motion.div variants={titleVariant}>
          <motion.h3
            variants={titleVariant}
            className="mb-10 text-3xl font-semibold text-(--text-color) textShadow text-center sm:text-start"
          >
            {language === "es" ? "Frontend / UI" : "Frontend / UI"}
          </motion.h3>
          <motion.div
            variants={gridContainerVariant}
            className="flex flex-row justify-center items-center flex-wrap gap-10"
          >
            {[
              { name: "HTML5", src: "/icons/HTML.png" },
              { name: "CSS3", src: "/icons/CSS.png" },
              { name: "JavaScript (ES6+)", src: "/icons/JavaScript.png" },
              { name: "TypeScript", src: "/icons/Typescript.png" },
              { name: "React", src: "/icons/React.png" },
              { name: "Next.j", src: "/icons/NextJS.png" },
              { name: "Tailwind CSS", src: "/icons/Tailwind.png" },
              { name: "BEM", src: "/icons/BEM.png" },
              { name: "Mobile-First", src: "/icons/MobileFirst.png" },
              { name: "UI/UX Principles", src: "/icons/UI-UX.png" },
              { name: "SEO Optimization", src: "/icons/SEO.png" },
              { name: "Figma", src: "/icons/Figma.png" },
            ].map((tech) => (
              <motion.div
                key={tech.name}
                variants={itemVariant}
                className="techIcon flex flex-col justify-start items-center gap-4 hover:scale-110 max-w-30"
              >
                <img
                  src={tech.src}
                  alt={tech.name}
                  className="w-15 h-15 lg:w-20 lg:h-20 object-contain"
                />
                <p className="font-bold text-(--text-color)/80 text-center">
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div variants={titleVariant}>
          <motion.h3
            variants={titleVariant}
            className="mb-10 text-3xl font-semibold text-(--text-color) textShadow text-center sm:text-start"
          >
            {language === "es"
              ? "Backend / APIs / Servicios"
              : "Backend / APIs / Services"}
          </motion.h3>
          <motion.div
            variants={gridContainerVariant}
            className="flex flex-row justify-center items-center flex-wrap gap-10"
          >
            {[
              { name: "Node.js", src: "/icons/NodeJS.png" },
              { name: "Express.js", src: "/icons/ExpressJS.png" },
              { name: "RESTful APIs", src: "/icons/RestfulAPI.png" },
              { name: "API Integration", src: "/icons/API.png" },
              { name: "GraphQL", src: "/icons/GraphQl.png" },
              { name: "Firebase", src: "/icons/Firebase.png" },
              { name: "Supabase", src: "/icons/Supabase.png" },
              { name: "Authentication", src: "/icons/Authentication.png" },
              { name: "Serverless Architecture", src: "/icons/Serverless.png" },
              { name: "MongoDB (Mongoose ODM)", src: "/icons/MongoDB.png" },
              { name: "PostgreSQL", src: "/icons/PostgreSQL.png" },
              { name: "Prisma ORM", src: "/icons/Prisma.png" },
              
            ].map((tech) => (
              <motion.div
                key={tech.name}
                variants={itemVariant}
                className="techIcon flex flex-col justify-center items-center gap-4 hover:scale-110 max-w-30"
              >
                <img
                  src={tech.src}
                  alt={tech.name}
                  className="w-15 h-15 lg:w-20 lg:h-20 object-contain"
                />
                <p className="font-bold text-(--text-color)/80 text-center">
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div variants={titleVariant}>
          <motion.h3
            variants={titleVariant}
            className="mb-10 text-3xl font-semibold text-(--text-color) textShadow text-center sm:text-start"
          >
            {language === "es"
              ? "Herramientas / Desarrollo"
              : "Tools / Development"}
          </motion.h3>
          <motion.div
            variants={gridContainerVariant}
            className="flex flex-row justify-center items-center flex-wrap gap-10"
          >
            {[
              
              { name: "Git", src: "/icons/GIT.png" },
              { name: "GitHub", src: "/icons/GITHUB.png" },
              { name: "Vite", src: "/icons/Vite.png" },
              { name: "Vercel", src: "/icons/Vercel.png" },
              { name: "ESLint", src: "/icons/Eslint.png" },
              { name: "Prettier", src: "/icons/Prettier.png" },
              { name: "Terminal", src: "/icons/Terminal.png" },
              { name: "Google Cloud", src: "/icons/GoogleCloud.png" },
              { name: "EmailJS", src: "/icons/EmailJS.png" },
              { name: "FormSubmit", src: "/icons/FormSubmit.png" },
              { name: "ToastNotify", src: "/icons/ToastNotify.png" },

              { name: "Copilot", src: "/icons/Copilot.png" },
              { name: "Lovable AI", src: "/icons/Lovable.png" },
              { name: "Bolt.new", src: "/icons/Bolt.png" },
              { name: "Rapid prototyping with AI", src: "/icons/Rapidprototyping.png" },

            ].map((tech) => (
              <motion.div
                key={tech.name}
                variants={itemVariant}
                className="techIcon flex flex-col justify-center items-center gap-4 hover:scale-110 max-w-30"
              >
                <img
                  src={tech.src}
                  alt={tech.name}
                  className="w-15 h-15 lg:w-20 lg:h-20 object-contain"
                />
                <p className="font-bold text-(--text-color)/80 text-center">
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}