// src/App.jsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="min-h-screen font-sans transition-colors duration-300 bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text selection:bg-brand-green selection:text-light-bg dark:selection:text-dark-bg">
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

export default App;