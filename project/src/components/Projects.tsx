import React from 'react';

const projects = [
  {
    title: 'COE Invigilation Portal',
    description: 'Built using React.js and MongoDB, streamlining the examination process.',
    tech: ['React', 'MongoDB', 'Node.js']
  },
  {
    title: 'Food Cart Development',
    description: 'E-commerce platform developed using Sequelize ORM.',
    tech: ['Sequelize', 'Node.js', 'Express']
  },
  {
    title: 'Django Local Server Deployment',
    description: 'Web application successfully deployed on local server.',
    tech: ['Django', 'Python', 'PostgreSQL']
  },
  {
    title: 'Karma Calculator',
    description: 'Collaborative project for calculating karma metrics.',
    tech: ['JavaScript', 'HTML', 'CSS']
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 animate-fade-in">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}