// components/ProjectDetailGallery.tsx

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/language/hook";

interface ProjectDetailGalleryProps {
  images: string[];
}

const ProjectDetailGallery = ({ images }: ProjectDetailGalleryProps) => {
  const { language } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [direction, setDirection] = useState(0);

  const dragStart = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [selectedIndex]);

  const resetView = () => {
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  };

  const navigate = (newDirection: number) => {
    if (selectedIndex === null) return;
    setDirection(newDirection);
    setSelectedIndex((prev) => (prev! + newDirection + images.length) % images.length);
    resetView();
  };

  const getBoundedOffset = (x: number, y: number, newZoom: number) => {
    if (!imgRef.current || !containerRef.current) return { x, y };
    const container = containerRef.current.getBoundingClientRect();
    const imgWidth = imgRef.current.offsetWidth * newZoom;
    const imgHeight = imgRef.current.offsetHeight * newZoom;
    const maxX = Math.max(0, (imgWidth - container.width) / 2);
    const maxY = Math.max(0, (imgHeight - container.height) / 2);
    return {
      x: Math.max(-maxX, Math.min(x, maxX)),
      y: Math.max(-maxY, Math.min(y, maxY)),
    };
  };

  const handleWheel = (e: React.WheelEvent) => {
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    const newZoom = Math.min(Math.max(zoom + delta, 1), 2.5);
    setZoom(newZoom);
    if (newZoom <= 1) {
      setOffset({ x: 0, y: 0 });
    } else {
      setOffset(getBoundedOffset(offset.x, offset.y, newZoom));
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom <= 1) return;
    setIsDragging(true);
    dragStart.current = { x: e.clientX - offset.x, y: e.clientY - offset.y };
  };

  useEffect(() => {
    if (!isDragging) return;
    const handleMouseMove = (e: MouseEvent) => {
      const bounded = getBoundedOffset(e.clientX - dragStart.current.x, e.clientY - dragStart.current.y, zoom);
      setOffset(bounded);
    };
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, zoom, offset]);

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <div 
            key={index} 
            className="w-full h-50 overflow-hidden rounded-lg cursor-pointer hover:opacity-60 transition-opacity duration-300 ease-in-out componentShadowSoft" 
            onClick={() => { setDirection(0); setSelectedIndex(index); resetView(); }}
          >
            <img 
              src={img} 
              className="w-full h-full object-cover object-top" 
              alt={language === "es" ? "Imagen de la galería del proyecto" : "Project gallery image"}
              onContextMenu={(e) => e.preventDefault()}
              draggable={false} 
            />
          </div>
        ))}
      </div>
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/95 flex flex-col items-center justify-center z-50 pt-30 pb-10 p-5 md:p-10 md:pt-30 gap-20" onClick={() => setSelectedIndex(null)}>
          <button className="absolute top-6 right-8 font-bold text-[#F5F5F5] text-4xl z-70 hover:bg-[#212121] rounded-full w-16 h-16 flex items-center justify-center transition cursor-pointer" onClick={() => setSelectedIndex(null)}>
            ✕
          </button>
          <div
            ref={containerRef}
            className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            onWheel={handleWheel}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.img
                alt={language === "es" ? "Imagen de la galería del proyecto con zoom" : "Project gallery image with zoom"}
                key={selectedIndex}
                src={images[selectedIndex]}
                ref={imgRef}
                draggable={false}
                onMouseDown={handleMouseDown}
                onContextMenu={(e) => e.preventDefault()}
                initial={{ opacity: 0, x: direction * 100 }}
                animate={{
                  opacity: 1,
                  x: offset.x,
                  y: offset.y,
                  scale: zoom
                }}
                exit={{ opacity: 0, x: direction * -100 }}
                transition={isDragging ? { type: "tween", duration: 0 } : { duration: 0.3 }}
                style={{
                  maxWidth: "90%",
                  maxHeight: "100%",
                  cursor: zoom > 1 ? (isDragging ? "grabbing" : "grab") : "auto",
                }}
                className="object-contain select-none shadow-2xl"
              />
            </AnimatePresence>
          </div>
          <div onClick={(e) => e.stopPropagation()}>
            <div className="flex gap-4 items-center justify-center">
              <button className="text-[#F5F5F5] text-5xl hover:bg-[#212121] rounded-full w-12 h-12 flex items-center justify-center transition pr-1 pb-1 cursor-pointer" onClick={() => navigate(-1)}>
                ‹
              </button>
              <span className="text-[#F5F5F5]">
                {selectedIndex + 1} / {images.length}
              </span>
              <button className="text-[#F5F5F5] text-5xl hover:bg-[#212121] rounded-full w-12 h-12 flex items-center justify-center transition pl-1 pb-1 cursor-pointer" onClick={() => navigate(1)}>
                ›
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetailGallery;