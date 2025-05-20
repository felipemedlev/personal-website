import { Briefcase, Lightbulb, GraduationCap, Code, Database, Cloud, Users, Award, Zap, Eye, MessageSquare } from 'lucide-react';

export const resumeData = {
  name: "Felipe Mediavilla Levinson",
  location: "Santiago, Chile",
  email: "frmediavilla@uc.cl",
  phone: "+56 976309980",
  githubUser: "felipemedlev",
  linkedinProfile: "felipe-mediavilla-levinson-95212315b",
  traditionalResumePath: "/Felipe_CV_V2.pdf",
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
        "Teaching Assistant: “Control of Mechanical Systems” (2 semesters).",
        "Led design team for VSolar (EV challenge).",
        "Led the mechanical team for RobotX Competition (autonomous boats)."
      ],
      icon: GraduationCap
    }
  ]
};

// Define types based on the resumeData structure for better type safety
export type ProfessionalExperienceItem = typeof resumeData.professionalExperience[0];
export type IndependentProjectItem = typeof resumeData.independentProjects[0];
export type EducationItem = typeof resumeData.education[0];
export type TechnicalSkillItem = typeof resumeData.technicalSkills[0];