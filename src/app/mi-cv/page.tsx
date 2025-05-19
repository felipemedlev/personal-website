"use client";
import { MapPin, Mail, Phone, Github, Linkedin, UserCircle, Wrench, Briefcase, Lightbulb, GraduationCap, ChevronRight, ExternalLink, FileText } from 'lucide-react';

const resumeData = {
  name: "Felipe Mediavilla Levinson",
  location: "Santiago, Chile",
  email: "frmediavilla@uc.cl",
  phone: "+56 976309980",
  githubUser: "felipemedlev",
  linkedinProfile: "felipe-mediavilla-levinson-95212315b",
  role: "Data Analyst | Automation Engineer | Full-Stack Developer",
  professionalSummary: "Data Analyst and Automation Engineer with a strong foundation in finance, software development, and data science. Skilled in building ML forecasts, automating processes, and developing full-stack web applications using Django, Next.js, and GCP. Proven track record in deploying data-driven systems that reduce manual workload, improve financial visibility, and enable strategic decision-making. Passionate about solving real-world business problems through elegant, scalable and insightful analytics.",
  technicalSkills: [
    { category: "Programming Languages & Tools", skills: "Python, SQL, Git, REST APIs, Bash, Excel, PowerApps, Tableau, Looker Studio" },
    { category: "Frameworks & Libraries", skills: "Django, React (Native & Web), Next.js, Pandas, Scikit-learn, NumPy" },
    { category: "Data Science & Engineering", skills: "ML Forecasting, Anomaly Detection, XBRL Parsing, ETL Pipelines, Recommender Systems" },
    { category: "Cloud & DevOps", skills: "Google Cloud Platform (GCP), SharePoint, PostgreSQL, SAP Integration" },
    { category: "Languages", skills: "Spanish (Native), English (C1), Hebrew & Portuguese (Basic)" }
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
      ]
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
      ]
    },
    {
      title: "Industrial Consultant",
      company: "TICGAS",
      location: "Remote",
      dates: "Jul 2021",
      responsibilities: [
        "Built an in-house product costing system and developed a linear optimization model, boosting revenue by 20% without increasing operational inputs.",
        "Proposed and mapped out new factory layout using lean manufacturing principles."
      ]
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
      ]
    },
    {
      name: "Project Management Intern",
      company: "SQM",
      location: "Antofagasta, Chile",
      dates: "Dec 2019 – Mar 2020",
      responsibilities: [
        "Created standardized project management protocols to track and reduce cost overruns.",
        "Researched and proposed a solution to minimize evaporation in mining ponds, later implemented in operations."
      ]
    }
  ],
  selectedProjects: [
    {
      name: "Sille.cl | Full-Stack Developer & Product Designer (Solo Startup Project)",
      year: "2024",
      description: [
        "Designed and built a personalized e-commerce platform for niche perfumery using <strong>React (Expo)</strong> and <strong>Django</strong>.",
        "Integrated a <strong>machine learning recommender system</strong> to suggest products based on user profiles.",
        "Architected backend API, data models, and user onboarding flow; frontend hosted for demo access.",
        "Applied data-driven UX principles to improve potential user satisfaction and conversion."
      ],
      githubLink: "https://sille.cl"
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
      ]
    }
  ]
};

const SectionTitle: React.FC<{ children: React.ReactNode; icon?: React.ElementType }> = ({ children, icon: Icon }) => (
  <h2 className="text-2xl font-bold text-gray-700 mb-6 mt-8 border-b-2 border-gray-200 pb-2 flex items-center">
    {Icon && <Icon className="mr-3 h-6 w-6 text-indigo-600" />}
    {children}
  </h2>
);

const ListItem: React.FC<{ text: string }> = ({ text }) => (
  <li className="text-gray-600 mb-1.5 flex items-start">
    <ChevronRight className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" />
    <span dangerouslySetInnerHTML={{ __html: text }} />
  </li>
);


