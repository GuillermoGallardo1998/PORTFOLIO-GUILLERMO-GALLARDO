// components/Footer.tsx

import { useState, useEffect } from "react";
import { useLanguage } from "../context/language/hook";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

type FormData = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  description: string;
};

type Errors = Partial<Record<keyof FormData, string>>;

export default function Footer() {
  const [open, setOpen] = useState(false);
  const { language } = useLanguage();
  const [isSending, setIsSending] = useState(false);

  const text = {
    es: {
      rights: "Todos los derechos reservados",
      sendMail: "Contáctame por correo",
      modalTitle: "Envíame un mensaje",
      name: "Tu nombre completo",
      phone: "Tu número de contacto",
      email: "Tu correo electrónico",
      subject: "Motivo del mensaje",
      description: "Escribe tu mensaje o consulta aquí...",
      send: "Enviar mensaje",
    },
    en: {
      rights: "All rights reserved",
      sendMail: "Contact me by email",
      modalTitle: "Send me a message",
      name: "Your full name",
      phone: "Your contact number",
      email: "Your email address",
      subject: "Reason for your message",
      description: "Write your message or inquiry here...",
      send: "Send message",
    },
  };

  const icons = [
    { src: "/icons/GithubPage.png", alt: "Github", link: "https://github.com/GuillermoGallardo1998" },
    { src: "/icons/Linkedin.png", alt: "Linkedin", link: "https://www.linkedin.com/in/guillermo-gallardo-30911822a/" },
    { src: "/icons/Instagram.png", alt: "Instagram", link: "https://www.instagram.com/just.gallardo.98/" },
    { src: "/icons/Facebook.png", alt: "Facebook", link: "https://www.facebook.com/just.Gallardo.98" },
    { src: "/icons/Discord.png", alt: "Discord", link: "https://discord.gg/MRKGqNV9" },
  ];

  const t = text[language];

  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    subject: "",
    description: "",
  });

  const [errors, setErrors] = useState<Errors>({});

  useEffect(() => {
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (PUBLIC_KEY) {
      emailjs.init(PUBLIC_KEY);
      console.log("EmailJS initialized ✅");
    } else {
      console.error("No EmailJS Public Key found!");
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const onlyNumbers = value.replace(/[^\d+]/g, "");
      setFormData((prev) => ({ ...prev, [name]: onlyNumbers }));
      return;
    }

    if (name === "description" && value.length > 1000) return;

    const forbiddenPattern = /(https?:\/\/[^\s]+)|(<[^>]*>)|(\bscript\b)/gi;
    if (forbiddenPattern.test(value)) {
      setErrors((prev) => ({ ...prev, [name]: language === "es" ? "No se permiten links ni código" : "Links or code not allowed" }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = (): boolean => {
    const newErrors: Errors = {};

    const forbiddenPattern = /(https?:\/\/[^\s]+)|(<[^>]*>)|(\bscript\b)/gi;

    if (!formData.name.trim()) newErrors.name = language === "es" ? "El nombre es obligatorio" : "Name is required";
    else if (forbiddenPattern.test(formData.name)) newErrors.name = language === "es" ? "No se permiten links ni código" : "Links or code not allowed";

    if (!formData.phone.trim()) newErrors.phone = language === "es" ? "El teléfono es obligatorio" : "Phone is required";
    else if (!/^\+?\d{7,15}$/.test(formData.phone)) newErrors.phone = language === "es" ? "Teléfono inválido" : "Invalid phone number";

    if (!formData.email.trim()) newErrors.email = language === "es" ? "El email es obligatorio" : "Email is required";
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) newErrors.email = language === "es" ? "Email inválido" : "Invalid email";

    if (!formData.subject.trim()) newErrors.subject = language === "es" ? "El asunto es obligatorio" : "Subject is required";
    else if (forbiddenPattern.test(formData.subject)) newErrors.subject = language === "es" ? "No se permiten links ni código" : "Links or code not allowed";

    if (!formData.description.trim()) newErrors.description = language === "es" ? "La descripción es obligatoria" : "Description is required";
    else if (formData.description.length > 1000) newErrors.description = language === "es" ? "Máximo 1000 caracteres" : "Maximum 1000 characters";
    else if (forbiddenPattern.test(formData.description)) newErrors.description = language === "es" ? "No se permiten links ni código" : "Links or code not allowed";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const LIMIT = 3;
  const TIME_WINDOW = 60000;

  const canSendEmail = () => {
    const now = Date.now();
    const data = JSON.parse(localStorage.getItem("emailAttempts") || "[]");
    const recent = data.filter((t: number) => now - t < TIME_WINDOW);

    return recent.length < LIMIT;
  };

  const registerAttempt = () => {
    const now = Date.now();
    const data = JSON.parse(localStorage.getItem("emailAttempts") || "[]");
    const recent = data.filter((t: number) => now - t < TIME_WINDOW);
    recent.push(now);

    localStorage.setItem("emailAttempts", JSON.stringify(recent));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isSending) return;
    setIsSending(true);

    if (!validate()) {
      setIsSending(false);
      return;
    }

    if (!canSendEmail()) {
      toast.error(
        language === "es"
          ? "Has enviado demasiados mensajes, intenta en un momento"
          : "Too many messages sent, please try again later"
      );
      setIsSending(false);
      return;
    }

    registerAttempt();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData
      )
      .then(
        (response) => {
          console.log("Correo enviado!", response.status, response.text);
          toast.success(
            language === "es"
              ? "Correo enviado con éxito"
              : "Email sent successfully"
          );

          setFormData({
            name: "",
            phone: "",
            email: "",
            subject: "",
            description: "",
          });
          setOpen(false);
          setIsSending(false);
        },
        (error) => {
          console.error("Error al enviar correo:", error);
          toast.error(
            language === "es"
              ? "Error al enviar correo"
              : "Error sending email"
          );
          setIsSending(false);
        }
      );
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const iconVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.2 }, }),
  };

  return (
    <footer id="footer">
      <div className="bg-(--primary) px-10 pt-30">
        <motion.div
          variants={itemVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0"
        >
          <div className="w-full h-px md:flex-1 md:h-px md:w-auto bg-(--text-color)">
          </div>
          <div className="sm:px-10 text-center">
            <h2 className="text-5xl font-bold tracking-wider text-(--button-active) pb-2 textShadow">
              Guillermo
            </h2>
            <p className="text-3xl text-(--text-color)/80 -mt-2 textShadow">
              Gallardo
            </p>
          </div>
          <div className="w-full h-px md:flex-1 md:h-px md:w-auto bg-(--text-color)">
          </div>
        </motion.div>
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid lg:grid-cols-3 gap-10 justify-center items-center py-30">
            <motion.div variants={itemVariant} className="text-(--text-color)/80 text-center md:text-lg textShadow">
              © {new Date().getFullYear()}
              <br />
              {t.rights}
              <br />
              Guillermo Gallardo Pino
            </motion.div>
            <motion.div variants={itemVariant} className="flex justify-center">
              <button
                onClick={() => setOpen(true)}
                className="text-lg md:text-xl px-6 py-4 bg-(--text-color) text-(--secondary) textShadow font-semibold rounded-xl componentShadowSoft transform-gpu hover:scale-103 transition-transform duration-300 ease-in-out cursor-pointer"
              >
                {t.sendMail}
              </button>
            </motion.div>
            <motion.div variants={itemVariant} className="text-(--text-color)/80 text-center space-y-2 textShadow md:text-lg">
              <a
                href="https://wa.me/573126968778?text=Hola%20Guillermo,%20estoy%20interesado%20en%20contactarte%20porque%20vi%20tu%20trabajo%20como%20desarrollador."
                target="_blank"
                className="block hover:underline"
              >
                WhatsApp: +57 312 696 8778
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&to=guillermogallardopino@gmail.com&su=Interés%20en%20tu%20trabajo&body=Hola%20Guillermo,%20vi%20tu%20portafolio%20y%20estoy%20interesado%20en%20contactarte%20por%20tu%20trabajo."
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:underline"
              >
                guillermogallardopino@gmail.com
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div className="flex items-center justify-center gap-20 bg-(--secondary) px-10 py-20 componentShadowStrong">
        <div className="flex flex-wrap justify-center items-center gap-6 group">
          {icons.map((icon, index) => (
            <motion.a
              key={icon.alt}
              href={icon.link}
              target="_blank"
              rel="noopener noreferrer"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={iconVariant}
            >
              <img
                src={icon.src}
                alt={icon.alt}
                className="w-12 h-12 transform transition duration-300 ease-in-out hover:scale-110 hover:opacity-100 group-hover:opacity-50 cursor-pointer"
              />
            </motion.a>
          ))}
        </div>
      </div>
      {open && (
        <div
          className="p-5 fixed inset-0 bg-(--primary)/60 overflow-auto flex justify-center items-start z-100 pt-30 pb-20"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-(--secondary) text-(--text-color) py-10 px-6 sm:py-20 sm:px-10 rounded-3xl w-full max-w-md sm:max-w-lg md:max-w-xl relative componentShadowStrong"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute right-5 top-5 hover:scale-120 px-2 py-1 font-bold text-2xl textShadow"
            >
              ✕
            </button>
            <h3 className="text-3xl font-bold mb-6 textShadow">{t.modalTitle}</h3>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
              <div>
                <input
                  name="name"
                  type="text"
                  placeholder={t.name}
                  className="border p-3 rounded-xl bg-(--primary) placeholder-(--text-color)/80 componentShadowSoft w-full"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="text-(--hover-color) text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <input
                  name="phone"
                  type="tel"
                  placeholder={t.phone}
                  className="border p-3 rounded-xl bg-(--primary) placeholder-(--text-color)/80 componentShadowSoft w-full"
                  value={formData.phone}
                  onChange={handleChange}
                  pattern="[0-9]*"
                  inputMode="numeric"
                />
                {errors.phone && <p className="text-(--hover-color) text-sm mt-1">{errors.phone}</p>}
              </div>
              <div>
                <input
                  name="email"
                  type="email"
                  placeholder={t.email}
                  className="border p-3 rounded-xl bg-(--primary) placeholder-(--text-color)/80 componentShadowSoft w-full"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-(--hover-color) text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <input
                  name="subject"
                  type="text"
                  placeholder={t.subject}
                  className="border p-3 rounded-xl bg-(--primary) placeholder-(--text-color)/80 componentShadowSoft w-full"
                  value={formData.subject}
                  onChange={handleChange}
                />
                {errors.subject && <p className="text-(--hover-color) text-sm mt-1">{errors.subject}</p>}
              </div>
              <div>
                <textarea
                  name="description"
                  placeholder={t.description}
                  className="border p-3 rounded-xl bg-(--primary) placeholder-(--text-color)/80 h-28 componentShadowSoft w-full"
                  value={formData.description}
                  onChange={handleChange}
                  maxLength={1000}
                />
                {errors.description && (
                  <p className="text-(--hover-color) text-sm mt-1">
                    {errors.description}
                  </p>
                )}
                <p className="text-sm text-(--text-color)/80 mt-1 text-left">
                  {formData.description.length}/1000
                </p>
              </div>
              <button
                type="submit"
                disabled={isSending}
                className={`text-lg px-4 py-2 bg-(--text-color) text-(--secondary) textShadow font-semibold rounded-xl componentShadowSoft transform-gpu transition-transform duration-300 ease-in-out cursor-pointer
                ${isSending ? "opacity-50 cursor-not-allowed" : "hover:scale-95"}`}
              >
                {t.send}
              </button>
            </form>
          </div>
        </div>
      )}
    </footer>
  );
}