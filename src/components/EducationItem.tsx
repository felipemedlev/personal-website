import React from 'react';
import { ChevronRight } from 'lucide-react';
import { EducationItem as EducationItemType } from '../data/resumeData'; // Renamed to avoid conflict

interface EducationItemProps extends Omit<EducationItemType, 'icon'> {
  icon: React.ElementType;
}

const EducationItem: React.FC<EducationItemProps> = ({ degree, university, dates, details, icon: Icon }) => (
  <div className="bg-gray-800 p-6 rounded-xl shadow-2xl hover:shadow-sky-500/30 transition-all duration-300 transform hover:-translate-y-1">
    <div className="flex items-center mb-4">
      <Icon className="h-8 w-8 text-sky-400 mr-4" />
      <div>
        <h3 className="text-xl font-semibold text-white">{degree}</h3>
        <p className="text-md text-sky-500">{university}</p>
        <p className="text-xs text-gray-500 mt-0.5">{dates}</p>
      </div>
    </div>
    <ul className="space-y-1.5">
      {details.map((item, idx) => (
        <li key={idx} className="text-gray-400 text-sm flex items-start">
          <ChevronRight className="h-4 w-4 text-sky-600 mr-1.5 flex-shrink-0 mt-0.5" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default EducationItem;