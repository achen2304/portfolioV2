import { useEffect, useState } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  const [theme, setTheme] = useState(() => {
    // Get theme from localStorage or default to 'dark'
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    return savedTheme;
  });

  useEffect(() => {
    // Set initial theme
    document.documentElement.setAttribute('data-theme', theme);

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
  }, []);

  return (
    <div className="min-h-screen bg-base-100 text-primary relative">
      {/* Grid overlay that spans the entire viewport */}
      <div
        className={`fixed inset-0 ${
          theme === 'dark' ? 'bg-grid-pattern-dark' : 'bg-grid-pattern-light'
        } bg-grid opacity-20`}
        style={{ backgroundPosition: 'center' }}
      />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main className="container mx-auto px-4 md:px-8">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
