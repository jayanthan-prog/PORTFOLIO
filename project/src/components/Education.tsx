import React from 'react';
import { GraduationCap, School } from 'lucide-react';
import { EducationCard } from './ui/EducationCard';

const education = [
  {
    type: 'Bachelor of Engineering',
    institution: 'Bannari Amman Institute Of Technology',
    department: 'Electronic and Instrumentation Engineering',
    gpa: '7.64 (upto second sem)',
    icon: GraduationCap
  },
  {
    type: 'Higher Secondary Certificate (HSC)',
    institution: 'Little Flower Matric Hr Sec School',
    year: '2023',
    percentage: '86%',
    icon: School
  },
  {
    type: 'Secondary School Leaving Certificate (SSLC)',
    institution: 'Little Flower Matric Hr Sec School',
    year: '2021',
    icon: School
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Education</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {education.map((item, index) => (
            <EducationCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}