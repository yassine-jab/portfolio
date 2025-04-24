import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Mail, 
  Phone, 
  User, 
  Briefcase, 
  GraduationCap, 
  Languages, 
  Code, 
  Award, 
  Lightbulb, 
  Heart, 
  FileText,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 300;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });

      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">YB</div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['home', 'about', 'experience', 'education', 'skills', 'projects', 'certifications'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  activeSection === section ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg absolute w-full">
            <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
              {['home', 'about', 'experience', 'education', 'skills', 'projects', 'certifications'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium py-2 transition-colors hover:text-blue-600 ${
                    activeSection === section ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 pt-20">
        <div className="container mx-auto px-4 md:px-6 py-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center">
                  <User size={100} className="text-white" />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                <Code size={32} className="text-blue-600" />
              </div>
            </div>
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">YASSINE BAHAJ</h1>
            <h2 className="text-xl md:text-2xl font-medium mb-6 text-blue-600">Computer and Network Engineer</h2>
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mb-8">
              <a href="mailto:Yassinbahaj@outlook.com" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
                <Mail size={18} />
                <span>Yassinbahaj@outlook.com</span>
              </a>
              <a href="tel:0602-877594" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
                <Phone size={18} />
                <span>0602-877594</span>
              </a>
              <a href="https://github.com/yassine-jab" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
                <Github size={18} />
                <span>github.com/yassine-jab</span>
              </a>
            </div>
            <button 
              onClick={() => scrollToSection('about')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition-colors flex items-center gap-2 mx-auto md:mx-0"
            >
              Learn More
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold mb-2">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 rounded"></div>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-6">
              I am a Computer and Network Engineer with expertise in data engineering, business intelligence, and software development. 
              My experience spans across various projects in the banking sector, focusing on data optimization, analysis, and visualization.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              I am passionate about leveraging technology to solve complex business problems and create efficient data solutions.
              With a strong foundation in programming, data processing, and cloud technologies, I continuously seek to expand my knowledge and skills.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="bg-blue-50 rounded-lg p-4 flex items-center gap-3 w-full md:w-auto">
                <Languages size={24} className="text-blue-600" />
                <div>
                  <h3 className="font-medium">Languages</h3>
                  <p className="text-sm text-gray-600">Arabic, French, English</p>
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 flex items-center gap-3 w-full md:w-auto">
                <Heart size={24} className="text-blue-600" />
                <div>
                  <h3 className="font-medium">Interests</h3>
                  <p className="text-sm text-gray-600">Traveling, New Technologies</p>
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 flex items-center gap-3 w-full md:w-auto">
                <Lightbulb size={24} className="text-blue-600" />
                <div>
                  <h3 className="font-medium">Personal Skills</h3>
                  <p className="text-sm text-gray-600">Teamwork, Adaptability, Initiative</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Professional Experience</h2>
            <div className="w-20 h-1 bg-blue-600 rounded"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200"></div>
              
              {/* Experience 1 */}
              <div className="relative mb-16">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 md:text-right">
                    <h3 className="text-xl font-bold text-blue-600">Mercure IT</h3>
                    <p className="text-sm text-gray-500 mb-2">03/25 - 07/25</p>
                    <h4 className="text-lg font-semibold mb-2">BI Project - COREP Solvency Ratio Analysis for Banking Sector</h4>
                    <ul className="text-gray-700 list-disc list-inside md:list-outside">
                      <li>Collected and transformed data from various sources</li>
                      <li>Conducted statistical analysis to extract key performance indicators</li>
                      <li>Designed dynamic reports to support strategic decisions</li>
                    </ul>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                    <Briefcase size={20} className="text-white" />
                  </div>
                  <div className="md:w-1/2 md:pl-12"></div>
                </div>
              </div>
              
              {/* Experience 2 */}
              <div className="relative mb-16">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12"></div>
                  <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                    <Briefcase size={20} className="text-white" />
                  </div>
                  <div className="md:w-1/2 mb-8 md:mb-0 md:pl-12">
                    <h3 className="text-xl font-bold text-blue-600">Mercure IT</h3>
                    <p className="text-sm text-gray-500 mb-2">07/24 - 10/24</p>
                    <h4 className="text-lg font-semibold mb-2">BI Project - Data Optimization via a Data Platform</h4>
                    <ul className="text-gray-700 list-disc list-inside">
                      <li>Developed a data platform based on a data warehouse</li>
                      <li>Automated data ingestion and processing using Spring Batch</li>
                      <li>Created data analysis visualizations with Superset</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Experience 3 */}
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 md:text-right">
                    <h3 className="text-xl font-bold text-blue-600">Mercure IT</h3>
                    <p className="text-sm text-gray-500 mb-2">06/23 - 10/23</p>
                    <h4 className="text-lg font-semibold mb-2">BI Project - Client Call Management</h4>
                    <ul className="text-gray-700 list-disc list-inside md:list-outside">
                      <li>Collected and cleaned data from multiple sources</li>
                      <li>Performed calculations and data analysis</li>
                      <li>Loaded data into a data warehouse and created detailed reports to support decision-making</li>
                    </ul>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                    <Briefcase size={20} className="text-white" />
                  </div>
                  <div className="md:w-1/2 md:pl-12"></div>
                </div>
              </div>
              
              {/* Experience 4 */}
              <div className="relative mt-16">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12"></div>
                  <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                    <Briefcase size={20} className="text-white" />
                  </div>
                  <div className="md:w-1/2 mb-8 md:mb-0 md:pl-12">
                    <h3 className="text-xl font-bold text-blue-600">Mercure IT</h3>
                    <p className="text-sm text-gray-500 mb-2">06/23 - 10/23</p>
                    <h4 className="text-lg font-semibold mb-2">BI Project - Customer Complaint Management</h4>
                    <ul className="text-gray-700 list-disc list-inside">
                      <li>Data collection and integration</li>
                      <li>Analysis and processing of information</li>
                      <li>Report creation to aid decision-making</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Education</h2>
            <div className="w-20 h-1 bg-blue-600 rounded"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <GraduationCap size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">École Marocaine des Sciences de l'Ingénieur</h3>
                    <p className="text-sm text-gray-500">2020 - 2025</p>
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-2">Engineering Degree in Computer Science and Networks</h4>
                <p className="text-gray-700">
                  Comprehensive education in computer science, networking, and data engineering with a focus on practical applications.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <GraduationCap size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Othmane Bnou affane High School</h3>
                    <p className="text-sm text-gray-500">2019 - 2020</p>
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-2">Baccalaureate in Physical Sciences</h4>
                <p className="text-gray-700">
                  Strong foundation in mathematics, physics, and scientific methodology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Technical Skills</h2>
            <div className="w-20 h-1 bg-blue-600 rounded"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Programming & Scripting</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Python</span>
                      <span>90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Java</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Scala</span>
                      <span>75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">PL/SQL</span>
                      <span>80%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Data Processing</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Spark</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Talend</span>
                      <span>90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Apache Hop</span>
                      <span>75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Spring Batch</span>
                      <span>80%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Databases & Big Data</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">HBase</span>
                      <span>75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">MongoDB</span>
                      <span>80%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">SQLite</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Hadoop/HDFS</span>
                      <span>75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-blue-600">BI Tools & Cloud</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Power BI</span>
                      <span>90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Apache Superset</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Qlik</span>
                      <span>75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Azure</span>
                      <span>80%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Academic Projects</h2>
            <div className="w-20 h-1 bg-blue-600 rounded"></div>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center">
                  <FileText size={64} className="text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Data Engineering Project</h3>
                  <p className="text-gray-700 mb-4">
                    Implemented a data processing pipeline using Spark, Jupyter, and Qlik for analytics and visualization.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Spark</span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Jupyter</span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Qlik</span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Data Analysis</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gradient-to-r from-indigo-400 to-purple-500 flex items-center justify-center">
                  <FileText size={64} className="text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">E-learning Platform</h3>
                  <p className="text-gray-700 mb-4">
                    Developed a web-based e-learning platform with course management, user authentication, and progress tracking.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Django</span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">SQLite</span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Bootstrap</span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Web Development</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center">
                  <FileText size={64} className="text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Flight & Apartment Booking System</h3>
                  <p className="text-gray-700 mb-4">
                    Created a full-stack booking application with search functionality, user accounts, and payment integration.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Spring Boot</span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Angular</span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">RESTful API</span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Full Stack</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gradient-to-r from-pink-400 to-red-500 flex items-center justify-center">
                  <FileText size={64} className="text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Movie App</h3>
                  <p className="text-gray-700 mb-4">
                    Built a mobile-responsive movie application with features for browsing, searching, and reviewing films.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Spring Boot</span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Angular</span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Responsive Design</span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Mobile First</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Certifications</h2>
            <div className="w-20 h-1 bg-blue-600 rounded"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex">
                <div className="mr-4">
                  <Award size={32} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">IBM</h3>
                  <p className="text-gray-700">Python for Data Science, AI & Development</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex">
                <div className="mr-4">
                  <Award size={32} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">IBM</h3>
                  <p className="text-gray-700">Containers with Docker, Kubernetes & OpenShift</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex">
                <div className="mr-4">
                  <Award size={32} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Whizlabs</h3>
                  <p className="text-gray-700">Virtual Networks in Azure</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex">
                <div className="mr-4">
                  <Award size={32} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Talend</h3>
                  <p className="text-gray-700">Talend Data Integration Certification</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">YASSINE BAHAJ</h2>
              <p className="text-gray-400">Computer and Network Engineer</p>
            </div>
            <div className="flex space-x-6">
              <a href="mailto:Yassinbahaj@outlook.com" className="hover:text-blue-400 transition-colors">
                <Mail size={24} />
              </a>
              <a href="tel:0602-877594" className="hover:text-blue-400 transition-colors">
                <Phone size={24} />
              </a>
              <a href="https://github.com/yassine-jab" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Github size={24} />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Yassine Bahaj. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;