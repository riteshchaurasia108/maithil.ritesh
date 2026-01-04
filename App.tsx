
import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  ChevronRight, 
  ExternalLink,
  Code,
  Database,
  BarChart3,
  TrendingUp,
  User,
  GraduationCap,
  Briefcase,
  Layers,
  CheckCircle2,
  Clock,
  ArrowRight
} from 'lucide-react';
import { Experience, Education, LearningPathItem } from './types';

// Components defined outside main App
const Nav: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 glass shadow-md border-b' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-200">
            R
          </div>
          <span className="font-bold text-xl tracking-tight hidden sm:block">Ritesh Kumar</span>
        </div>
        <div className="flex gap-6 text-sm font-medium">
          <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
          <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
          <a href="#roadmap" className="hover:text-blue-600 transition-colors">Roadmap</a>
          <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-200">Get in touch</a>
        </div>
      </div>
    </nav>
  );
};

const SectionHeading: React.FC<{ title: string; subtitle: string; icon: React.ReactNode }> = ({ title, subtitle, icon }) => (
  <div className="mb-12">
    <div className="flex items-center gap-3 text-blue-600 mb-2">
      {icon}
      <span className="text-sm font-bold uppercase tracking-widest">{subtitle}</span>
    </div>
    <h2 className="text-4xl font-extrabold text-slate-900">{title}</h2>
  </div>
);

