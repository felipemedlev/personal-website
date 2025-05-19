import React from 'react';
import { ChevronRight, ExternalLink } from 'lucide-react';
import { IndependentProjectItem } from '../data/resumeData';

interface ProjectCardProps extends Omit<IndependentProjectItem, 'icon'> {
  icon: React.ElementType;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, year, description, githubLink, linkText, icon: Icon }) => (
  <div className="bg-gray-800 p-6 rounded-xl shadow-2xl hover:shadow-sky-500/30 transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full">
    <div className="flex items-center mb-4">
      <Icon className="h-8 w-8 text-sky-400 mr-4" />
      <h3 className="text-xl font-semibold text-white">{name}</h3>
    </div>
    <p className="text-xs text-gray-500 mb-3">{year}</p>
    <ul className="space-y-1.5 mb-4 flex-grow">
      {description.map((item, idx) => (
        <li key={idx} className="text-gray-400 text-sm flex items-start">
          <ChevronRight className="h-4 w-4 text-sky-600 mr-1.5 flex-shrink-0 mt-0.5" />
          <span dangerouslySetInnerHTML={{ __html: item }} />
        </li>
      ))}
    </ul>
    {githubLink && (
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center text-sm text-sky-400 hover:text-sky-300 hover:underline transition-colors duration-300 group"
      >
        {linkText || "View on GitHub"} <ExternalLink className="h-4 w-4 ml-1.5 group-hover:translate-x-1 transition-transform duration-300" />
      </a>
    )}
  </div>
);

export default ProjectCard;