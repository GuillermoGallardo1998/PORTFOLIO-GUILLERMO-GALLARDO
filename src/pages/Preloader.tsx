// pages/Preloader.tsx

import { useEffect, useState } from "react";
import { useLanguage } from "../context/language/hook";

interface PreloaderProps {
  onFinish: () => void;
}

export default function Preloader({ onFinish }: PreloaderProps) {
  const [explode, setExplode] = useState(false);
	const { language } = useLanguage();

  useEffect(() => {
    const explodeTimer = setTimeout(() => {
      setExplode(true);
    }, 3500);

    const finishTimer = setTimeout(() => {
      onFinish();
    }, 4000);

    return () => {
      clearTimeout(explodeTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div className={`preloader-gate  fixed inset-0 bg-(--primary) flex justify-center items-end z-400 isolate  ${explode ? "is-opening" : ""}`}>
      <h1 className="preloader-title absolute top-30 text-center text-4xl lg:text-5xl p-10 font-extrabold text-(--text-color) textShadow">
				Guillermo Gallardo Pino
				<span className="block text-center text-lg lg:text-xl text-(--text-color)/60 mt-4 textShadow">
					{language === "es" ? "Desarrollador Web" : "Web Developer"}
				</span>
			</h1>
      <div className="preloader-ball-element w-18 h-18 rounded-full bg-(--text-color) mb-30 componentShadowStrong pointer-events-none"></div>
    </div>
  );
}