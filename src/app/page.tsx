"use client";
import { useState } from 'react';
import { Mail, Phone, Github, Linkedin, UserCircle, Wrench, Briefcase, Lightbulb, GraduationCap, ArrowDownCircle, FileText, Zap } from 'lucide-react';
import Link from 'next/link';
import { resumeData } from '../data/resumeData';
import Section from '../components/Section';
import SkillCard from '../components/SkillCard';
import ExperienceItem from '../components/ExperienceItem';
import ProjectCard from '../components/ProjectCard';
import EducationItem from '../components/EducationItem';

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredExperience = resumeData.professionalExperience.filter(job => {
    const jobText = `${job.title} ${job.company} ${job.responsibilities.join(' ')}`.toLowerCase();
    const matchesSearchTerm = searchTerm === '' || jobText.includes(searchTerm.toLowerCase());
    return matchesSearchTerm;
  });


  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-[family-name:var(--font-geist-sans)] selection:bg-sky-500 selection:text-white">

      {/* Hero Section  */}
      <header className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-gray-900 via-gray-850 to-gray-900 p-6 relative overflow-hidden">
        <div className="relative z-10 animate-fadeIn">
          <img
            src="/profile.png"
            alt="Profile Picture"
            className="rounded-full border-4 border-sky-500 shadow-2xl hover:shadow-sky-500/50 transition-shadow duration-300 w-40 h-40 mx-auto mb-8 object-cover transform hover:scale-105 transition-transform duration-300"
          />
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-4">
            {resumeData.name}
          </h1>
          <p className="text-2xl sm:text-3xl text-sky-400 font-medium mb-8">
            {resumeData.role}
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
          </p>
          <div className="flex justify-center items-center space-x-6 mb-12">
            <a href={`https://github.com/${resumeData.githubUser}`} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-gray-400 hover:text-sky-400 transition-colors duration-300 transform hover:scale-110">
              <Github className="h-8 w-8" />
            </a>
            <a href={`https://linkedin.com/in/${resumeData.linkedinProfile}`} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-gray-400 hover:text-sky-400 transition-colors duration-300 transform hover:scale-110">
              <Linkedin className="h-8 w-8" />
            </a>
            <a href={`mailto:${resumeData.email}`} aria-label="Email Me" className="text-gray-400 hover:text-sky-400 transition-colors duration-300 transform hover:scale-110">
              <Mail className="h-8 w-8" />
            </a>
            <a href={`tel:${resumeData.phone.replace(/\s/g, '')}`} aria-label="Call Me" className="text-gray-400 hover:text-sky-400 transition-colors duration-300 transform hover:scale-110">
              <Phone className="h-8 w-8" />
            </a>
            <a href={resumeData.traditionalResumePath} target="_blank" rel="noopener noreferrer" aria-label="View Resume PDF" className="text-gray-400 hover:text-sky-400 transition-colors duration-300 transform hover:scale-110">
              <FileText className="h-8 w-8" />
            </a>
          </div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            Welcome to my personal space. I craft data-driven solutions and build engaging digital experiences.
          </p>
          <a href="#about" className="group inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 transition-colors duration-300 transform hover:scale-105">
            Discover More
            <ArrowDownCircle className="ml-3 h-5 w-5 group-hover:animate-bounceOnce" />
          </a>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </header>

      {/* About Section */}
      <Section id="about" title="About Me" icon={UserCircle} className="bg-gray-900">
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto text-center">
          {resumeData.professionalSummary}
        </p>
      </Section>

      {/* Technical Skills Section */}
      <Section id="skills" title="Technical Arsenal" icon={Wrench} className="bg-gray-850">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeData.technicalSkills.map((skillSet) => (
            <SkillCard key={skillSet.category} category={skillSet.category} skills={skillSet.skills} icon={skillSet.icon || Zap} />
          ))}
        </div>
      </Section>

      {/* Professional Experience Section */}
      <Section id="experience" title="Career Journey" icon={Briefcase} className="bg-gray-900 relative overflow-hidden animated-gradient-journey">
        <div className="max-w-3xl mx-auto relative z-10"> {/* Added relative z-10 here */}
          {/* Filter Controls */}
          <div className="mb-10 p-6 bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-lg"> {/* Added transparency and blur to filter box */}
            <h4 className="text-xl font-semibold text-white mb-4">Filter Experiences</h4>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search by keyword (e.g., 'automation', 'finance')"
                className="w-full p-3 bg-gray-700 text-gray-200 rounded-md border border-gray-600 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            {/* Skill filter buttons removed */}
          </div>

          {filteredExperience.length > 0 ? (
            filteredExperience.map((job, index) => (
              <ExperienceItem key={index} {...job} icon={job.icon || Briefcase} />
            ))
          ) : (
            <p className="text-center text-gray-400 py-8">No experiences match your current filters.</p>
          )}
        </div>
      </Section>

      {/* Selected Projects Section */}
      <Section id="projects" title="Independent Projects" icon={Lightbulb} className="bg-gray-850">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {resumeData.independentProjects.map((project, index) => (
            <ProjectCard key={index} {...project} icon={project.icon || Lightbulb} />
          ))}
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education" title="Academic Foundations" icon={GraduationCap} className="bg-gray-900">
         <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-2xl mx-auto"> {/* Changed to md:grid-cols-1 for better centering of single item */}
          {resumeData.education.map((edu, index) => (
            <EducationItem key={index} {...edu} icon={edu.icon || GraduationCap} />
          ))}
        </div>
      </Section>

      {/* Resume PDF Section */}
      <Section id="resume-pdf" title="Curriculum Vitae" icon={FileText} className="bg-gray-850">
        <div className="mx-auto max-w-4xl mb-10 text-center">
          <p className="text-lg text-gray-300 mb-8">
            You can view my detailed CV below, or download it directly.
          </p>
        </div>
        <div className="bg-gray-800 p-2 md:p-4 rounded-lg shadow-2xl max-w-4xl mx-auto mb-12">
          <iframe
            src="/Felipe_CV_V2.pdf"
            title="Felipe Mediavilla Levinson CV"
            className="w-full h-[70vh] md:h-[85vh] rounded border border-gray-700"
            allowFullScreen
          />
        </div>
        <div className="text-center">
          <a
            href="/Felipe_CV_V2.pdf"
            download="Felipe_Mediavilla_Levinson_CV.pdf"
            className="group inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-semibold rounded-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-300 transform hover:scale-105 shadow-lg"
          >
            <ArrowDownCircle className="mr-3 h-6 w-6 group-hover:animate-bounceOnce" />
            Download CV (PDF)
          </a>
        </div>
      </Section>

      {/* Contact / Footer */}
      <footer className="bg-gray-950 py-16 text-center">
        <div className="container mx-auto px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-white mb-6">Let's Connect</h3>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Interested in collaborating or have a question? Feel free to reach out.
          </p>
          <div className="flex justify-center items-center space-x-6 mb-10">
            <a href={`https://github.com/${resumeData.githubUser}`} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-gray-400 hover:text-sky-400 transition-colors duration-300 transform hover:scale-110">
              <Github className="h-7 w-7" /> <span className="sr-only">GitHub</span>
            </a>
            <a href={`https://linkedin.com/in/${resumeData.linkedinProfile}`} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-gray-400 hover:text-sky-400 transition-colors duration-300 transform hover:scale-110">
              <Linkedin className="h-7 w-7" /> <span className="sr-only">LinkedIn</span>
            </a>
            <a href={`mailto:${resumeData.email}`} aria-label="Email Me" className="text-gray-400 hover:text-sky-400 transition-colors duration-300 transform hover:scale-110">
              <Mail className="h-7 w-7" /> <span className="sr-only">Email</span>
            </a>
            <a href={`tel:${resumeData.phone.replace(/\s/g, '')}`} aria-label="Call Me" className="text-gray-400 hover:text-sky-400 transition-colors duration-300 transform hover:scale-110">
              <Phone className="h-7 w-7" /> <span className="sr-only">Phone</span>
            </a>
          </div>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {resumeData.name}. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 mt-2">
            Crafted with <Link href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">Next.js</Link> & <Link href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">Tailwind CSS</Link>.
          </p>
           <p className="text-xs text-gray-600 mt-1">
            <a href="/Felipe_CV_V2.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">View CV (PDF)</a>
          </p>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        @keyframes bounceOnce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); } /* Adjusted bounce height */
        }
        .group-hover\\:animate-bounceOnce .ml-3 { /* Specific targeting */
            animation: bounceOnce 0.6s ease-in-out;
        }

        /* Custom scrollbar (optional, WebKit browsers) */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #111827; /* bg-gray-900 */
        }
        ::-webkit-scrollbar-thumb {
          background: #0ea5e9; /* sky-500 */
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #0284c7; /* sky-600 */
        }

        /* Smooth scrolling for anchor links */
        html {
          scroll-behavior: smooth;
        }

        /* Define custom background shades if not in Tailwind default, or for consistency */
        .bg-gray-850 { background-color: #1f2937; } /* Tailwind's gray-800 is #1f2937, this is for clarity or if a custom shade was intended */
        .bg-gray-950 { background-color: #030712; } /* Tailwind's gray-900 is #111827, gray-950 is a darker shade */

        /* Example for a subtle grid background, ensure grid.svg is in public folder */
        .bg-\\[url\\(\\'\\/grid\\.svg\\'\\)\\] {
          background-image: url('/grid.svg'); /* Ensure this path is correct */
          background-repeat: repeat;
        }

        /* Animated Gradient for Career Journey */
        .animated-gradient-journey {
          background-size: 200% 200%;
          background-image: linear-gradient(
            -45deg,
            #111827, /* bg-gray-900 */
            #1f2937, /* bg-gray-850 */
            #030712, /* bg-gray-950 */
            #1f2937 /* bg-gray-850 */
          );
          animation: gradientAnimation 10s ease infinite; /* Refined speed */
        }

        @keyframes gradientAnimation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        /* Ensure content in animated section is above pseudo-elements if any are added later */
        .animated-gradient-journey > * {
            position: relative;
            z-index: 1; /* Ensures content is above the gradient */
        }
        }
        
        /* Ensure content in animated section is above pseudo-elements if any are added later */
        .animated-gradient-journey > * {
            position: relative;
            z-index: 1; /* Ensures content is above the gradient */
        }

        /* Enhanced social icon hover effect */
        .flex.justify-center.items-center.space-x-6.mb-12 a:hover {
            text-shadow: 0 0 8px rgba(59, 130, 246, 0.6); /* Subtle blue glow */
        }
      `}</style>
    </div>
  );
}
