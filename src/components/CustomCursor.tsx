// components/CustomCursor.tsx

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let posX = 0;
    let posY = 0;
    const speed = 0.03;

    const animate = () => {
      posX += (mouseX - posX) * speed;
      posY += (mouseY - posY) * speed;
      cursor.style.transform = `translate(${posX - 20}px, ${posY - 20}px)`;
      requestAnimationFrame(animate);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const el = document.elementFromPoint(mouseX, mouseY) as HTMLElement | null;
      let isPointer = false;

      let current = el;
      while (current && current !== document.body) {
        const style = window.getComputedStyle(current);
        if (
          style.cursor === "pointer" ||
          current.tagName === "BUTTON" ||
          current.tagName === "A" ||
          current.getAttribute("role") === "button"
        ) {
          isPointer = true;
          break;
        }
        current = current.parentElement;
      }

      if (isPointer) {
        cursor.classList.add("bg-(--secondary)/80");
        cursor.style.border = "none";
      } else {
        cursor.classList.remove("bg-(--secondary)/80");
        cursor.style.border = "2px solid var(--text-color)";
      }
    };

    const onMouseLeave = () => {
      cursor.classList.add("bg-(--secondary)/80");
      cursor.style.border = "none";
    };

    const onMouseEnter = () => {
      cursor.classList.remove("bg-(--secondary)/80");
      cursor.style.border = "2px solid var(--text-color)";
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    animate();

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor fixed pointer-events-none flex items-center justify-center rounded-full border border-(--text-color) transition-colors duration-200 z-500 w-8 h-8 componentShadowStrong "
    >
      <div className="w-2 h-2 bg-(--text-color) rounded-full" />
    </div>
  );
}