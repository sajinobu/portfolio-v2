// src/components/Experience.jsx
const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Software Engineer Intern',
      company: 'AppCase Inc.',
      duration: 'March 2026 – May 2026',
      description: [
        <>
          Developed the "NeuraSense" real-time traffic monitoring system to analyze vehicle flow, improving automated traffic data extraction accuracy utilizing <strong className="text-light-text dark:text-dark-text font-medium">Python</strong> and the <strong className="text-light-text dark:text-dark-text font-medium">YOLOv8</strong> object detection model.
        </>,
        <>
          Engineered "Clocket," a real-time attendance portal to modernize workforce monitoring, streamlining employee time-tracking workflows using <strong className="text-light-text dark:text-dark-text font-medium">ReactJS</strong> and <strong className="text-light-text dark:text-dark-text font-medium">Firebase</strong>.
        </>,
        <>
          Executed production-grade QA testing across mobile and web platforms to identify software defects, tracking issues and ensuring system stability.
        </>,
        <>
          Designed high-fidelity mockups and responsive UI components to guide development phases using <strong className="text-light-text dark:text-dark-text font-medium">Figma</strong>.
        </>
      ],
      techStack: ['ReactJS', 'Python', 'YOLOv8', 'Firebase', 'Figma']
    }
  ];

  return (
    <section id="experience" className="py-20 lg:py-32 border-t border-light-border dark:border-dark-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-light-text dark:text-dark-text transition-colors">
              Experience.
            </h2>
            <div className="flex-grow h-px bg-light-border dark:bg-dark-border max-w-xs transition-colors"></div>
          </div>

          {/* Timeline Container */}
          <div className="space-y-12">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative pl-8">
                
                {/* Timeline Line & Dot */}
                <div className="absolute left-0 top-2 bottom-0 w-px bg-light-border dark:bg-dark-border transition-colors"></div>
                <div className="absolute left-[-4px] top-2 h-2.5 w-2.5 rounded-full bg-brand-green outline outline-4 outline-light-bg dark:outline-dark-bg transition-colors"></div>

                {/* Content Side */}
                <div className="relative">
                  <span className="font-mono text-sm text-brand-green block mb-2">
                    {exp.duration}
                  </span>
                  
                  <h3 className="font-display text-xl md:text-2xl font-bold mb-4 text-light-text dark:text-dark-text transition-colors">
                    {exp.role} at <span className="text-brand-green">{exp.company}</span>
                  </h3>
                  
                  <ul className="space-y-3">
                    {exp.description.map((item, index) => (
                      <li key={index} className="font-sans text-sm md:text-base leading-relaxed flex items-start text-light-muted dark:text-dark-muted transition-colors">
                        <span className="text-brand-green flex-shrink-0 mr-2 mt-1">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {exp.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className="font-mono text-xs px-2 py-1 rounded transition-colors text-light-text dark:text-dark-text bg-light-border/50 dark:bg-dark-border/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;