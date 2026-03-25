// components/ScrollToHash.tsx

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [location]);

  return null;
}