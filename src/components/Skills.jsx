// src/components/Skills.jsx
const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages & Databases',
      icon: (
        <svg className="w-6 h-6 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      skills: ['JavaScript', 'Python', 'Java', 'Kotlin', 'C#', 'PHP', 'PostgreSQL', 'MySQL']
    },
    {
      title: 'Frameworks & Libraries',
      icon: (
        <svg className="w-6 h-6 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      skills: ['ReactJS', 'Jetpack Compose', 'Flutter', '.NET', 'YOLOv8', 'REST APIs']
    },
    {
      title: 'Architecture & Tools',
      icon: (
        <svg className="w-6 h-6 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      skills: ['Firebase', 'Supabase', 'Git/GitHub', 'Agile/Scrum', 'Figma', 'Unity']
    }
  ];

  return (
    <section id="skills" className="py-20 lg:py-32 border-t border-light-border dark:border-dark-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-light-text dark:text-dark-text transition-colors">
            Technical Skills.
          </h2>
          <div className="flex-grow h-px bg-light-border dark:bg-dark-border transition-colors"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="rounded-lg p-8 transition-colors duration-300 border border-light-border dark:border-dark-border bg-light-card dark:bg-dark-card hover:border-brand-green/50 dark:hover:border-brand-green/50"
            >
              {/* Flex container to align Icon and Title horizontally */}
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h3 className="font-display text-xl font-bold text-light-text dark:text-dark-text transition-colors">
                  {category.title}
                </h3>
              </div>
              
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center text-light-muted dark:text-dark-muted font-mono text-sm transition-colors">
                    <span className="text-brand-green mr-3">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;