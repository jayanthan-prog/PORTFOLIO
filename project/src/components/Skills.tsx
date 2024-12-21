import React from 'react';
import { Code, Server, Shield, Cloud, Database, Terminal } from 'lucide-react';

const skills = [
  { name: 'Full Stack Development', icon: Code },
  { name: 'WordPress Development', icon: Server },
  { name: 'Networking', icon: Terminal },
  { name: 'Cybersecurity', icon: Shield },
  { name: 'AWS & DevOps', icon: Cloud },
  { name: 'Databases', icon: Database },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 animate-fade-in">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div 
                key={index} 
                className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-lg">
                    <Icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}