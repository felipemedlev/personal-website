"use client";
import { Mail, Phone, Github, Linkedin, UserCircle, Wrench, Briefcase, Lightbulb, GraduationCap, ChevronRight, ExternalLink, Code, Database, Cloud, Users, Award, Zap, Eye, MessageSquare, ArrowDownCircle, FileText } from 'lucide-react';
import Link from 'next/link';

// Data from mi-cv/page.tsx - adapted for this page
const resumeData = {
  name: "Felipe Mediavilla Levinson",
  location: "Santiago, Chile",
  email: "frmediavilla@uc.cl",
  phone: "+56 976309980",
  githubUser: "felipemedlev",
  linkedinProfile: "felipe-mediavilla-levinson-95212315b",
  traditionalResumePath: "/mi-cv",
  role: "Data Analyst | Automation Engineer | Full-Stack Developer",
  professionalSummary: "Data Analyst and Automation Engineer with a strong foundation in finance, software development, and data science. Skilled in building ML forecasts, automating processes, and developing full-stack web applications using Django, Next.js, and GCP. Proven track record in deploying data-driven systems that reduce manual workload, improve financial visibility, and enable strategic decision-making. Passionate about solving real-world business problems through elegant, scalable and insightful analytics.",
  technicalSkills: [
    { category: "Programming Languages & Tools", skills: "Python, SQL, Git, REST APIs, Bash, Excel, PowerApps, Tableau, Looker Studio", icon: Code },
    { category: "Frameworks & Libraries", skills: "Django, React (Native & Web), Next.js, Pandas, Scikit-learn, NumPy", icon: Zap },
    { category: "Data Science & Engineering", skills: "ML Forecasting, Anomaly Detection, XBRL Parsing, ETL Pipelines, Recommender Systems", icon: Database },
    { category: "Cloud & DevOps", skills: "Google Cloud Platform (GCP), SharePoint, PostgreSQL, SAP Integration", icon: Cloud },
    { category: "Languages", skills: "Spanish (Native), English (C1), Hebrew & Portuguese (Basic)", icon: MessageSquare }
  ],
  professionalExperience: [
    {
      title: "Senior Data Analyst | Automation Engineer",
      company: "Falabella S.A.",
      location: "Santiago, Chile",
      dates: "Aug 2022 – Present",
      responsibilities: [
        "Reduced <strong>150+ analyst-hours weekly</strong> by automating manual tasks using Python and SQL.",
        "Built <strong>ML models for financial forecasting</strong> and cost pass-through analysis.",
        "Created a full-stack <strong>Rebate Management App</strong> using <strong>Next.js + Django</strong>, reducing approval cycle time by ~40% and reducing costly errors.",
        "Developed <strong>anomaly detection</strong> scripts for early flagging of cost center deviations, reducing financial reporting errors.",
        "Automated SAP client creation by converting SharePoint data into XML inputs readable by SAP.",
        "Built <strong>KPI dashboards</strong> in Tableau and Looker Studio, consumed by 50+ stakeholders.",
        "Parsed and structured XBRL financial data to enhance regulatory reporting automation.",
        "Deployed internal tools on <strong>GCP</strong>, ensuring fast, secure access across distributed teams."
      ],
      icon: Briefcase
    },
    {
      title: "Financial Planning Analyst",
      company: "Softys S.A.",
      location: "Santiago, Chile",
      dates: "Aug 2021 – Aug 2022",
      responsibilities: [
        "Led monthly financial closings and variance analysis for executive-level presentations.",
        "Built an internal document portal with email alerts, improving compliance by 35%.",
        "Collaborated with subsidiary CFOs to identify and explain deviations, leading to quicker corrective actions.",
        "Contributed to the development and consolidation of annual budgets for subsidiaries and the overall company, ensuring alignment with strategic objectives."
      ],
      icon: Award // Using Award as an alternative icon
    },
    {
      title: "Industrial Consultant",
      company: "TICGAS",
      location: "Remote",
      dates: "Jul 2021",
      responsibilities: [
        "Built an in-house product costing system and developed a linear optimization model, boosting revenue by 20% without increasing operational inputs.",
        "Proposed and mapped out new factory layout using lean manufacturing principles."
      ],
      icon: Zap // Using Zap for optimization/consulting
    },
    {
      name: "Underwater Robotics Interface Developer (Intern)",
      company: "CoMPAS Lab",
      location: "Santiago, Chile",
      dates: "Apr 2021 – Sep 2021",
      responsibilities: [
        "Designed hardware components and developed navigation control algorithms.",
        "Built a Python GUI to visualize real-time sensor data and send commands to the robots.",
        "Supported team’s participation in national robotics demonstrations."
      ],
      icon: Eye
    },
    {
      name: "Project Management Intern",
      company: "SQM",
      location: "Antofagasta, Chile",
      dates: "Dec 2019 – Mar 2020",
      responsibilities: [
        "Created standardized project management protocols to track and reduce cost overruns.",
        "Researched and proposed a solution to minimize evaporation in mining ponds, later implemented in operations."
      ],
      icon: Users
    }
  ],
  independentProjects: [
    {
      name: "Sille | Full-Stack Developer & Product Designer (Solo Startup Project)",
      year: "2024",
      description: [
        "Designed and built a personalized e-commerce platform for niche perfumery using <strong>React (Expo)</strong> and <strong>Django</strong>.",
        "Integrated a <strong>machine learning recommender system</strong> to suggest products based on user profiles.",
        "Architected backend API, data models, and user onboarding flow; frontend hosted for demo access.",
      ],
      githubLink: "https://sille.cl",
      linkText: "Visit Website",
      icon: Lightbulb
    },
    {
      name: "Ariesanalytics.ai | Frontend Developer",
      year: "2025",
      description: [
        "Designed and built a website for an AI consulting startup using <strong>Next.js</strong>.",
      ],
      githubLink: "https://github.com/felipemedlev/ariesdata",
      icon: Lightbulb
    },

  ],
  education: [
    {
      degree: "Civil Industrial Engineer (with Distinction)",
      university: "Pontificia Universidad Católica de Chile",
      dates: "2015 – 2021",
      details: [
        "Diploma in Mechanical Engineering.",
        "Research in fire simulations using Python + CFD.",
        "Teaching Assistant: “Control of Mechanical Systems” (2 semesters)."
      ],
      icon: GraduationCap
    }
  ]
};

