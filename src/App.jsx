import React, { useState, useEffect, useRef } from 'react';
import {
  Moon,
  Sun,
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Code,
  Database,
  Smartphone,
  Brain,
  TrendingUp,
  MapPin,
  Send,
  Check,
  Award,
  Zap,
  ChevronRight,
  Sparkles,
  Terminal,
  Layers,
  Cpu,
  Cloud,
  GitBranch,
  Palette,
  Shield,
  Globe,
  Server,
  Code2,
  Heart,
  Star,
  Rocket,
  Users,
  Target,
  Timer,
  ArrowRight,
  Twitter,
  FileText,
  Briefcase,
  GraduationCap,
  User,
  Wrench,
  BarChart,
  Smartphone as PhoneIcon,
  Monitor,
  Command,
  Filter,
  Eye
} from 'lucide-react';

// Custom SVG Icons
const CustomIcons = {
  Flutter: () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M14.5 12.5L21 6M3 12.5L14.5 1M21 17.5L14.5 11M14.5 22.5L3 11" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  React: () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <circle cx="12" cy="12" r="2.5" strokeWidth="1.5"/>
      <path d="M12 16.5C14.5 16.5 16.5 14.5 16.5 12C16.5 9.5 14.5 7.5 12 7.5C9.5 7.5 7.5 9.5 7.5 12C7.5 14.5 9.5 16.5 12 16.5Z" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 2.5C16.5 2.5 21 5.5 21 12C21 18.5 16.5 21.5 12 21.5C7.5 21.5 3 18.5 3 12C3 5.5 7.5 2.5 12 2.5Z" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  Node: () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M12 2L3 7L12 12L21 7L12 2Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 17L12 22L21 17" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 12L12 17L21 12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Python: () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M12 2C8.5 2 5 3 5 6.5V9.5C5 13 8.5 14 12 14H19V12" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 22C15.5 22 19 21 19 17.5V14.5C19 11 15.5 10 12 10H5V12" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="8" cy="6.5" r="1.5" fill="currentColor"/>
      <circle cx="16" cy="17.5" r="1.5" fill="currentColor"/>
    </svg>
  ),
  AWS: () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M12 2L2 7L12 12L22 7L12 2Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 17L12 22L22 17" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 12L12 17L22 12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
};

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}>
      {/* Subtle gradient background */}
      <div className={`fixed inset-0 pointer-events-none z-0 ${darkMode ? 
        'bg-gradient-to-br from-gray-900 via-blue-900/10 to-gray-900' : 
        'bg-gradient-to-br from-gray-50 via-blue-50/10 to-gray-50'
      }`}></div>

      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? darkMode 
            ? 'bg-gray-900/95 backdrop-blur-sm border-b border-gray-800' 
            : 'bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm'
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-6">
              <button 
                onClick={() => navigateTo('home')}
                className="flex items-center gap-3 group"
              >
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  darkMode 
                    ? 'bg-gradient-to-br from-blue-600 to-purple-600 group-hover:from-blue-500 group-hover:to-purple-500' 
                    : 'bg-gradient-to-br from-blue-500 to-purple-500 group-hover:from-blue-400 group-hover:to-purple-400'
                }`}>
                  <span className="text-white font-bold text-sm">FF</span>
                </div>
                <div className="flex flex-col">
                  <span className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Fadil Faisal</span>
                  <span className="text-xs opacity-75">Developer</span>
                </div>
              </button>
              
              <div className="hidden md:flex items-center gap-1 ml-8">
                {[
                  { name: 'Home', icon: <User size={16} /> },
                  { name: 'About', icon: <FileText size={16} /> },
                  { name: 'Projects', icon: <Briefcase size={16} /> },
                  { name: 'Skills', icon: <Wrench size={16} /> },
                  { name: 'Contact', icon: <Mail size={16} /> }
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => navigateTo(item.name.toLowerCase())}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      currentPage === item.name.toLowerCase()
                        ? darkMode 
                          ? 'bg-blue-600/20 text-blue-400' 
                          : 'bg-blue-500/10 text-blue-600'
                        : darkMode 
                          ? 'text-gray-400 hover:text-white hover:bg-gray-800/50' 
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    {item.icon}
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 mr-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                   className={`p-2 rounded-lg transition-all duration-200 ${darkMode ? 
                     'hover:bg-gray-800 text-gray-400 hover:text-white' : 
                     'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                   }`}>
                  <Github size={18} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                   className={`p-2 rounded-lg transition-all duration-200 ${darkMode ? 
                     'hover:bg-gray-800 text-gray-400 hover:text-white' : 
                     'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                   }`}>
                  <Linkedin size={18} />
                </a>
              </div>

              <button 
                onClick={() => setDarkMode(!darkMode)} 
                className={`p-2 rounded-lg transition-all duration-200 ${darkMode ? 
                  'hover:bg-gray-800 text-gray-400 hover:text-white' : 
                  'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                }`}
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <div className="md:hidden">
                <button 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                  className={`p-2 rounded-lg transition-all duration-200 ${darkMode ? 
                    'hover:bg-gray-800 text-gray-400 hover:text-white' : 
                    'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className={`md:hidden px-4 pb-4 ${darkMode ? 'bg-gray-900 border-t border-gray-800' : 'bg-white border-t border-gray-200'}`}>
            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => navigateTo(item.toLowerCase())}
                className={`block w-full text-left px-4 py-3 rounded-lg mb-1 font-medium transition-all duration-200 ${
                  currentPage === item.toLowerCase()
                    ? darkMode 
                      ? 'bg-blue-600/20 text-blue-400' 
                      : 'bg-blue-500/10 text-blue-600'
                    : darkMode 
                      ? 'text-gray-400 hover:text-white hover:bg-gray-800/50' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {item}
              </button>
            ))}
            <div className="flex gap-4 pt-4 border-t border-gray-800 dark:border-gray-700">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                 className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${darkMode ? 
                   'hover:bg-gray-800 text-gray-400 hover:text-white' : 
                   'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                 }`}>
                <Github size={16} />
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${darkMode ? 
                   'bg-blue-600 text-white hover:bg-blue-500' : 
                   'bg-blue-500 text-white hover:bg-blue-400'
                 }`}>
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-16">
        {currentPage === 'home' && <HomePage navigateTo={navigateTo} darkMode={darkMode} />}
        {currentPage === 'about' && <AboutPage darkMode={darkMode} />}
        {currentPage === 'projects' && <ProjectsPage darkMode={darkMode} />}
        {currentPage === 'skills' && <SkillsPage darkMode={darkMode} />}
        {currentPage === 'contact' && <ContactPage darkMode={darkMode} />}
      </main>

      <Footer darkMode={darkMode} />
    </div>
  );
}

function HomePage({ navigateTo, darkMode }) {
  const [typedText, setTypedText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const fullText = 'BCA Student | Flutter & Full-Stack Developer';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    
    const cursorTimer = setInterval(() => {
      setCursorVisible(v => !v);
    }, 500);
    
    return () => {
      clearInterval(timer);
      clearInterval(cursorTimer);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Subtle pattern */}
      <div className={`absolute inset-0 opacity-5 ${darkMode ? 
        'bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)] bg-[length:40px_40px]' : 
        'bg-[radial-gradient(circle_at_1px_1px,#000000_1px,transparent_0)] bg-[length:40px_40px]'
      }`}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-3 h-3 rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
              <span className={`text-sm font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                Hello, I'm
              </span>
            </div>
            
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Fadil <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Faisal</span>
            </h1>
            
            <div className={`text-xl md:text-2xl mb-8 h-12 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <span className="font-mono">
                {typedText}
                <span className={`inline-block w-0.5 h-6 align-middle ml-1 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}></span>
              </span>
            </div>
            
            <p className={`text-lg mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Crafting exceptional digital experiences with modern technologies. 
              Passionate about building scalable applications that solve real-world problems.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => navigateTo('projects')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                  darkMode 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500' 
                    : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-400 hover:to-purple-400'
                }`}
              >
                <Briefcase size={18} />
                View Projects
              </button>
              <button 
                onClick={() => navigateTo('contact')}
                className={`px-6 py-3 rounded-lg font-medium border transition-all duration-200 flex items-center gap-2 ${
                  darkMode 
                    ? 'border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-gray-600' 
                    : 'border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400'
                }`}
              >
                <Mail size={18} />
                Get In Touch
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className={`relative rounded-2xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} p-8`}>
              {/* Code editor simulation */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className={`ml-4 text-sm font-mono ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>portfolio.js</span>
                </div>
                <div className="space-y-2 font-mono text-sm">
                  <div className="flex">
                    <span className={`w-8 ${darkMode ? 'text-gray-600' : 'text-gray-400'}`}>1</span>
                    <span className={darkMode ? 'text-purple-400' : 'text-purple-600'}>const</span>
                    <span className={`ml-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>portfolio</span>
                    <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}> = {`{`}</span>
                  </div>
                  <div className="flex">
                    <span className={`w-8 ${darkMode ? 'text-gray-600' : 'text-gray-400'}`}>2</span>
                    <span className={`ml-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>name</span>
                    <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>: </span>
                    <span className={darkMode ? 'text-green-400' : 'text-green-600'}>&apos;Fadil Faisal&apos;</span>
                    <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>,</span>
                  </div>
                  <div className="flex">
                    <span className={`w-8 ${darkMode ? 'text-gray-600' : 'text-gray-400'}`}>3</span>
                    <span className={`ml-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>role</span>
                    <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>: </span>
                    <span className={darkMode ? 'text-green-400' : 'text-green-600'}>&apos;Full-Stack Developer&apos;</span>
                    <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>,</span>
                  </div>
                  <div className="flex">
                    <span className={`w-8 ${darkMode ? 'text-gray-600' : 'text-gray-400'}`}>4</span>
                    <span className={`ml-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>skills</span>
                    <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>: [</span>
                    <span className={darkMode ? 'text-yellow-400' : 'text-yellow-600'}>&apos;React&apos;</span>
                    <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>, </span>
                    <span className={darkMode ? 'text-yellow-400' : 'text-yellow-600'}>&apos;Flutter&apos;</span>
                    <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>, ...]</span>
                  </div>
                  <div className="flex">
                    <span className={`w-8 ${darkMode ? 'text-gray-600' : 'text-gray-400'}`}>5</span>
                    <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{`}`}</span>
                  </div>
                </div>
              </div>
              
              {/* Stats in grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-900' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <div className="text-2xl font-bold text-blue-500 mb-1">10+</div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Projects</div>
                </div>
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-900' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <div className="text-2xl font-bold text-purple-500 mb-1">20+</div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Technologies</div>
                </div>
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-900' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <div className="text-2xl font-bold text-green-500 mb-1">3+</div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Years Experience</div>
                </div>
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-900' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <div className="text-2xl font-bold text-yellow-500 mb-1">100%</div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Passion</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AboutPage({ darkMode }) {
  const [activeSection, setActiveSection] = useState('about');

  const sections = [
    { id: 'about', label: 'About', icon: <User size={18} /> },
    { id: 'education', label: 'Education', icon: <GraduationCap size={18} /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase size={18} /> },
    { id: 'interests', label: 'Interests', icon: <Heart size={18} /> }
  ];

  return (
    <div className="min-h-screen py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            About Me
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Passionate developer focused on creating impactful solutions
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeSection === section.id
                  ? darkMode 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-blue-500 text-white'
                  : darkMode 
                    ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {section.icon}
              {section.label}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          {activeSection === 'about' && (
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className={`rounded-2xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} p-6 mb-8`}>
                  <div className="aspect-square rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-600/10 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className={`text-5xl mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                        <Code2 size={48} />
                      </div>
                      <div className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Developer</div>
                      <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Since 2021</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Building Digital Solutions
                </h3>
                <div className={`space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p>
                    As a third-year BCA student from Kerala, I specialize in creating modern web and mobile applications. 
                    My journey in software development started with curiosity and has evolved into a passion for 
                    building scalable, user-centric solutions.
                  </p>
                  <p>
                    I focus on the entire development lifecycle, from concept to deployment, ensuring clean code, 
                    optimal performance, and excellent user experience.
                  </p>
                  <p>
                    When I'm not coding, I explore financial markets and study how technology can transform 
                    traditional industries.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
                        <Monitor className={darkMode ? 'text-blue-400' : 'text-blue-600'} size={20} />
                      </div>
                      <div className="font-bold">Frontend</div>
                    </div>
                    <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      React, Next.js, Tailwind
                    </div>
                  </div>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg ${darkMode ? 'bg-purple-900/30' : 'bg-purple-100'}`}>
                        <Smartphone className={darkMode ? 'text-purple-400' : 'text-purple-600'} size={20} />
                      </div>
                      <div className="font-bold">Mobile</div>
                    </div>
                    <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Flutter, React Native
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'education' && (
            <div className="space-y-8">
              {[
                {
                  institution: 'University of Kerala',
                  degree: 'Bachelor of Computer Applications',
                  period: '2023 - Present',
                  description: 'Specializing in Software Development and AI',
                  icon: <GraduationCap className={darkMode ? 'text-blue-400' : 'text-blue-600'} size={24} />
                },
                {
                  institution: 'IGPS, Kerala',
                  degree: 'Higher Secondary Education',
                  period: '2021 - 2023',
                  description: 'Computer Science Stream',
                  icon: <FileText className={darkMode ? 'text-purple-400' : 'text-purple-600'} size={24} />
                }
              ].map((edu, index) => (
                <div key={index} className={`relative pl-8 pb-8 ${index !== 1 ? 'border-l' : ''} ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
                  <div className={`absolute -left-3 top-0 w-6 h-6 rounded-full flex items-center justify-center ${darkMode ? 'bg-blue-600' : 'bg-blue-500'}`}>
                    {edu.icon}
                  </div>
                  <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h4 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {edu.degree}
                      </h4>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-700'}`}>
                        {edu.period}
                      </span>
                    </div>
                    <div className={`font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {edu.institution}
                    </div>
                    <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeSection === 'experience' && (
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Freelance Developer',
                  company: 'Self-Employed',
                  period: '2022 - Present',
                  description: 'Building custom web and mobile applications for clients',
                  technologies: ['React', 'Flutter', 'Node.js']
                },
                {
                  title: 'Student Developer',
                  company: 'Personal Projects',
                  period: '2021 - Present',
                  description: 'Developing full-stack applications to solve real problems',
                  technologies: ['Next.js', 'Firebase', 'MongoDB']
                }
              ].map((exp, index) => (
                <div key={index} className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className={`text-xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {exp.title}
                      </h4>
                      <div className={`font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                        {exp.company}
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
                      {exp.period}
                    </span>
                  </div>
                  <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className={`px-3 py-1 rounded-full text-xs font-medium ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeSection === 'interests' && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <TrendingUp size={24} />, title: 'FinTech', description: 'Stock markets & trading algorithms' },
                { icon: <Brain size={24} />, title: 'AI/ML', description: 'Machine learning applications' },
                { icon: <Shield size={24} />, title: 'Cybersecurity', description: 'Ethical hacking & security' },
                { icon: <Globe size={24} />, title: 'Web3', description: 'Blockchain & decentralized apps' },
                { icon: <BarChart size={24} />, title: 'Data Science', description: 'Data analysis & visualization' },
                { icon: <Command size={24} />, title: 'Open Source', description: 'Contributing to community projects' }
              ].map((interest, index) => (
                <div key={index} className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} group hover:scale-[1.02] transition-transform duration-200`}>
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                    darkMode ? 'bg-gray-700 group-hover:bg-gray-600' : 'bg-gray-200 group-hover:bg-gray-300'
                  }`}>
                    <div className={darkMode ? 'text-blue-400' : 'text-blue-600'}>
                      {interest.icon}
                    </div>
                  </div>
                  <h4 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {interest.title}
                  </h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {interest.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectsPage({ darkMode }) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'fullstack', label: 'Full Stack' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Kerala Bike Rental',
      description: 'A comprehensive bike rental platform for tourists in Kerala with real-time booking and payment integration.',
      category: 'mobile',
      technologies: ['Flutter', 'Firebase', 'Google Maps', 'Razorpay'],
      github: 'https://github.com',
      live: 'https://demo.com',
      featured: true
    },
    {
      id: 2,
      title: 'E-Commerce Dashboard',
      description: 'Admin dashboard for e-commerce analytics with real-time sales tracking and inventory management.',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
      github: 'https://github.com',
      live: 'https://demo.com',
      featured: true
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Productivity application with team collaboration features, deadlines, and progress tracking.',
      category: 'fullstack',
      technologies: ['Next.js', 'PostgreSQL', 'Redis', 'Socket.io'],
      github: 'https://github.com',
      live: 'https://demo.com'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Real-time weather application with 7-day forecasts and location-based alerts.',
      category: 'web',
      technologies: ['React', 'OpenWeather API', 'Leaflet', 'Tailwind'],
      github: 'https://github.com',
      live: 'https://demo.com'
    },
    {
      id: 5,
      title: 'Fitness Tracker',
      description: 'Mobile app for workout tracking, progress monitoring, and personalized training plans.',
      category: 'mobile',
      technologies: ['Flutter', 'HealthKit', 'Firebase', 'Stripe'],
      github: 'https://github.com',
      live: null
    },
    {
      id: 6,
      title: 'Blog Platform',
      description: 'Modern blogging platform with markdown support, commenting system, and user profiles.',
      category: 'fullstack',
      technologies: ['Next.js', 'Prisma', 'AWS S3', 'NextAuth'],
      github: 'https://github.com',
      live: 'https://demo.com'
    }
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedFilter);

  return (
    <div className="min-h-screen py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            My Projects
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Showcasing solutions that combine innovation with practical implementation
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedFilter === filter.id
                  ? darkMode 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-blue-500 text-white'
                  : darkMode 
                    ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className={`rounded-xl overflow-hidden group cursor-pointer transition-all duration-200 hover:scale-[1.02] ${
                darkMode ? 'bg-gray-800' : 'bg-gray-100'
              }`}
              onClick={() => setSelectedProject(project)}
            >
              <div className={`p-6 ${darkMode ? 'bg-gray-900' : 'bg-gray-200'}`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium mb-2 inline-block ${
                      darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${darkMode ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-100 text-yellow-700'}`}>
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 rounded-lg transition-colors ${darkMode ? 
                          'hover:bg-gray-700 text-gray-400 hover:text-white' : 
                          'hover:bg-gray-300 text-gray-600 hover:text-gray-900'
                        }`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {project.live && (
                      <a 
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 rounded-lg transition-colors ${darkMode ? 
                          'hover:bg-gray-700 text-gray-400 hover:text-white' : 
                          'hover:bg-gray-300 text-gray-600 hover:text-gray-900'
                        }`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
                
                <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>
                
                <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className={`px-3 py-1 rounded-full text-xs font-medium ${
                      darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-300 text-gray-700'
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className={`px-6 py-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-300'} flex items-center justify-between`}>
                <span className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                  View Details
                </span>
                <ArrowRight className={darkMode ? 'text-gray-500' : 'text-gray-600'} size={16} />
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className={`max-w-2xl w-full rounded-xl overflow-hidden max-h-[90vh] overflow-y-auto ${
                darkMode ? 'bg-gray-900' : 'bg-white'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {selectedProject.title}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {selectedProject.category}
                    </span>
                  </div>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className={`p-2 rounded-lg ${darkMode ? 
                      'hover:bg-gray-800 text-gray-400 hover:text-white' : 
                      'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {selectedProject.description}
                </p>
                
                <div className="mb-6">
                  <h4 className={`text-lg font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className={`px-4 py-2 rounded-lg font-medium ${
                        darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-700'
                      }`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  {selectedProject.github && (
                    <a 
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                        darkMode 
                          ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900'
                      }`}
                    >
                      <Github size={18} />
                      View Code
                    </a>
                  )}
                  {selectedProject.live && (
                    <a 
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                        darkMode 
                          ? 'bg-blue-600 text-white hover:bg-blue-500' 
                          : 'bg-blue-500 text-white hover:bg-blue-400'
                      }`}
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="text-center">
          <p className={`mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Interested in working together?
          </p>
          <a 
            href="mailto:hello@fadilfaisal.dev"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              darkMode 
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500' 
                : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-400 hover:to-purple-400'
            }`}
          >
            <Mail size={18} />
            Start a Project
          </a>
        </div>
      </div>
    </div>
  );
}

function SkillsPage({ darkMode }) {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const categories = [
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'tools', label: 'Tools' },
    { id: 'databases', label: 'Databases' }
  ];

  const skills = {
    frontend: [
      { name: 'React', level: 95, icon: <CustomIcons.React /> },
      { name: 'Next.js', level: 90, icon: <span className="text-xl font-bold">▲</span> },
      { name: 'TypeScript', level: 88, icon: <span className="font-bold">TS</span> },
      { name: 'Tailwind CSS', level: 92, icon: <span className="text-blue-500 font-bold">TW</span> },
      { name: 'JavaScript', level: 95, icon: <span className="text-yellow-500 font-bold">JS</span> },
      { name: 'HTML/CSS', level: 98, icon: <span className="text-orange-500 font-bold">◈</span> }
    ],
    backend: [
      { name: 'Node.js', level: 90, icon: <CustomIcons.Node /> },
      { name: 'Express', level: 88, icon: <span className="font-bold">E</span> },
      { name: 'Python', level: 85, icon: <CustomIcons.Python /> },
      { name: 'Java', level: 80, icon: <span className="text-red-500 font-bold">J</span> },
      { name: 'REST APIs', level: 92, icon: <span className="text-green-500">API</span> },
      { name: 'GraphQL', level: 75, icon: <span className="text-pink-500 font-bold">GQL</span> }
    ],
    mobile: [
      { name: 'Flutter', level: 92, icon: <CustomIcons.Flutter /> },
      { name: 'Dart', level: 90, icon: <span className="text-blue-400 font-bold">D</span> },
      { name: 'React Native', level: 85, icon: <span className="text-cyan-500 font-bold">RN</span> },
      { name: 'Firebase', level: 88, icon: <span className="text-yellow-500 font-bold">F</span> }
    ],
    tools: [
      { name: 'Git', level: 95, icon: <GitBranch size={20} /> },
      { name: 'Docker', level: 80, icon: <span className="text-blue-400">🐳</span> },
      { name: 'AWS', level: 75, icon: <CustomIcons.AWS /> },
      { name: 'VS Code', level: 98, icon: <span className="text-blue-500">✏️</span> },
      { name: 'Figma', level: 85, icon: <span className="text-purple-500">F</span> }
    ],
    databases: [
      { name: 'MongoDB', level: 88, icon: <Database size={20} /> },
      { name: 'PostgreSQL', level: 85, icon: <span className="text-blue-600">🐘</span> },
      { name: 'MySQL', level: 82, icon: <span className="text-orange-500">SQL</span> },
      { name: 'Firestore', level: 90, icon: <span className="text-yellow-500">🔥</span> }
    ]
  };

  return (
    <div className="min-h-screen py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Skills & Expertise
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Technologies I work with to build exceptional applications
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? darkMode 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-blue-500 text-white'
                  : darkMode 
                    ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skills[activeCategory].map((skill, index) => (
            <div 
              key={index}
              className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} group hover:scale-[1.02] transition-all duration-200`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    darkMode ? 'bg-gray-700' : 'bg-gray-200'
                  }`}>
                    {skill.icon}
                  </div>
                  <div>
                    <h4 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {skill.name}
                    </h4>
                    <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {skill.level}% Proficiency
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-2xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    {skill.level}%
                  </div>
                </div>
              </div>
              
              <div className={`h-2 rounded-full overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}>
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              
              <div className="flex justify-between items-center mt-3">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      size={14}
                      className={`${i < Math.floor(skill.level / 20) ? 
                        darkMode ? 'text-yellow-400 fill-yellow-400' : 'text-yellow-500 fill-yellow-500' : 
                        darkMode ? 'text-gray-600' : 'text-gray-400'
                      }`}
                    />
                  ))}
                </div>
                <span className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                  {skill.level >= 90 ? 'Expert' : skill.level >= 75 ? 'Advanced' : 'Intermediate'}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className={`rounded-xl p-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <h3 className={`text-2xl font-bold mb-6 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Certifications & Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'AWS Certified', issuer: 'Amazon Web Services', year: '2024' },
              { title: 'React Developer', issuer: 'Meta', year: '2023' },
              { title: 'Flutter Specialist', issuer: 'Google', year: '2023' }
            ].map((cert, index) => (
              <div key={index} className={`p-6 rounded-lg text-center ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
                <Award className={`mx-auto mb-4 ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`} size={32} />
                <h4 className={`font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {cert.title}
                </h4>
                <div className={`mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {cert.issuer}
                </div>
                <div className={`text-sm ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  {cert.year}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactPage({ darkMode }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitted(true);
    setLoading(false);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Get In Touch
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Let's discuss your project and create something amazing together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className={`rounded-xl p-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} mb-8`}>
              <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Send a Message
              </h3>
              
              {submitted && (
                <div className={`mb-6 p-4 rounded-lg ${darkMode ? 'bg-green-900/30 border border-green-800' : 'bg-green-100 border border-green-200'}`}>
                  <div className="flex items-center gap-3">
                    <Check className={darkMode ? 'text-green-400' : 'text-green-600'} size={20} />
                    <div>
                      <div className={`font-bold ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                        Message Sent!
                      </div>
                      <div className={`text-sm ${darkMode ? 'text-green-300' : 'text-green-700'}`}>
                        I'll get back to you within 24 hours.
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                      darkMode 
                        ? 'bg-gray-900 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                    }`}
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                      darkMode 
                        ? 'bg-gray-900 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                    }`}
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 resize-none ${
                      darkMode 
                        ? 'bg-gray-900 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                    }`}
                    placeholder="Tell me about your project, timeline, and requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                    loading
                      ? darkMode ? 'bg-gray-700 cursor-not-allowed' : 'bg-gray-300 cursor-not-allowed'
                      : darkMode 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500' 
                        : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-400 hover:to-purple-400'
                  }`}
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="text-center">
              <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Download my resume for more details
              </p>
              <button 
                onClick={() => window.open('#', '_blank')}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  darkMode 
                    ? 'border border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-gray-600' 
                    : 'border border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400'
                }`}
              >
                <Download size={18} />
                Download Resume
              </button>
            </div>
          </div>

          <div>
            <div className={`rounded-xl p-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} mb-8`}>
              <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
                    <Mail className={darkMode ? 'text-blue-400' : 'text-blue-600'} size={20} />
                  </div>
                  <div>
                    <h4 className={`font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Email
                    </h4>
                    <a 
                      href="mailto:hello@fadilfaisal.dev" 
                      className={`${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'} transition-colors`}
                    >
                      hello@fadilfaisal.dev
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${darkMode ? 'bg-green-900/30' : 'bg-green-100'}`}>
                    <MapPin className={darkMode ? 'text-green-400' : 'text-green-600'} size={20} />
                  </div>
                  <div>
                    <h4 className={`font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Location
                    </h4>
                    <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                      Kerala, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${darkMode ? 'bg-purple-900/30' : 'bg-purple-100'}`}>
                    <PhoneIcon className={darkMode ? 'text-purple-400' : 'text-purple-600'} size={20} />
                  </div>
                  <div>
                    <h4 className={`font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Phone
                    </h4>
                    <a 
                      href="tel:+919876543210" 
                      className={`${darkMode ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-700'} transition-colors`}
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className={`rounded-xl p-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Connect With Me
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-lg flex items-center justify-center gap-2 font-medium transition-all duration-200 ${
                    darkMode 
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900'
                  }`}
                >
                  <Github size={20} />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-lg flex items-center justify-center gap-2 font-medium transition-all duration-200 ${
                    darkMode 
                      ? 'bg-blue-600 text-white hover:bg-blue-500' 
                      : 'bg-blue-500 text-white hover:bg-blue-400'
                  }`}
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-lg flex items-center justify-center gap-2 font-medium transition-all duration-200 ${
                    darkMode 
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900'
                  }`}
                >
                  <Twitter size={20} />
                  Twitter
                </a>
                <a
                  href="mailto:hello@fadilfaisal.dev"
                  className={`p-4 rounded-lg flex items-center justify-center gap-2 font-medium transition-all duration-200 ${
                    darkMode 
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900'
                  }`}
                >
                  <Mail size={20} />
                  Email
                </a>
              </div>
            </div>

            <div className={`mt-8 p-6 rounded-xl text-center ${darkMode ? 'bg-blue-900/20 border border-blue-800' : 'bg-blue-50 border border-blue-200'}`}>
              <div className={`text-sm font-medium mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                Currently Available
              </div>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                Open for freelance projects and full-time opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer({ darkMode }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-8 ${darkMode ? 'bg-gray-900 border-t border-gray-800' : 'bg-gray-100 border-t border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${darkMode ? 'bg-blue-600' : 'bg-blue-500'}`}>
                <span className="text-white font-bold text-xs">FF</span>
              </div>
              <div>
                <div className="font-bold">Fadil Faisal</div>
                <div className="text-sm opacity-75">Developer & Innovator</div>
              </div>
            </div>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Crafting digital experiences with passion
            </p>
          </div>
          
          <div className="flex gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className={`p-2 rounded-lg transition-all duration-200 ${darkMode ? 
                 'hover:bg-gray-800 text-gray-400 hover:text-white' : 
                 'hover:bg-gray-200 text-gray-600 hover:text-gray-900'
               }`}>
              <Github size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className={`p-2 rounded-lg transition-all duration-200 ${darkMode ? 
                 'hover:bg-gray-800 text-gray-400 hover:text-white' : 
                 'hover:bg-gray-200 text-gray-600 hover:text-gray-900'
               }`}>
              <Linkedin size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
               className={`p-2 rounded-lg transition-all duration-200 ${darkMode ? 
                 'hover:bg-gray-800 text-gray-400 hover:text-white' : 
                 'hover:bg-gray-200 text-gray-600 hover:text-gray-900'
               }`}>
              <Twitter size={18} />
            </a>
            <a href="mailto:hello@fadilfaisal.dev"
               className={`p-2 rounded-lg transition-all duration-200 ${darkMode ? 
                 'hover:bg-gray-800 text-gray-400 hover:text-white' : 
                 'hover:bg-gray-200 text-gray-600 hover:text-gray-900'
               }`}>
              <Mail size={18} />
            </a>
          </div>
        </div>
        
        <div className={`mt-8 pt-8 border-t text-center ${darkMode ? 'border-gray-800 text-gray-500' : 'border-gray-300 text-gray-600'}`}>
          <p className="text-sm">
            © {currentYear} Fadil Faisal. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default App;