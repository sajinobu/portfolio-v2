// src/components/Projects.jsx
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'NeuraSense',
      role: 'Full-Stack Developer & AI Engineer',
      description: 'A real-time traffic monitoring system engineered to analyze vehicle flow. Improved automated traffic data extraction accuracy using advanced object detection models.',
      techStack: ['ReactJS', 'Python', 'YOLOv8', 'OpenCV'],
      links: [
        { label: 'Live Demo', url: 'https://neurasense-web.vercel.app/dashboard' }
      ]
    },
    {
      id: 2,
      title: 'Clocket',
      role: 'Full Stack Developer',
      description: 'A real-time attendance portal built to modernize workforce monitoring. Streamlined employee time-tracking workflows through secure database integration and a responsive UI.',
      techStack: ['ReactJS', 'Firebase', 'Figma'],
      links: [
        { label: 'Admin Demo (PDF)', url: '/Clocket Admin.pdf' },
        { label: 'Employee Demo (PDF)', url: '/Clocket Employee.pdf' }
      ]
    },
    {
      id: 3,
      title: 'AbangPH',
      role: 'Full-Stack Developer',
      award: '🏆 2nd Place, Best Thesis',
      description: 'A real-time e-jeepney tracking application built to assist commuter navigation. Integrated live location updates and dynamic route displays to map vehicle movements, providing users with accurate transit data.',
      techStack: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Google Maps API'],
      links: [
        { label: 'Video Demo', url: 'https://youtu.be/aQnoV9TrqbM?si=6crQcw4f791iITBt' }
      ]
    },
    {
      id: 4,
      title: 'MetroRun',
      role: 'Game Developer & Team Leader',
      description: 'A stylized 3D endless runner game set in Metro Manila. Engineered custom game mechanics, responsive lane-switching logic.',
      techStack: ['Unity', 'C#', '3D Modeling'],
      links: [
      ]
    },
    {
      id: 5,
      title: 'Concor',
      role: 'Frontend Developer & Team Leader',
      description: 'A responsive, frontend-only e-commerce web application. Designed and engineered the user interface with a focus on modern layouts, seamless product browsing, and an intuitive cart experience.',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      links: [
      ]
    },
    {
      id: 6,
      title: 'RFID Attendance System',
      role: 'Hardware/Software Engineer',
      description: 'An automated attendance tracking system engineered using RFID technology. Bridged hardware and software by syncing physical card scans with a robust backend database to log real-time entry and exit data.',
      techStack: ['Arduino', 'MySQL', 'C++'],
      links: [
        { label: 'Video Demo', url: 'https://youtu.be/x6kIVUEeyDc?si=NGomdqSAOwAXs454' }
      ]
    },
    {
      id: 7,
      title: 'F1 Telemetry Dashboard',
      role: 'Frontend Developer',
      award: '🚧 In Development',
      description: 'A data visualization platform designed to display live race analytics. Currently mapping out API endpoints to ingest and render real-time driver telemetry, lap times, and track positioning data.',
      techStack: ['ReactJS', 'OpenF1 API', 'Data Visualization'],
      links: [
      ]
    }
  ];

return (
    <section id="projects" className="py-20 lg:py-32 border-t border-light-border dark:border-dark-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-light-text dark:text-dark-text transition-colors">
            Featured Projects.
          </h2>
          <div className="flex-grow h-px bg-light-border dark:bg-dark-border transition-colors"></div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="rounded-lg p-6 flex flex-col h-full transition-colors duration-300 border border-light-border dark:border-dark-border bg-light-card dark:bg-dark-card hover:border-brand-green/50 dark:hover:border-brand-green/50"
            >
              <div className="mb-4">
                <h3 className="font-display text-2xl font-bold text-light-text dark:text-dark-text transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="font-mono text-sm text-brand-green">{project.role}</p>
                {project.award && (
                  <p className="font-sans text-xs text-yellow-600 dark:text-yellow-400 font-medium mt-2 transition-colors">{project.award}</p>
                )}
              </div>

              {/* Description */}
              <p className="font-sans text-light-muted dark:text-dark-muted text-sm leading-relaxed mb-6 transition-colors">
                {project.description}
              </p>

              {/* Tech Stack (Directly below description) */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.techStack.map((tech) => (
                  <span 
                    key={tech} 
                    className="font-mono text-xs px-2 py-1 rounded transition-colors text-light-muted dark:text-dark-muted bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons (mt-auto pushes them to the bottom, justify-end aligns them right) */}
              {project.links && project.links.length > 0 && (
                <div className="mt-auto flex flex-wrap gap-3 justify-end">
                  {project.links.map((link, idx) => (
                    <a 
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      // Upgraded Button Classes Here
                      className="text-xs font-mono font-medium px-4 py-1.5 rounded border transition-all duration-300 border-brand-green/50 text-brand-green hover:bg-brand-green hover:text-dark-bg dark:hover:text-dark-bg shadow-sm"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Projects;