const Section: React.FC<{ id: string; title: string; icon?: React.ElementType; children: React.ReactNode; className?: string }> = ({ id, title, icon: Icon, children, className = "" }) => (
  <section id={id} className={`py-16 md:py-24 ${className}`}>
    <div className="container mx-auto px-6 lg:px-8">
      <div className="mb-12 text-center">
        {Icon && <Icon className="mx-auto h-12 w-12 text-sky-400 mb-4" />}
        <h2 className="text-4xl md:text-5xl font-bold text-white">{title}</h2>
        <div className="mt-4 h-1 w-24 bg-sky-400 mx-auto rounded"></div>
      </div>
      {children}
    </div>
  </section>
);

const SkillCard: React.FC<{ category: string; skills: string; icon: React.ElementType }> = ({ category, skills, icon: Icon }) => (
  <div className="bg-gray-800 p-6 rounded-xl shadow-2xl hover:shadow-sky-500/30 transition-all duration-300 transform hover:-translate-y-1">
    <div className="flex items-center mb-4">
      <Icon className="h-8 w-8 text-sky-400 mr-4" />
      <h3 className="text-xl font-semibold text-white">{category}</h3>
    </div>
    <p className="text-gray-400 text-sm leading-relaxed">{skills}</p>
  </div>
);

const ExperienceItem: React.FC<typeof resumeData.professionalExperience[0] & {icon: React.ElementType}> = ({ title, company, location, dates, responsibilities, icon: Icon }) => (
  <div className="relative pl-10 py-6 border-l-2 border-sky-700/50 group last:border-transparent"> {/* Added last:border-transparent */}
    <div className="absolute -left-5 top-6 h-10 w-10 bg-gray-900 border-2 border-sky-500 rounded-full flex items-center justify-center shadow-lg group-hover:bg-sky-500 transition-colors duration-300">
      <Icon className="h-5 w-5 text-sky-300 group-hover:text-white transition-colors duration-300" />
    </div>
    <div className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-sky-600/40 transition-shadow duration-300 ml-4">
      <h3 className="text-2xl font-semibold text-white mb-1">{title}</h3>
      <p className="text-lg text-sky-400 font-medium mb-1">{company} <span className="text-gray-500 text-sm">— {location}</span></p>
      <p className="text-sm text-gray-400 mb-3">{dates}</p>
      <ul className="space-y-2">
        {responsibilities.map((item, idx) => (
          <li key={idx} className="text-gray-300 flex items-start text-sm">
            <ChevronRight className="h-4 w-4 text-sky-500 mr-2 flex-shrink-0 mt-0.5" />
            <span dangerouslySetInnerHTML={{ __html: item }} />
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const ProjectCard: React.FC<typeof resumeData.independentProjects[0]> = ({ name, year, description, githubLink, linkText, icon: Icon }) => (
  <div className="bg-gray-800 p-6 rounded-xl shadow-2xl hover:shadow-sky-500/30 transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full">
    <div className="flex items-center mb-4">
      <Icon className="h-8 w-8 text-sky-400 mr-4" />
      <h3 className="text-xl font-semibold text-white">{name}</h3>
    </div>
    {/* 'company', 'location', and 'dates' are not properties of independentProjects items */}
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


const EducationItem: React.FC<typeof resumeData.education[0] & {icon: React.ElementType}> = ({ degree, university, dates, details, icon: Icon }) => (
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


export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-[family-name:var(--font-geist-sans)] selection:bg-sky-500 selection:text-white">

      {/* Hero Section */}
      <header className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-gray-900 via-gray-850 to-gray-900 p-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('/grid.svg')]"> {/* Example subtle background pattern */}
        </div>
        <div className="relative z-10 animate-fadeIn">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-4">
            {resumeData.name}
          </h1>
          <p className="text-2xl sm:text-3xl text-sky-400 font-medium mb-8">
            {resumeData.role}
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
            <Link href={resumeData.traditionalResumePath} aria-label="View Traditional Resume" className="text-gray-400 hover:text-sky-400 transition-colors duration-300 transform hover:scale-110">
              <FileText className="h-8 w-8" />
            </Link>
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
      <Section id="experience" title="Career Journey" icon={Briefcase} className="bg-gray-900">
        <div className="max-w-3xl mx-auto">
          {resumeData.professionalExperience.map((job, index) => (
            <ExperienceItem key={index} {...job} icon={job.icon || Briefcase} />
          ))}
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
            <Link href="/mi-cv" className="hover:text-sky-400">View Traditional Resume</Link>
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
      `}</style>
    </div>
  );
}
