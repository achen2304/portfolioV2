import { useEffect, useState } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { ProjectsPage } from './pages/ProjectsPage';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set initial theme
    document.documentElement.setAttribute('data-theme', theme);
    setIsLoaded(true);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          const newTheme = document.documentElement.getAttribute('data-theme');
          setTheme(newTheme);
          localStorage.setItem('theme', newTheme);
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => observer.disconnect();
  }, [theme]);

  if (!isLoaded) {
    return null; // or a loading spinner
  }

  return (
    <div className="min-h-screen bg-base-100 text-primary relative">
      {/* Grid overlay that spans the entire viewport */}
      <div
        className={`fixed inset-0 ${
          theme === 'dark' ? 'bg-grid-pattern-dark' : 'bg-grid-pattern-light'
        } bg-grid opacity-70`}
        style={{
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
