// src/components/Navbar.jsx
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  
  // 1. Theme State (Defaults to dark mode)
  const [isDarkMode, setIsDarkMode] = useState(true);

  // 2. Apply the 'dark' class to the HTML tag whenever the state changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  // Scroll Spy Logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; 

      navLinks.forEach((link) => {
        const sectionId = link.href.substring(1);
        const section = document.getElementById(sectionId);

        if (section) {
          // Get the top and bottom bounds of the section
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          // Check if we are within this section
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed w-full top-0 z-50 transition-all duration-300 backdrop-blur-md bg-light-bg/80 dark:bg-dark-bg/80 border-b border-light-border dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Brand Name */}
          <div className="flex-shrink-0">
            <a href="#" className="font-mono text-xl font-bold tracking-tighter">
              {/* Added text-light-text and dark:text-dark-text */}
              <span className="text-light-text dark:text-dark-text">&lt;</span>
              <span className="text-brand-green">JS</span>
              <span className="text-light-text dark:text-dark-text"> /&gt;</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navLinks.map((link) => {
                const sectionId = link.href.substring(1);
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`font-sans text-sm font-medium transition-colors duration-200 ${
                      isActive 
                        ? 'text-brand-green' 
                        : 'text-dark-muted hover:text-brand-green'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              
              {/* Theme Toggle Button (Desktop) */}
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="text-dark-muted hover:text-brand-green transition-colors p-2"
                aria-label="Toggle Theme"
              >
                {isDarkMode ? (
                  // Sun Icon
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                ) : (
                  // Moon Icon
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                )}
              </button>

              <a
                href="/Resume.pdf" 
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs font-bold text-brand-green border border-brand-green px-4 py-2 rounded hover:bg-brand-green/10 transition-colors duration-200"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Mobile Actions (Toggle + Hamburger) */}
          <div className="md:hidden flex items-center gap-4">
            {/* Theme Toggle Button (Mobile) */}
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="text-dark-muted hover:text-brand-green transition-colors"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark-muted hover:text-brand-green focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-b transition-colors duration-300 bg-light-bg dark:bg-dark-bg border-light-border dark:border-dark-border">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`block px-3 py-2 font-sans text-base font-medium rounded-md transition-colors duration-200 ${
                    isActive
                      ? 'text-brand-green bg-brand-green/10'
                      : 'text-dark-muted hover:text-brand-green hover:bg-dark-card'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;