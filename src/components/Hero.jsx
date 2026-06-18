// src/components/Hero.jsx
const Hero = () => {
  const techStack = ['ReactJS', 'Python', 'Kotlin', 'C#'];

  return (
    <section id="about" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          
          <p className="font-mono text-brand-green text-sm mb-4 tracking-wide">
            &gt; Hi, my name is
          </p>

          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-2 text-light-text dark:text-dark-text transition-colors">
            Jennelle Salva.
          </h1>
          
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-6 text-light-muted dark:text-dark-muted transition-colors">
            I build scalable software and interactive applications.
          </h2>

          <p className="font-sans text-base sm:text-lg leading-relaxed mb-8 max-w-2xl text-light-muted dark:text-dark-muted transition-colors">
            I'm a Full-Stack Developer specializing in building robust web applications, mobile platforms, and AI-driven software. I focus on creating scalable architectures and intuitive user interfaces that solve real-world problems.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            {techStack.map((tech) => (
              <span 
                key={tech} 
                className="font-mono text-xs md:text-sm text-brand-green bg-brand-green/10 px-3 py-1.5 rounded-md border border-brand-green/20"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects" 
              className="inline-flex justify-center items-center px-6 py-3 text-sm bg-brand-green font-sans font-semibold rounded hover:bg-brand-green-hover transition-colors duration-200 text-light-bg dark:text-dark-bg"
            >
              View My Work
            </a>
            <a 
              href="https://github.com/sajinobu" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex justify-center items-center px-6 py-3 text-sm bg-transparent font-sans font-semibold rounded border transition-all duration-200 text-light-text dark:text-dark-text border-light-border dark:border-dark-border hover:border-brand-green dark:hover:border-brand-green hover:text-brand-green dark:hover:text-brand-green"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
      <div className="absolute top-1/4 right-0 -z-10 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl translate-x-1/3"></div>
    </section>
  );
};

export default Hero;