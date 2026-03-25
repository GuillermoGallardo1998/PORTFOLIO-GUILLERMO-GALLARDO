// App.tsx

import { useState, useEffect } from "react";
import Header from "./components/Header";
import AppRouter from "./router/AppRouter";
import Preloader from "./pages/Preloader";
import CustomCursor from "./components/CustomCursor";
import { Toaster } from "react-hot-toast";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  return (
    <main className="min-h-screen transition-colors relative">
      <CustomCursor />
      {isLoading ? (
        <Preloader onFinish={() => setIsLoading(false)} />
      ) : (
        <>
          <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode}/>
          <AppRouter/>
          <Toaster
            position="bottom-center"
            toastOptions={{
              style: {
                background: isDarkMode ? "#101010" : "#BFC9D1",
                color: isDarkMode ? "#F5F5F5" : "#111827",
                borderRadius: "12px",
                padding: "12px 16px",
                boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)",
                fontWeight: 500,
              },
              success: {
                iconTheme: { primary: "#55835A", secondary: "#F5F5F5" },
              },
              error: {
                iconTheme: { primary: "#8B1A1A", secondary: "#F5F5F5" },
              },
            }}
          />
        </>
      )}
    </main>
  );
}

export default App;