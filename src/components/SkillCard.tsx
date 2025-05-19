import React from 'react';
import { TechnicalSkillItem } from '../data/resumeData'; // Assuming types are exported from resumeData.ts

interface SkillCardProps extends Omit<TechnicalSkillItem, 'icon'> {
  icon: React.ElementType; // Ensure icon is React.ElementType
}

const SkillCard: React.FC<SkillCardProps> = ({ category, skills, icon: Icon }) => (
  <div className="bg-gray-800 p-6 rounded-xl shadow-2xl hover:shadow-sky-500/30 transition-all duration-300 transform hover:-translate-y-1">
    <div className="flex items-center mb-4">
      <Icon className="h-8 w-8 text-sky-400 mr-4" />
      <h3 className="text-xl font-semibold text-white">{category}</h3>
    </div>
    <p className="text-gray-400 text-sm leading-relaxed">{skills}</p>
  </div>
);

export default SkillCard;