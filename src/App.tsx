
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Добавляем необходимые страницы для нашего проекта
import { useState, useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
  // Добавляем состояние для отслеживания загрузки шрифтов
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Эффект для загрузки шрифтов при монтировании компонента
  useEffect(() => {
    // Загружаем шрифт Playfair Display для заголовков
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap';
    document.head.appendChild(link);
    
    // Отмечаем, что шрифты загружены
    const timeout = setTimeout(() => setFontsLoaded(true), 300);
    
    // Очистка при размонтировании
    return () => {
      clearTimeout(timeout);
      document.head.removeChild(link);
    };
  }, []);

  // Показываем загрузчик, пока шрифты загружаются
  if (!fontsLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-50 to-white">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-purple-800">Загрузка Learning Buddy...</p>
        </div>
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* Здесь будут добавлены маршруты к другим страницам */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