const App: React.FC = () => {
  const experiences: Experience[] = [
    {
      role: "Growth Retention-Intern",
      company: "Foundit (Monster.com)",
      location: "Bengaluru, India",
      period: "Jan 2024 - Present",
      description: [
        "Proficient in conducting A/B testing and analyzing campaign results to optimize user retention.",
        "Managed email, WhatsApp, Mailmod, and push notifications for high-impact engagement.",
        "Utilized Power BI, Excel, Clevertap, Mailmod, and webhooks for data-driven cross-channel campaigns.",
        "Implemented live behavior campaigns targeting users based on real-time interactions.",
        "Expertise in creating webhook links for seamless integration between Clevertap and Mailmod.",
        "Optimized Mailmod campaigns for direct submissions, reducing friction in user journeys."
      ]
    },
    {
      role: "Associate Property Advisory",
      company: "Pin Click Property Management",
      location: "Bengaluru, India",
      period: "Nov 2023 - Jan 2024",
      description: [
        "Client Relationship Management: Skilled in building and maintaining relationships with clients.",
        "Tailored advisory services to achieve client investment objectives and real estate goals.",
        "Excellent communication skills, articulating complex concepts effectively to diverse stakeholders."
      ]
    }
  ];

  const educations: Education[] = [
    {
      degree: "Bachelor of Technology (B.Tech.)",
      institution: "Maharishi Markandeshwar Deemed to be University",
      period: "April 2020 - April 2024",
      location: "Ambala, Haryana"
    },
    {
      degree: "12th Standard | Science | CBSE",
      institution: "Saraswati Vidya Mandir",
      period: "2017 - 2019",
      location: "Sitamarhi, Bihar"
    },
    {
      degree: "10th Standard | CBSE",
      institution: "Vidya Bharati Public School",
      period: "2016 - 2017",
      location: "Sitamarhi, Bihar"
    }
  ];

  const roadmap: LearningPathItem[] = [
    { name: "SQL Mastery", status: 'completed' },
    { name: "Python Programming", status: 'completed' },
    { name: "Apache Spark / PySpark", status: 'in-progress' },
    { name: "ETL Pipelines & Workflow Management", status: 'pending' },
    { name: "Cloud Computing (AWS/Azure/GCP)", status: 'pending' },
    { name: "Data Warehousing (Snowflake/Redshift)", status: 'pending' }
  ];

  const tools = ["Clevertap", "Mailmod", "Webhooks", "MS Office", "Power BI", "MS Excel", "SQL", "Python"];
  const marketingSkills = ["Campaign Management", "Data Analysis", "A/B Testing", "KPI Management", "Retention Strategy"];

  return (
    <div className="min-h-screen">
      <Nav />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              AVAILABLE FOR NEW OPPORTUNITIES
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-6">
              Driving Growth through <span className="text-blue-600">Data & Innovation</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              Passionate digital marketer and aspiring data engineer. Specialized in customer retention and performance optimization at Foundit (formerly Monster.com).
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#roadmap" className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center gap-2 group shadow-xl">
                My Learning Path <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex gap-2">
                <a href="https://www.linkedin.com/in/riteshchaurasia01/" target="_blank" className="p-4 rounded-xl border-2 border-slate-200 hover:border-blue-500 hover:text-blue-600 transition-all">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:riteshchaurasia108@gmail.com" className="p-4 rounded-xl border-2 border-slate-200 hover:border-blue-500 hover:text-blue-600 transition-all">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>
            <div className="relative glass p-8 rounded-3xl shadow-2xl border border-white/40 floating">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                    <User className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-slate-900">Ritesh Kumar Chaurasia</h3>
                    <p className="text-slate-500 text-sm">Growth & Data Enthusiast</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <p className="text-xs text-slate-400 font-medium mb-1 uppercase tracking-wider">Location</p>
                    <p className="font-semibold text-slate-700">New Delhi, India</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <p className="text-xs text-slate-400 font-medium mb-1 uppercase tracking-wider">Degree</p>
                    <p className="font-semibold text-slate-700">B.Tech (2024)</p>
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-200">
                  <p className="text-xs text-blue-100 font-medium mb-2 uppercase tracking-wider">Current Focus</p>
                  <p className="font-bold flex items-center gap-2">
                    <Database className="w-4 h-4" /> Data Engineering Path
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Who I Am" subtitle="Overview" icon={<User className="w-5 h-5" />} />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                I am a dedicated professional with a background in <span className="font-bold text-slate-900">Digital Marketing</span> and <span className="font-bold text-slate-900">Retention Strategy</span>. My journey has been defined by a deep-seated interest in how data can be leveraged to drive business growth and enhance user engagement.
              </p>
              <p>
                During my internship at <span className="text-blue-600 font-semibold">Foundit (Monster.com)</span>, I have honed my skills in A/B testing, cross-channel communication, and lifecycle marketing. I am now pivoting my technical expertise from Marketing Operations towards <span className="font-bold text-slate-900">Data Engineering</span>, combining my business acumen with robust technical foundations in SQL and Python.
              </p>
              <div className="flex items-center gap-4 py-4 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  <span className="text-sm font-semibold">DOB: 3rd July 2002</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  <span className="text-sm font-semibold">New Delhi, India</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-8 rounded-3xl bg-white shadow-lg border border-slate-100 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Growth</h4>
                <p className="text-sm text-slate-500">Optimizing funnels and user retention cycles.</p>
              </div>
              <div className="p-8 rounded-3xl bg-white shadow-lg border border-slate-100 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-4 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Analytics</h4>
                <p className="text-sm text-slate-500">Power BI and Excel for data visualization.</p>
              </div>
              <div className="p-8 rounded-3xl bg-white shadow-lg border border-slate-100 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-4 group-hover:scale-110 transition-transform">
                  <Code className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Python</h4>
                <p className="text-sm text-slate-500">Developing scripts for data manipulation.</p>
              </div>
              <div className="p-8 rounded-3xl bg-white shadow-lg border border-slate-100 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 mb-4 group-hover:scale-110 transition-transform">
                  <Database className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">SQL</h4>
                <p className="text-sm text-slate-500">Designing complex queries for data retrieval.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Work History" subtitle="Experience" icon={<Briefcase className="w-5 h-5 text-blue-400" />} />
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-8 border-l-2 border-slate-700 group">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 group-hover:scale-125 transition-transform"></div>
                <div className="dark-glass p-8 rounded-3xl transition-all hover:bg-slate-800/50">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                      <p className="text-blue-400 font-semibold">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-slate-400 text-sm justify-end">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 text-sm mt-1 justify-end">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-3 text-slate-300">
                        <ChevronRight className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Academic Journey" subtitle="Education" icon={<GraduationCap className="w-5 h-5" />} />
          <div className="grid md:grid-cols-3 gap-8">
            {educations.map((edu, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">{edu.period}</span>
                <h4 className="text-xl font-bold text-slate-900 mb-2 leading-snug">{edu.degree}</h4>
                <p className="text-slate-600 mb-1">{edu.institution}</p>
                {edu.location && <p className="text-slate-400 text-sm">{edu.location}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Expertise & Tools" subtitle="Skills" icon={<Layers className="w-5 h-5" />} />
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <Code className="w-6 h-6 text-blue-600" /> Technical Tools
              </h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, idx) => (
                  <span key={idx} className="px-5 py-3 rounded-2xl bg-white border border-slate-200 shadow-sm font-semibold text-slate-700 hover:border-blue-500 hover:text-blue-600 cursor-default transition-all">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-indigo-600" /> Professional Skills
              </h3>
              <div className="space-y-4">
                {marketingSkills.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    <span className="font-semibold text-slate-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Engineering Roadmap Section */}
      <section id="roadmap" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px] -z-10"></div>
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Data Engineering Evolution" subtitle="Roadmap" icon={<Database className="w-5 h-5" />} />
          <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl shadow-blue-100 border border-blue-50/50">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/3">
                <div className="p-8 bg-blue-600 rounded-3xl text-white shadow-xl">
                  <h3 className="text-2xl font-bold mb-4">Strategic Pivot</h3>
                  <p className="opacity-90 leading-relaxed mb-6">
                    Leveraging my background in growth marketing to become a data-first engineer. Currently focusing on building scalable data architectures.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm font-bold">
                      <div className="w-8 h-8 rounded-full bg-blue-500/50 flex items-center justify-center border border-white/20">1</div>
                      <span>Foundation Phase (Complete)</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm font-bold">
                      <div className="w-8 h-8 rounded-full bg-blue-500/50 flex items-center justify-center border border-white/20">2</div>
                      <span>Processing Phase (In-Progress)</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm font-bold">
                      <div className="w-8 h-8 rounded-full bg-blue-500/50 flex items-center justify-center border border-white/20">3</div>
                      <span>Cloud Phase (Upcoming)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-2/3 w-full">
                <div className="grid gap-4">
                  {roadmap.map((item, idx) => (
                    <div key={idx} className={`p-5 rounded-2xl border flex items-center justify-between transition-all ${
                      item.status === 'completed' ? 'bg-emerald-50 border-emerald-100' : 
                      item.status === 'in-progress' ? 'bg-blue-50 border-blue-100 animate-pulse' : 
                      'bg-slate-50 border-slate-100'
                    }`}>
                      <div className="flex items-center gap-4">
                        {item.status === 'completed' ? <CheckCircle2 className="text-emerald-500" /> : 
                         item.status === 'in-progress' ? <Clock className="text-blue-500" /> : 
                         <ChevronRight className="text-slate-300" />}
                        <span className={`font-bold ${
                          item.status === 'completed' ? 'text-emerald-700' : 
                          item.status === 'in-progress' ? 'text-blue-700' : 
                          'text-slate-500'
                        }`}>{item.name}</span>
                      </div>
                      <span className={`text-[10px] font-black uppercase tracking-tighter px-2 py-1 rounded-md ${
                        item.status === 'completed' ? 'bg-emerald-500 text-white' : 
                        item.status === 'in-progress' ? 'bg-blue-500 text-white' : 
                        'bg-slate-200 text-slate-500'
                      }`}>
                        {item.status.replace('-', ' ')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Let's build the future of <span className="text-blue-400">data together.</span></h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
            I'm always looking for interesting projects and opportunities in growth strategy or data engineering. Feel free to reach out!
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <a href="mailto:riteshchaurasia108@gmail.com" className="p-8 rounded-[32px] bg-slate-800 border border-slate-700 hover:bg-slate-700 transition-all flex flex-col items-center gap-4 group">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center group-hover:bg-blue-500 transition-all">
                <Mail className="w-8 h-8 text-blue-400 group-hover:text-white" />
              </div>
              <div className="text-center">
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">Email Me</p>
                <p className="font-bold text-lg">riteshchaurasia108@gmail.com</p>
              </div>
            </a>
            <a href="tel:7479422733" className="p-8 rounded-[32px] bg-slate-800 border border-slate-700 hover:bg-slate-700 transition-all flex flex-col items-center gap-4 group">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center group-hover:bg-blue-500 transition-all">
                <Phone className="w-8 h-8 text-blue-400 group-hover:text-white" />
              </div>
              <div className="text-center">
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">Call Me</p>
                <p className="font-bold text-lg">+91 7479422733</p>
              </div>
            </a>
          </div>

          <div className="flex justify-center gap-4">
            <a href="https://www.linkedin.com/in/riteshchaurasia01/" target="_blank" className="flex items-center gap-2 bg-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20">
              <Linkedin className="w-5 h-5" /> LinkedIn Profile <ExternalLink className="w-4 h-4 opacity-50" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold">R</div>
            <span className="text-slate-400 font-medium">© 2024 Ritesh Kumar Chaurasia. All rights reserved.</span>
          </div>
          <div className="flex gap-8 text-sm font-bold text-slate-500">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
            <a href="#roadmap" className="hover:text-blue-600 transition-colors">Learning Path</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