export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-[family-name:var(--font-geist-sans)] py-10 px-4 sm:px-6 lg:px-8">
      <div id="resume-content" className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-8 sm:p-12">

        <div className="print-hide mb-8 text-right">
          <button
            onClick={handlePrint}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
          >
            <FileText className="h-5 w-5 mr-2" />
            Download PDF
          </button>
        </div>

        <header className="text-center mb-10">
          <h1 className="text-5xl font-bold text-gray-800 mb-2">{resumeData.name}</h1>
          <p className="text-xl text-indigo-600 font-medium mb-4">{resumeData.role}</p>
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm text-gray-500">
            <span className="flex items-center"><MapPin className="h-4 w-4 mr-1.5 text-gray-400"/>{resumeData.location}</span>
            <a href={`mailto:${resumeData.email}`} className="flex items-center hover:text-indigo-600 transition-colors">
              <Mail className="h-4 w-4 mr-1.5 text-gray-400"/>{resumeData.email}
            </a>
            <a href={`tel:${resumeData.phone.replace(/\s/g, '')}`} className="flex items-center hover:text-indigo-600 transition-colors">
              <Phone className="h-4 w-4 mr-1.5 text-gray-400"/>{resumeData.phone}
            </a>
            <a href={`https://github.com/${resumeData.githubUser}`} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-indigo-600 transition-colors">
              <Github className="h-4 w-4 mr-1.5 text-gray-400"/>GitHub: {resumeData.githubUser}
            </a>
            <a href={`https://linkedin.com/in/${resumeData.linkedinProfile}`} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-indigo-600 transition-colors">
              <Linkedin className="h-4 w-4 mr-1.5 text-gray-400"/>LinkedIn
            </a>
          </div>
        </header>

        <section>
          <SectionTitle icon={UserCircle}>Professional Summary</SectionTitle>
          <p className="text-gray-700 leading-relaxed">{resumeData.professionalSummary}</p>
        </section>

        <section>
          <SectionTitle icon={Wrench}>Technical Skills</SectionTitle>
          <div className="space-y-3">
            {resumeData.technicalSkills.map((skillSet) => (
              <div key={skillSet.category}>
                <h3 className="text-md font-semibold text-gray-700">{skillSet.category}:</h3>
                <p className="text-gray-600 text-sm">{skillSet.skills}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle icon={Briefcase}>Professional Experience</SectionTitle>
          {resumeData.professionalExperience.map((job, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
              <p className="text-md text-indigo-500 font-medium">{job.company} — {job.location}</p>
              <p className="text-sm text-gray-500 mb-2">{job.dates}</p>
              <ul className="space-y-1">
                {job.responsibilities.map((item, idx) => (
                  <ListItem key={idx} text={item} />
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section>
          <SectionTitle icon={Lightbulb}>Selected Projects</SectionTitle>
          {resumeData.selectedProjects.map((project, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800">{project.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{project.year}</p>
              <ul className="space-y-1">
                {project.description.map((item, idx) => (
                  <ListItem key={idx} text={item} />
                ))}
              </ul>
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-indigo-600 hover:underline mt-1 inline-flex items-center"
                >
                  View on GitHub <ExternalLink className="h-3.5 w-3.5 ml-1" />
                </a>
              )}
            </div>
          ))}
        </section>

        <section>
          <SectionTitle icon={GraduationCap}>Education</SectionTitle>
          {resumeData.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800">{edu.degree}</h3>
              <p className="text-md text-indigo-500 font-medium">{edu.university}</p>
              <p className="text-sm text-gray-500 mb-2">{edu.dates}</p>
              <ul className="space-y-1">
                {edu.details.map((item, idx) => (
                  <ListItem key={idx} text={item} />
                ))}
              </ul>
            </div>
          ))}
        </section>

        <footer className="text-center mt-12 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-400">
            Resume built with Next.js and Tailwind CSS.
          </p>
        </footer>

      </div>
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #resume-content, #resume-content * {
            visibility: visible;
          }
          #resume-content {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            margin: 0;
            padding: 0;
            border: none;
            box-shadow: none;
          }
          .print-hide {
            display: none !important;
          }
           /* Ensure backgrounds are printed if browser settings allow */
          html {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      `}</style>
    </div>
  );
}
