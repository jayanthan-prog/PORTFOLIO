import React from 'react';
import { LucideIcon } from 'lucide-react';

interface EducationCardProps {
  type: string;
  institution: string;
  department?: string;
  gpa?: string;
  year?: string;
  percentage?: string;
  icon: LucideIcon;
}

export function EducationCard({
  type,
  institution,
  department,
  gpa,
  year,
  percentage,
  icon: Icon
}: EducationCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105">
      <div className="flex items-center space-x-4 mb-4">
        <div className="bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-lg">
          <Icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{type}</h3>
      </div>
      <div className="space-y-2">
        <p className="text-gray-700 dark:text-gray-200">{institution}</p>
        {department && <p className="text-gray-600 dark:text-gray-300">{department}</p>}
        {gpa && <p className="text-gray-600 dark:text-gray-300">GPA: {gpa}</p>}
        {year && <p className="text-gray-600 dark:text-gray-300">Year: {year}</p>}
        {percentage && <p className="text-gray-600 dark:text-gray-300">Percentage: {percentage}</p>}
      </div>
    </div>
  );
}