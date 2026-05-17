import React, { useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const s = document.createElement('style');
    s.textContent = `@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.35;transform:scale(.7)}}`;
    document.head.appendChild(s);
    return () => s.remove();
  }, []);

  return (
    <div>
      <Nav />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Footer />
    </div>
  );
}
