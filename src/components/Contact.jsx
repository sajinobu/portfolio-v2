// src/components/Contact.jsx
const Contact = () => {
  return (
    <section id="contact" className="pt-24 pb-8 lg:pt-32 lg:pb-10 border-t border-light-border dark:border-dark-border transition-colors duration-300">
      <div className="max-w-2xl mx-auto px-6 text-center">
        
        {/* Subtitle */}
        <p className="font-mono text-brand-green text-sm mb-4 tracking-wide">
          &gt; What's Next?
        </p>

        {/* Main Heading */}
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-light-text dark:text-dark-text transition-colors">
          Get In Touch
        </h2>

        {/* Message */}
        <p className="font-sans text-base md:text-lg mb-10 leading-relaxed text-light-muted dark:text-dark-muted transition-colors">
          I am currently seeking a full-time software engineering role where I can build scalable, user-centric applications. Whether you have an open position or just want to connect, my inbox is always open.
        </p>
        
        {/* Email Button */}
        <a 
          href="mailto:jennellesalva1215@gmail.com" 
          className="inline-flex justify-center items-center px-8 py-4 bg-transparent font-mono font-medium rounded border transition-colors duration-300 text-brand-green border-brand-green hover:bg-brand-green/10"
        >
          Say Hello
        </a>
      </div>

      {/* Footer Area */}
      <div className="mt-16 pt-8 border-t text-center flex flex-col items-center transition-colors border-light-border dark:border-dark-border">
        
        {/* Social Links */}
        <div className="flex gap-6 mb-6">
          <a 
            href="https://github.com/sajinobu" 
            target="_blank" 
            rel="noreferrer"
            className="transition-colors text-light-muted dark:text-dark-muted hover:text-brand-green"
            aria-label="GitHub Profile"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
            </svg>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/jennelle-salva/" 
            target="_blank" 
            rel="noreferrer"
            className="transition-colors text-light-muted dark:text-dark-muted hover:text-brand-green"
            aria-label="LinkedIn Profile"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
        
        {/* Formal Copyright */}
        <p className="font-mono text-xs transition-colors text-light-muted dark:text-dark-muted">
          &copy; {new Date().getFullYear()} Jennelle Salva. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;