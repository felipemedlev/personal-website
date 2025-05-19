"use client";
import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { ProfessionalExperienceItem } from '../data/resumeData';

interface ExperienceItemProps extends Omit<ProfessionalExperienceItem, 'icon'> {
  icon: React.ElementType;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ title, company, location, dates, responsibilities, icon: Icon }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // For compact view, try to find a key achievement or use the first responsibility.
  // A simple heuristic: pick the first item with <strong> or just the first item.
  const firstResponsibility = responsibilities[0] || "";
  const keyAchievement = responsibilities.find(r => r.includes("<strong>")) || firstResponsibility;

  const highlightAchievement = (htmlString: string) => {
    return htmlString.replace(/<strong>(.*?)<\/strong>/g, '<strong class="text-sky-400">$1</strong>');
  };

  return (
    <div className="relative pl-10 py-6 border-l-2 border-sky-700/50 group last:border-transparent">
      <div className="absolute -left-5 top-6 h-10 w-10 bg-gray-900 border-2 border-sky-500 rounded-full flex items-center justify-center shadow-lg group-hover:bg-sky-500 transition-colors duration-300">
        <Icon className="h-5 w-5 text-sky-300 group-hover:text-white transition-colors duration-300" />
      </div>
      <div className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-sky-600/40 transition-shadow duration-300 ml-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-1">{title}</h3>
            <p className="text-lg text-sky-400 font-medium mb-1">{company} <span className="text-gray-500 text-sm">— {location}</span></p>
            <p className="text-sm text-gray-400 mb-3">{dates}</p>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 text-gray-400 hover:text-sky-400 transition-colors duration-200"
            aria-expanded={isExpanded}
            aria-label={isExpanded ? "Collapse section" : "Expand section"}
          >
            <ChevronDown className={`h-6 w-6 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {!isExpanded && (
          <div className="mt-2 text-gray-300 text-sm">
            <p className="flex items-start">
              <ChevronRight className="h-4 w-4 text-sky-500 mr-2 flex-shrink-0 mt-0.5" />
              <span dangerouslySetInnerHTML={{ __html: highlightAchievement(keyAchievement) }} />
            </p>
          </div>
        )}

        {isExpanded && (
          <ul className="space-y-2 mt-4">
            {responsibilities.map((item, idx) => (
              <li key={idx} className="flex items-start text-sm bg-sky-900/20 p-2 rounded-md text-white">
                <ChevronRight className="h-4 w-4 text-sky-500 mr-2 flex-shrink-0 mt-1" />
                <span dangerouslySetInnerHTML={{ __html: item.replace(/<strong>(.*?)<\/strong>/g, '<strong class="font-semibold text-white">$1</strong>') }} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ExperienceItem;