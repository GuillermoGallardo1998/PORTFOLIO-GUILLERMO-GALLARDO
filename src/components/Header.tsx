// components/Header.tsx

import { useState, useEffect } from "react";
import { useLanguage } from "../context/language/hook";
import { motion } from "framer-motion";

interface HeaderProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

export default function Header({ toggleTheme, isDarkMode }: HeaderProps) {
  const { language, setLanguage } = useLanguage();
  const [hovered, setHovered] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  const links = [
    { href: "/#top", es: "Inicio", en: "Home" },
    { href: "/#about", es: "Acerca", en: "About" },
    { href: "/#projects", es: "Proyectos", en: "Projects" },
    { href: "/#technologies", es: "Tecnologías", en: "Technologies" },
    { href: "/#certificates", es: "Certificados", en: "Certificates" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  const logoAnimation = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const navLinksContainerAnimation = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const navLinkAnimation = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const rightButtonsAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const mobileButtonAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const mobileMenuAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50 h-20 py-4 px-6 md:px-12 flex items-center justify-between backdrop-blur-md text-(--text-color) componentShadowStrong"
      initial="hidden"
      whileInView="visible"
    >
      <motion.a
        href="/"
        className="z-100"
        initial="hidden"
        whileInView="visible"
        variants={logoAnimation}
      >
        <div className="text-2xl md:text-3xl font-bold logo-pulse select-none cursor-pointer hover:opacity-80 textShadow">
          GG Developer
        </div>
      </motion.a>
      <motion.nav
        className="hidden xl:flex gap-10 font-medium text-lg"
        initial="hidden"
        whileInView="visible"
        variants={navLinksContainerAnimation}
      >
        <div className="flex gap-10">
          {links.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              variants={navLinkAnimation}
              onMouseEnter={() => setHovered(link.href)}
              onMouseLeave={() => setHovered(null)}
              className="relative inline-block"
              animate={{ opacity: hovered && hovered !== link.href ? 0.2 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <span className="relative z-10 textShadow text-lg">
                {language === "es" ? link.es : link.en}
              </span>
              <span className={`absolute left-0 -bottom-1 w-full h-0.75 bg-(--button-active) origin-left block ${ hovered === link.href ? "scale-x-100" : "scale-x-0" }`}/>
            </motion.a>
          ))}
        </div>
      </motion.nav>
      <motion.div
        className="flex items-center justify-center gap-4 lg:gap-6"
        initial="hidden"
        whileInView="visible"
        variants={rightButtonsAnimation}
      >
        <button
          onClick={toggleTheme}
          className="hidden xl:flex relative w-20 h-10 rounded-full bg-(--button-bg) items-center justify-between px-2.75 transition duration-300 ease-in-out border-2 border-(--text-color) cursor-pointer"
        >
          <img src="/icons/sun.webp" alt="sun" className="w-4 h-4 z-10" />
          <img src="/icons/moon.webp" alt="moon" className="w-4 h-4 z-10" />
          <div className={`absolute top-1/2 transform -translate-y-1/2 left-1 w-8 h-8 bg-(--button-active) rounded-full shadow-md transition-transform duration-300 ${isDarkMode ? "translate-x-9" : "translate-x-0" }`}/>
        </button>
        <button
          onClick={toggleLanguage}
          className="hidden xl:flex relative w-20 h-10 rounded-full bg-(--button-bg) items-center justify-between px-2.75 transition duration-300 ease-in-out border-2 border-(--text-color) cursor-pointer"
        >
          <img src="/icons/colombia.webp" alt="es" className="w-4 h-4 z-10" />
          <img src="/icons/us.webp" alt="en" className="w-4 h-4 z-10" />
          <div className={`absolute top-1/2 transform -translate-y-1/2 left-1 w-8 h-8 bg-(--button-active) rounded-full shadow-md transition-transform duration-300 ${language === "en" ? "translate-x-9" : "translate-x-0" }`}/>
        </button>
        <motion.button
          onClick={toggleMenu}
          className="xl:hidden z-100"
          initial="hidden"
          whileInView="visible"
          variants={mobileButtonAnimation}
        >
          <img
            src={`/icons/${isMenuOpen
                ? isDarkMode
                  ? "close-white"
                  : "close-black"
                : isDarkMode
                  ? "menu-white"
                  : "menu-black"
              }.png`}
            alt="menu"
            className="w-8 h-8"
          />
        </motion.button>
      </motion.div>
      {isMenuOpen && (
        <motion.div
          className="bg-(--primary) z-80 xl:hidden fixed top-0 left-0 w-full h-screen text-primary flex flex-col items-center justify-start gap-12 p-6 pt-40 componentShadowStrong overflow-y-auto"
          initial="hidden"
          animate="visible"
          variants={mobileMenuAnimation}
        >
          <div className="flex justify-center items-center gap-5">
            <button
              onClick={toggleTheme}
              className="flex relative w-20 h-10 rounded-full bg-(--button-bg) items-center justify-between px-2.75 transition duration-300 ease-in-out border-2 border-(--text-color) cursor-pointer"
            >
              <img src="/icons/sun.webp" alt="sun" className="w-4 h-4 z-10" />
              <img src="/icons/moon.webp" alt="moon" className="w-4 h-4 z-10" />
              <div
                className={`absolute top-1/2 transform -translate-y-1/2 left-1 w-8 h-8 bg-(--button-active) rounded-full shadow-md transition-transform duration-300 ${isDarkMode ? "translate-x-9" : "translate-x-0"
                  }`}
              />
            </button>
            <button
              onClick={toggleLanguage}
              className="flex relative w-20 h-10 rounded-full bg-(--button-bg) items-center justify-between px-2.75 transition duration-300 ease-in-out border-2 border-(--text-color) cursor-pointer"
            >
              <img src="/icons/colombia.webp" alt="es" className="w-4 h-4 z-10" />
              <img src="/icons/us.webp" alt="en" className="w-4 h-4 z-10" />
              <div
                className={`absolute top-1/2 transform -translate-y-1/2 left-1 w-8 h-8 bg-(--button-active) rounded-full shadow-md transition-transform duration-300 ${language === "en" ? "translate-x-9" : "translate-x-0"
                  }`}
              />
            </button>
          </div>
          <div className="flex flex-col justify-center items-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={toggleMenu}
                className="hover:opacity-70 font-medium text-lg"
              >
                {language === "es" ? link.es : link.en}
              </a>
            ))}
          </div>
        </motion.div>
        )}
    </motion.header>
  );
}