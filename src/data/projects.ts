// data/projects.ts

export interface Project {
  slug: string;
  title: {
    es: string;
    en: string;
  };
  shortDescription: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  images: {
    es: string[];
    en: string[];
  };
  technologies: string[];
  areas: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: "live" | "development";
}

export const projects: Project[] = [
  // Live Projects
  {
    slug: "focustar",
    title: {
      es: "Focustar App de Productividad",
      en: "Focustar Productivity App"
    },
    shortDescription: {
      es: "Focustar es un motor de rutinas inteligentes que lleva el concepto del temporizador tipo Pomodoro a un nivel más estructurado y automático. Permite ejecutar bloques de trabajo encadenados automáticamente, guardar rutinas en la nube y mantener el flujo de concentración sin fricciones. Diseñada para estudiantes y profesionales que buscan profundidad sin complejidad.",
      en: "Focustar is an intelligent routine engine that takes the Pomodoro-style timer concept to a more structured and automated level. It allows you to run chained work blocks automatically, save routines in the cloud, and maintain uninterrupted focus. Designed for students and professionals seeking depth without complexity."
    },
    description: {
      es: `Focustar es un motor de rutinas inteligentes que lleva el concepto del temporizador tipo Pomodoro a un nivel más avanzado y automatizado. Permite ejecutar bloques de trabajo encadenados de manera automática, manteniendo la concentración sin interrupciones y evitando la necesidad de reiniciar manualmente cada sesión.

      Los usuarios pueden crear, personalizar y guardar sus rutinas en la nube, acceder a ellas desde cualquier dispositivo y organizar su tiempo de manera eficiente. El sistema está diseñado para optimizar la productividad, combinando la simplicidad de uso con la profundidad funcional.

      Focustar está pensado tanto para estudiantes como para profesionales que buscan maximizar su enfoque y flujo de trabajo sin complicaciones, ofreciendo una experiencia fluida y libre de fricciones.`,
      en: `Focustar is an intelligent routine engine that elevates the Pomodoro-style timer concept to a more advanced and automated level. It allows users to run chained work blocks automatically, maintaining focus without interruptions and eliminating the need to manually restart each session.

      Users can create, customize, and save their routines in the cloud, access them from any device, and organize their time efficiently. The system is designed to optimize productivity, combining ease of use with deep functionality.

      Focustar is tailored for both students and professionals who aim to maximize focus and workflow without complexity, providing a seamless and frictionless experience.`
    },
    images: {
      es: [
        "/images/es/TaskList.webp",
        "/images/es/RoutineList-close.webp",
        "/images/es/TaskList-mobile.webp",
        "/images/es/RoutineList-close-mobile.webp",
        "/images/es/FocustarHeader-mobile.webp",
        "/images/es/FocustarLogin.webp",
        "/images/es/FocustarRegister.webp",
        "/images/es/FocustarHero.webp",
        "/images/es/FocustarDescription.webp",
        "/images/es/FocustarWelcome.webp",
        "/images/es/RoutineList.webp",
        "/images/es/FocustarAbout.webp",
        "/images/es/FocustarFooter.webp",
        "/images/es/Focustar404.webp",
        "/images/es/FocustarEmail.webp",
      ],
      en: [
        "/images/en/TaskList-EN.webp",
        "/images/en/RoutineList-close-EN.webp",
        "/images/en/TaskList-mobile-EN.webp",
        "/images/en/RoutineList-close-mobile-EN.webp",
        "/images/en/FocustarHeader-mobile-EN.webp",
        "/images/en/FocustarLogin-EN.webp",
        "/images/en/FocustarRegister-EN.webp",
        "/images/en/FocustarHero-EN.webp",
        "/images/en/FocustarDescription-EN.webp",
        "/images/en/FocustarWelcome-EN.webp",
        "/images/en/RoutineList-EN.webp",
        "/images/en/FocustarAbout-EN.webp",
        "/images/en/FocustarFooter-EN.webp",
        "/images/en/Focustar404-EN.webp",
        "/images/es/FocustarEmail.webp",
      ]
    },
    technologies: ["React", "Vite", "JavaScript", "Tailwind", "Modular Component", "React Hooks", "Zustand", "Chained Timers", "Block Execution Engine", "Hybrid Persistence (Local + Cloud)", "Firebase", "Form Automation", "ESLint", "Git", "GitHub", "Scalable Architecture", "Hand-coded with CSS + JS"],
    areas: ["Responsive Web Design", "Performance Optimization", "Accessibility", "SEO", "Hand-coded Animations & UI Interactions", "Multi-device Synchronization", "Local-first Development with high fidelity deployment", "Modular & Maintainable CSS"],
    githubUrl: "https://github.com/GuillermoGallardo1998/FOCUSTAR",
    liveUrl: "https://focustar-d1d4a.web.app/",
    status: "live",
  },
  {
    slug: "TiamoMakeup",
    title: {
      es: "Tiamo Makeup",
      en: "Tiamo Makeup"
    },
    shortDescription: {
      es: "Landing page profesional para una maquilladora profesional, mostrando sus servicios, galería de portafolio y sistema de contacto. Desarrollada con React y Vite, usando CSS modular y JavaScript puro. Todas las animaciones e interacciones fueron codificadas a mano con CSS y JavaScript (sin librerías de animación). El proyecto enfatiza alto rendimiento, accesibilidad, buenas prácticas de SEO, código limpio con ESLint, y está desplegado en Firebase Hosting con integración de EmailJS.",
      en: "Professional landing page for a professional makeup artist, showcasing services, portfolio gallery, and contact system. Built with React and Vite, using modular CSS and vanilla JavaScript. All animations and interactions were hand-coded with CSS and JavaScript (no animation libraries). The project emphasizes high performance, accessibility, SEO best practices, clean code with ESLint, and is deployed on Firebase Hosting with EmailJS integration."
    },
    description: {
      es: `Landing page profesional para Nahomy Tiamo, una maquilladora profesional.
      La página muestra sus servicios (bodas, sociales, artísticos, full glam), galería de experiencias, formulario de contacto y sistema de reservas.

      Este proyecto se desarrolló casi en su totalidad de manera local, con codificación manual de todos los componentes, animaciones e interactividad usando CSS y JavaScript, sin depender de librerías externas de animación. La versión desplegada representa casi exactamente el resultado del desarrollo local, asegurando alta fidelidad entre desarrollo y producción.

      El CSS está organizado utilizando la metodología BEM (Block, Element, Modifier), asegurando una arquitectura de estilos escalable y mantenible.

      Desarrollado con React, Vite, CSS modular y JavaScript puro.

      El proyecto enfatiza alto rendimiento, accesibilidad, buenas prácticas de SEO y sigue estándares de código limpio con ESLint.
      Está desplegado en Firebase Hosting e integra EmailJS para el formulario de contacto.`,
      en: `Professional landing page for Nahomy Tiamo, a professional makeup artist.
      The page showcases her services (wedding, social, artistic, full glam), experiences gallery, contact form, and booking system.

      This project was developed almost entirely locally, with careful hand-coding of all components, animations, and interactivity using CSS and JavaScript, without relying on external animation libraries. The deployed version represents almost the exact result from local development, ensuring high fidelity between development and production.

      CSS is organized using the BEM (Block, Element, Modifier) methodology, ensuring a scalable and maintainable style architecture.

      Developed with React, Vite, modular CSS, and plain JavaScript.

      The project emphasizes high performance, accessibility, SEO best practices, and follows clean code standards with ESLint.
      It is deployed on Firebase Hosting and integrates EmailJS for the contact form.`
    },
    images: {
      es: [
        "/images/es/Tiamomakeup-ServicesFaq.webp",
        "/images/es/Tiamomakeup-HeroAbout.webp",
        "/images/es/Tiamomakeup-Preloader.webp",
        "/images/es/Tiamomakeup-Preloader-Cell.webp",
        "/images/es/Tiamomakeup-Hero.webp",
        "/images/es/Tiamomakeup-Hero-Tablet.webp",
        "/images/es/Tiamomakeup-Hero-Cell.webp",
        "/images/es/Tiamomakeup-About.webp",
        "/images/es/Tiamomakeup-Services.webp",
        "/images/es/Tiamomakeup-Testimony.webp",
        "/images/es/Tiamomakeup-Request.webp",
        "/images/es/Tiamomakeup-Faq.webp",
        "/images/es/Tiamomakeup-Footer.webp",
        "/images/es/TiamoMkeupEmail.webp",
      ],
      en: [
        "/images/es/Tiamomakeup-ServicesFaq.webp",
        "/images/es/Tiamomakeup-HeroAbout.webp",
        "/images/es/Tiamomakeup-Preloader.webp",
        "/images/es/Tiamomakeup-Preloader-Cell.webp",
        "/images/es/Tiamomakeup-Hero.webp",
        "/images/es/Tiamomakeup-Hero-Tablet.webp",
        "/images/es/Tiamomakeup-Hero-Cell.webp",
        "/images/es/Tiamomakeup-About.webp",
        "/images/es/Tiamomakeup-Services.webp",
        "/images/es/Tiamomakeup-Testimony.webp",
        "/images/es/Tiamomakeup-Request.webp",
        "/images/es/Tiamomakeup-Faq.webp",
        "/images/es/Tiamomakeup-Footer.webp",
        "/images/es/TiamoMkeupEmail.webp",
      ]
    },
    technologies: ["React", "Vite", "JavaScript", "BEM", "Firebase", "EmailJS", "ESLint", "Hand-coded with CSS + JS"],
    areas: ["Responsive Web Design", "Performance Optimization", "Accessibility", "SEO", "UI/UX", "Contact Form Automation", "Local-first Development with high fidelity deployment", "CSS organized using BEM for maintainability"],
    githubUrl: "https://github.com/GuillermoGallardo1998/TIAMO-MAKEUP",
    liveUrl: "https://tiamomakeup.art",
    status: "live",
  },
  {
    slug: "Kypa",
    title: {
      es: "Kypa",
      en: "Kypa"
    },
    shortDescription: {
      es: `Este proyecto se creó con el objetivo de brindar oportunidades laborales a trabajadores del hogar y especialistas en limpieza, conectándolos con clientes que necesitaban ayuda en sus hogares. El propósito era generar un impacto social mediante una solución digital rápida, accesible y profesional.

      La versión inicial se construyó y desplegó como un MVP real, enfocándose en validar la idea, atraer usuarios y ofrecer un flujo funcional de extremo a extremo desde el primer momento."

      Si quieres, puedo también hacer una versión más larga y detallada, ideal para portafolio, resaltando objetivos, impacto social, tecnologías y flujo completo del proyecto. Esto suele hacer que la descripción se vea más profesional y atractiva.`,
      en: `This project was created with the goal of providing job opportunities for domestic workers and cleaning specialists, connecting them with clients who needed help at home. The aim was to generate a social impact through a fast, accessible, and professional digital solution.

      The initial version was built and deployed as a real MVP, focused on validating the idea, attracting users, and delivering an end-to-end functional flow from the very beginning.`
    },
    description: {
      es: `Kypa es una plataforma creada para conectar trabajadores del hogar y especialistas en limpieza con clientes que necesitan ayuda en sus hogares, con el objetivo de generar un impacto social mediante una solución digital rápida, accesible y profesional.

      La primera versión fue desarrollada como un MVP funcional, 100% creado por mí, centrado en validar la idea, atraer usuarios reales y ofrecer un flujo completo de extremo a extremo desde el primer momento. Diseñé la estructura del producto, el flujo de usuario, el layout, las animaciones, los formularios y la lógica de redirección, priorizando SEO, rendimiento y accesibilidad. También implementé la automatización de formularios y el seguimiento de visitas para la validación temprana.

      El proyecto incluyó un punto de entrada principal (Kypa.com.co) que redirigía aleatoriamente a dos variantes: Kypa Home, con un enfoque más racional, y Kypa Hogar, con un enfoque más emocional. Esta estrategia permitió evaluar qué tipo de comunicación atraía más a los clientes.

      Todo fue desarrollado con HTML, CSS y JavaScript puro, sin frameworks, asegurando tiempos de carga rápidos, control total sobre el rendimiento y una base sólida para futuras iteraciones hacia una experiencia WebApp más completa. El CSS se organizó usando la metodología BEM para mantener la escalabilidad y la mantenibilidad. La plataforma se desplegó en Firebase Hosting, integrando EmailJS para formularios y Google Analytics para seguimiento de visitas.

      Esta versión inicial sentó las bases para la evolución conceptual hacia una WebApp más compleja, incluyendo selección de servicios y pasos de reserva, demostrando cómo la idea original podía escalar, siempre manteniendo la prioridad en simplicidad, rendimiento y flujo funcional completo.`,
      en: `Kypa is a platform designed to connect domestic workers and cleaning specialists with clients who need help at home, aiming to generate social impact through a fast, accessible, and professional digital solution.

      The initial version was built as a fully functional MVP, 100% created by me, focused on validating the idea, attracting real users, and delivering an end-to-end functional flow from the very beginning. I defined the product structure, user flow, layout, animations, forms, and redirection logic, prioritizing SEO, performance, and accessibility. Form automation and visit tracking were also implemented for early validation.

      The project included a main entry point (Kypa.com.co) that randomly redirected users to two variants: Kypa Home, with a more rational approach, and Kypa Hogar, with a more emotional approach. This strategy allowed evaluating which communication style attracted more clients.

      Everything was developed with pure HTML, CSS, and JavaScript, without frameworks, ensuring fast load times, full control over performance, and a solid foundation for future iterations toward a more complete WebApp experience. CSS was organized using the BEM methodology for maintainability and scalability. The platform was deployed on Firebase Hosting, integrating EmailJS for forms and Google Analytics for visit tracking.

      This initial version laid the groundwork for the conceptual evolution toward a more complex WebApp, including service selection and booking steps, demonstrating how the original idea could scale while maintaining simplicity, performance, and a fully functional end-to-end flow.`
    },
    images: {
      es: [
        "/images/es/Kypa-landing.webp",
        "/images/es/kypa-redirection.webp",
        "/images/es/KypaMenu-Cell.webp",
        "/images/es/KypaHero.webp",
        "/images/es/KypaHero-Cell.webp",
        "/images/es/KypaAbout.webp",
        "/images/es/KypaServices.webp",
        "/images/es/KypaRequest.webp",
        "/images/es/KypaProcess.webp",
        "/images/es/KypaRef.webp",
        "/images/es/KypaFaq.webp",
        "/images/es/KypaFooter.webp",
      ],
      en: [
        "/images/es/Kypa-landing.webp",
        "/images/es/kypa-redirection.webp",
        "/images/es/KypaMenu-Cell.webp",
        "/images/es/KypaHero.webp",
        "/images/es/KypaHero-Cell.webp",
        "/images/es/KypaAbout.webp",
        "/images/es/KypaServices.webp",
        "/images/es/KypaRequest.webp",
        "/images/es/KypaProcess.webp",
        "/images/es/KypaRef.webp",
        "/images/es/KypaFaq.webp",
        "/images/es/KypaFooter.webp",
      ]
    },
    technologies: ["HTML", "CSS", "JavaScript", "EmailJS", "Firebase", "BEM", "Google Analytics"],
    areas: ["Responsive Web Design", "Contact Form Automation", "Performance Optimization", "Accessibility", "SEO", "Contact Form Automation"],
    githubUrl: "https://github.com/GuillermoGallardo1998/KYPA",
    liveUrl: "https://www.kypa.com.co/",
    status: "live",
  },

  // Development Projects
  {
    "slug": "AlojamientosDavis",
    "title": {
      "es": "Alojamientos Davis",
      "en": "Davis Accommodations"
    },
    "shortDescription": {
      "es": "Landing page para un hotel o servicio turístico, diseñada para ser visualmente atractiva con imágenes de alta calidad. Muestra servicios, habitaciones, tarifas y experiencias, e incluye llamadas a la acción destacadas para facilitar reservas y consultas de disponibilidad.",
      "en": "Landing page for a hotel or tourist accommodation service, designed to be visually appealing with high-quality images. Showcases services, rooms, rates, and experiences, with prominent calls to action for easy bookings and availability checks."
    },
    "description": {
      "es": "",
      "en": ""
    },
    "images": {
      "es": ["/images/es/Alojamientos-Davis.webp"],
      "en": ["/images/en/Alojamientos-Davis-EN.webp"]
    },
    "technologies": ["React", "Vite", "Tailwind", "ESLint", "Swiper.js", "n8n", "Google Maps API", "UI/UX", "MobileFirst", "API"],
    "areas": [],
    "status": "development"
  },
  {
    "slug": "MemosChat",
    "title": {
      "es": "Memos Chat",
      "en": "Memos Chat"
    },
    "shortDescription": {
      "es": "Plataforma estilo WhatsApp Web que permite registrarse con cuenta propia o Google. Los usuarios pueden chatear con personas generadas aleatoriamente, con respuestas impulsadas por Gemini, mostrando mensajes primero en el idioma del usuario virtual y luego traducidos. Ideal para practicar idiomas y demostrar integración avanzada con APIs e IA.",
      "en": "WhatsApp Web-style platform allowing registration via own account or Google. Users can chat with randomly generated people, with responses powered by Gemini, displaying messages first in the virtual user's language and then translated. Perfect for language practice and showcasing advanced API and AI integration."
    },
    "description": {
      "es": "",
      "en": ""
    },
    "images": {
      "es": ["/images/es/MemosChat.webp"],
      "en": ["/images/en/MemosChat-EN.webp"]
    },
    "technologies": ["React", "Next.js", "Tailwind", "Zustand", "Node.js", "Express.js", "Firebase", "Gemini API", "i18n", "UI/UX"],
    "areas": [],
    "status": "development"
  },
  {
    "slug": "Mokemon",
    "title": {
      "es": "Mokemon",
      "en": "Mokemon"
    },
    "shortDescription": {
      "es": "Juego estilo Pokémon donde eliges una criatura con habilidades únicas para competir en rondas tipo piedra, papel o tijera. Gana quien consiga 4 de 7 rondas. Incluye lógica en JavaScript, oponente aleatorio y reinicio al refrescar la página.",
      "en": "Pokémon-style game where you choose a creature with unique abilities to compete in rock-paper-scissors rounds. First to win 4 of 7 rounds wins. Includes JavaScript logic, random opponent, and page refresh reset."
    },
    "description": {
      "es": "",
      "en": ""
    },
    "images": {
      "es": ["/images/es/Mokemon.webp"],
      "en": ["/images/en/Mokemon-EN.webp"]
    },
    "technologies": ["HTML", "CSS", "JavaScript", "Anime.js", "Firebase", "UI/UX", "MobileFirst", "API", "GitHub", "Vite"],
    "areas": [],
    "status": "development"
  },
  {
    "slug": "CatchBunny",
    "title": {
      "es": "Atrapa al Conejo",
      "en": "Catch Bunny"
    },
    "shortDescription": {
      "es": "Juego simple donde el jugador debe capturar 5 conejos animados usando figuras y animaciones CSS puro. Incluye manejo de animaciones, eventos del mouse y teclado, y lógica básica de juego.",
      "en": "Simple game where the player must catch 5 animated bunnies using pure CSS shapes and animations. Includes animation handling, mouse and keyboard events, and basic game logic."
    },
    "description": {
      "es": "",
      "en": ""
    },
    "images": {
      "es": ["/images/es/CatchBunny.webp"],
      "en": ["/images/en/CatchBunny-EN.webp"]
    },
    "technologies": ["HTML", "CSS", "JavaScript", "Anime.js", "UI/UX", "MobileFirst", "DOM Events", "Vite", "GitHub", "API"],
    "areas": [],
    "status": "development"
  },
  {
    "slug": "LogicGames",
    "title": {
      "es": "Juegos Lógicos",
      "en": "Logic Games"
    },
    "shortDescription": {
      "es": "Colección minimalista de mini-juegos lógicos desarrollados con JavaScript puro. Incluye Adivina el número, FizzBuzz, Ahorcado, Piedra, papel o tijera, Snake y más. Demuestra manejo de lógica, DOM, eventos y desarrollo de juegos interactivos.",
      "en": "Minimalist collection of logic mini-games built with pure JavaScript. Includes Guess the number, FizzBuzz, Hangman, Rock-paper-scissors, Snake, and more. Showcases logic handling, DOM manipulation, event control, and interactive game development."
    },
    "description": {
      "es": "",
      "en": ""
    },
    "images": {
      "es": ["/images/es/LogicGames.webp"],
      "en": ["/images/en/LogicGames-EN.webp"]
    },
    "technologies": ["HTML", "CSS", "JavaScript", "Anime.js", "Tailwind", "UI/UX", "MobileFirst", "DOM Events", "GitHub", "Vite"],
    "areas": [],
    "status": "development"
  },
  {
    "slug": "ClickCat",
    "title": {
      "es": "Clic Gato",
      "en": "Click Cat"
    },
    "shortDescription": {
      "es": "Juego tipo “clicker” con múltiples niveles donde los jugadores ganan oro, compran mejoras, desbloquean personajes y logros. Cada jugador puede iniciar sesión para guardar su cuenta y progreso. Incluye animaciones, transiciones, temporizadores y diseño responsivo para todos los dispositivos.",
      "en": "Clicker-style game with multiple levels where players earn gold, purchase upgrades, unlock characters and achievements. Each player can log in to save their account and progress. Includes animations, transitions, timers, and responsive design for all devices."
    },
    "description": {
      "es": "",
      "en": ""
    },
    "images": {
      "es": ["/images/es/ClickCat.webp"],
      "en": ["/images/en/ClickCat-EN.webp"]
    },
    "technologies": ["React", "Vite", "Tailwind", "React Hooks", "Firebase", "Anime.js", "JavaScript", "UI/UX", "MobileFirst", "API"],
    "areas": [],
    "status": "development"
  },
  {
    "slug": "DeliCakes",
    "title": {
      "es": "DeliCakes",
      "en": "DeliCakes"
    },
    "shortDescription": {
      "es": "Landing page de venta de pasteles con catálogo visual y botón de compra que redirige a WhatsApp. Incluye animaciones interactivas, diseño centrado en el usuario y flujo de compra optimizado.",
      "en": "Landing page for selling cakes with a visual catalog and purchase button redirecting to WhatsApp. Includes interactive animations, user-centered design, and an optimized purchase flow."
    },
    "description": {
      "es": "",
      "en": ""
    },
    "images": {
      "es": ["/images/es/DeliCakes.webp"],
      "en": ["/images/en/DeliCakes-EN.webp"]
    },
    "technologies": ["React", "Vite", "Tailwind", "WhatsApp API", "JavaScript", "UI/UX", "MobileFirst", "Anime.js", "API", "EmailJS"],
    "areas": [],
    "status": "development"
  },
  {
    "slug": "ResidentEvil",
    "title": {
      "es": "Resident Evil",
      "en": "Resident Evil"
    },
    "shortDescription": {
      "es": "E-commerce creado con React donde los usuarios pueden registrarse, iniciar sesión y comprar juegos o películas de la saga Resident Evil. Incluye historial de compras, gestión de estado moderna, autenticación segura y experiencia interactiva para los usuarios.",
      "en": "E-commerce built with React where users can register, log in, and purchase games or movies from the Resident Evil franchise. Includes purchase history, modern state management, secure authentication, and an interactive user experience."
    },
    "description": {
      "es": "",
      "en": ""
    },
    "images": {
      "es": ["/images/es/ResidentEvil.webp"],
      "en": ["/images/en/ResidentEvil-EN.webp"]
    },
    "technologies": ["React", "React Router", "React Hooks", "Context API", "Firebase", "UI/UX", "MobileFirst", "Tailwind", "Redux", "API"],
    "areas": [],
    "status": "development"
  },
  {
    "slug": "PGAccessories",
    "title": {
      "es": "PG Accesorios",
      "en": "PG Accessories"
    },
    "shortDescription": {
      "es": "Tienda online de accesorios estilo “fast fashion”, con catálogo visual de productos, botones de compra, animaciones interactivas y un flujo de contacto directo simple.",
      "en": "Online store for fast fashion-style accessories, featuring a visual product catalog, purchase buttons, interactive animations, and a simple direct contact flow."
    },
    "description": {
      "es": "",
      "en": ""
    },
    "images": {
      "es": ["/images/es/PGAccessories.webp"],
      "en": ["/images/en/PGAccessories-EN.webp"]
    },
    "technologies": ["HTML", "CSS", "JavaScript", "Firebase", "Anime.js", "UI/UX", "MobileFirst", "Tailwind", "API", "EmailJS"],
    "areas": [],
    "status": "development"
  },
  {
    slug: "DevConnect",
    title: {
      es: "DevConnect",
      en: "DevConnect"
    },
    shortDescription: {
      es: `Red social para desarrolladores que permite compartir ideas, publicar proyectos, escribir artículos técnicos, comentar publicaciones y conectar con otros programadores. Fomenta aprendizaje colaborativo y construcción de comunidad tech.`,
      en: `Social network for developers that allows sharing ideas, publishing projects, writing technical articles, commenting on posts, and connecting with other programmers. Encourages collaborative learning and building a tech community.`
    },
    description: {
      es: "",
      en: ""
    },
    images: {
      es: [
        "/images/es/DevConnect.webp"
      ],
      en: [
        "/images/en/DevConnect-EN.webp"
      ]
    },
    technologies: ["React", "Next", "Firebase", "Tailwind", "Redux", "Posting, comments, and user profile features"],
    areas: [],
    status: "development",
  },
  {
    slug: "MemosBlogs",
    title: {
      es: "Memos Blog",
      en: "Memos Blog"
    },
    shortDescription: {
      es: `Blog personal donde comparto mis aprendizajes y conocimientos en programación. Permite organizar artículos, mostrar categorías y ofrecer una lectura clara y educativa.`,
      en: `Personal blog where I share my learnings and knowledge in programming. Allows organizing articles, displaying categories, and providing a clear, educational reading experience.`
    },
    description: {
      es: "",
      en: ""
    },
    images: {
      es: [
        "/images/es/MemosBlogs.webp"
      ],
      en: [
        "/images/en/MemosBlogs-EN.webp"
      ]
    },
    technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Firebase", "Dynamic Post Creation", "Post Publishing, Comments, and User Profiles", "UI/UX", "MobileFirst"],
    areas: [],
    status: "development",
  },
];