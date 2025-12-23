import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Github, Linkedin, Mail, ExternalLink, Download, Code, Database, Smartphone, Brain, TrendingUp, MapPin, Send, Check } from 'lucide-react';

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
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <nav className={`fixed w-full top-0 z-30 transition-colors ${scrolled ? (darkMode ? 'bg-gray-800 bg-opacity-80' : 'bg-white shadow-md') : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <div className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Fadil Faisal</div>
              <div className="hidden md:flex items-center gap-1">
                {['home','about','projects','skills','contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => navigateTo(item)}
                    className={`px-3 py-2 rounded-md ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-md ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'}`}>
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <div className="md:hidden">
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`p-2 rounded-md ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'}`}>
                  {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className={`md:hidden px-4 pb-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => navigateTo(item.toLowerCase())}
                className={`block w-full text-left px-4 py-2 rounded-lg ${darkMode ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200'}`}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      <main className="pt-20">
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
  const fullText = 'BCA Student | Flutter & Full-Stack Developer Crafting Innovative Apps';
  
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
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`relative min-h-screen flex items-center justify-center overflow-hidden ${darkMode ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900' : 'bg-gradient-to-br from-white via-blue-100 to-white'}`}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className={`text-5xl sm:text-7xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
          Hi, I'm <span className="text-blue-400">Fadil Faisal</span>
        </h1>
        
        <div className={`text-xl sm:text-2xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-8 h-16 flex items-center justify-center`}>
          <span className="border-r-2 border-blue-500 pr-2">
            {typedText}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
          {[
            { number: '3+', label: 'Projects Completed' },
            { number: '5+', label: 'Technologies Mastered' },
            { number: '100%', label: 'Passion Driven' }
          ].map((stat, idx) => (
            <div 
              key={idx}
              className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 bg-opacity-50 border border-gray-700 hover:border-blue-500' : 'bg-gray-100 border border-gray-200 hover:border-blue-500'}`}>
              <div className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
              <div className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => navigateTo('projects')}
            className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 shadow-lg"
          >
            View Projects
          </button>
          <button 
            className={`px-8 py-4 rounded-lg font-semibold flex items-center gap-2 ${darkMode ? 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-600' : 'bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-300'}`}>
            <Download size={20} />
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
}

function AboutPage({ darkMode }) {
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'} py-20 px-4`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>About Me</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="flex justify-center">
            <div className={`w-64 h-64 rounded-full overflow-hidden border-4 flex items-center justify-center text-6xl ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-200'}`}>
              👤
            </div>
          </div>

          <div className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} space-y-4`}>
            <p className="text-lg leading-relaxed">
              Hello! I'm a third-year BCA student from Kerala, India, passionate about building innovative applications that solve real-world problems. My journey in tech started with curiosity and has evolved into a deep commitment to crafting exceptional digital experiences.
            </p>
            <p className="text-lg leading-relaxed">
              Specializing in Flutter and full-stack development, I've honed my skills across mobile and web platforms. From creating the Kerala Bike Rental app to exploring AI-powered emotion detection systems, I love pushing boundaries and learning new technologies.
            </p>
            <p className="text-lg leading-relaxed">
              Beyond coding, I'm fascinated by stock trading and financial markets, constantly seeking to understand how technology intersects with finance.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <h3 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-8 text-center`}>Education Journey</h3>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { year: '2023 - Present', title: 'Bachelor of Computer Applications', institution: 'Your University, Kerala', status: 'Third Year' },
              { year: '2021 - 2023', title: 'Higher Secondary Education', institution: 'IGPS, Kerala', status: 'Completed' }
            ].map((edu, idx) => (
              <div key={idx} className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 border border-gray-700 hover:border-blue-500' : 'bg-gray-100 border border-gray-200 hover:border-blue-500'}`}>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold text-sm">
                    {edu.year}
                  </div>
                  <div className="flex-1">
                    <h4 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>{edu.title}</h4>
                    <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{edu.institution}</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-green-900 text-green-400 rounded-full text-sm">
                      {edu.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-8 text-center`}>Interests & Hobbies</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Code size={32} />, title: 'Coding', desc: 'Building apps & websites' },
              { icon: <TrendingUp size={32} />, title: 'Stock Trading', desc: 'Financial markets analysis' },
              { icon: <Brain size={32} />, title: 'AI & ML', desc: 'Exploring intelligent systems' },
              { icon: <Smartphone size={32} />, title: 'Mobile Dev', desc: 'Flutter & React Native' }
            ].map((interest, idx) => (
              <div key={idx} className={`p-6 rounded-xl text-center ${darkMode ? 'bg-gray-800 border border-gray-700 hover:border-green-500' : 'bg-gray-100 border border-gray-200 hover:border-green-500'}`}>
                <div className="text-blue-400 mb-4 flex justify-center">{interest.icon}</div>
                <h4 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>{interest.title}</h4>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>{interest.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectsPage({ darkMode }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Kerala Bike Rental',
      description: 'Full-featured bike rental platform for Kerala tourism with real-time availability and booking system.',
      tech: ['Flutter', 'Firebase', 'Google Maps API', 'Razorpay'],
      image: '🏍️',
      github: 'https://github.com/yourusername/kerala-bike-rental',
      live: 'https://kerala-bike-rental.demo',
      features: ['Real-time booking', 'Payment integration', 'GPS tracking', 'User reviews']
    },
    {
      id: 2,
      title: 'AI Emotion Detection',
      description: 'Machine learning model that detects emotions from facial expressions using computer vision.',
      tech: ['Python', 'TensorFlow', 'OpenCV', 'Flask'],
      image: '🤖',
      github: 'https://github.com/yourusername/emotion-detection',
      live: null,
      features: ['Real-time detection', '7 emotion categories', '92% accuracy', 'REST API']
    },
    {
      id: 3,
      title: 'Netflix Clone',
      description: 'Streaming platform replica with authentication, search, and movie database integration.',
      tech: ['React', 'Node.js', 'MongoDB', 'TMDB API'],
      image: '🎬',
      github: 'https://github.com/yourusername/netflix-clone',
      live: 'https://netflix-clone.demo',
      features: ['User authentication', 'Movie search', 'Watchlist', 'Responsive design']
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Real-time weather application with 7-day forecast and location-based services.',
      tech: ['React', 'OpenWeather API', 'Chart.js', 'Tailwind CSS'],
      image: '🌤️',
      github: 'https://github.com/yourusername/weather-app',
      live: 'https://weather-dashboard.demo',
      features: ['Current weather', '7-day forecast', 'Location search', 'Weather charts']
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'} py-20 px-4`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-lg`}>Showcasing my best work in web and mobile development</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project) => (
            <div 
              key={project.id}
              className={`rounded-xl overflow-hidden cursor-pointer ${darkMode ? 'bg-gray-800 border border-gray-700 hover:border-blue-500' : 'bg-gray-100 border border-gray-200 hover:border-blue-500'}`}
              onClick={() => setSelectedProject(project)}
            >
              <div className="bg-blue-900 p-12 flex items-center justify-center text-8xl">
                {project.image}
              </div>
              
              <div className="p-6">
                <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-900 text-blue-400 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={18} />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className={`${darkMode ? 'bg-gray-800 rounded-xl max-w-2xl w-full max-h-screen overflow-y-auto border border-gray-700' : 'bg-white rounded-xl max-w-2xl w-full max-h-screen overflow-y-auto border border-gray-200'}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{selectedProject.title}</h3>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="text-8xl mb-6 text-center">{selectedProject.image}</div>
                
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 text-lg`}>{selectedProject.description}</p>
                
                <h4 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-3`}>Key Features</h4>
                <ul className="space-y-2 mb-6">
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx} className={`flex items-center gap-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      <Check size={20} className="text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <h4 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-3`}>Technologies Used</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map((tech, idx) => (
                    <span key={idx} className="px-4 py-2 bg-blue-900 text-blue-400 rounded-lg">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {selectedProject.github && (
                    <a 
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}
                    >
                      <Github size={20} />
                      View Code
                    </a>
                  )}
                  {selectedProject.live && (
                    <a 
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function SkillsPage({ darkMode }) {
  const skills = [
    { name: 'React', level: 90, icon: '⚛️', category: 'Frontend' },
    { name: 'Flutter', level: 85, icon: '📱', category: 'Mobile' },
    { name: 'Node.js', level: 80, icon: '🟢', category: 'Backend' },
    { name: 'SQL', level: 75, icon: '🗄️', category: 'Database' },
    { name: 'Python', level: 70, icon: '🐍', category: 'Programming' },
    { name: 'Firebase', level: 80, icon: '🔥', category: 'Backend' },
    { name: 'JavaScript', level: 88, icon: '💛', category: 'Programming' },
    { name: 'Tailwind CSS', level: 85, icon: '🎨', category: 'Frontend' }
  ];
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'} py-20 px-4`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Skills & Expertise</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-lg`}>Technologies I work with daily</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skills.map((skill, idx) => (
            <div key={idx} className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 border border-gray-700 hover:border-blue-500' : 'bg-gray-100 border border-gray-200 hover:border-blue-500'}`}>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">{skill.icon}</span>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{skill.name}</h3>
                    <span className="text-blue-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className={`${darkMode ? 'w-full bg-gray-700' : 'w-full bg-gray-200'} rounded-full h-3 overflow-hidden`}>
                    <div 
                      className="h-full bg-blue-500 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              <span className={`${darkMode ? 'inline-block px-3 py-1 bg-gray-700 text-gray-300' : 'inline-block px-3 py-1 bg-gray-200 text-gray-700'} rounded-full text-sm`}>
                {skill.category}
              </span>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h3 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-8 text-center`}>Certifications & Achievements</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Flutter Development', issuer: 'Udemy', year: '2024' },
              { title: 'React Advanced Patterns', issuer: 'Coursera', year: '2024' },
              { title: 'AWS Cloud Practitioner', issuer: 'Amazon', year: '2023' }
            ].map((cert, idx) => (
              <div key={idx} className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-gray-100 border border-gray-200'}`}>
                <div className="text-4xl mb-4">🏆</div>
                <h4 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>{cert.title}</h4>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>{cert.issuer}</p>
                <p className="text-blue-400 text-sm mt-2">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-8 text-center`}>Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['VS Code', 'Git', 'Docker', 'Postman', 'Figma', 'Android Studio', 'MongoDB', 'PostgreSQL', 'AWS', 'Vercel'].map((tool, idx) => (
              <span 
                key={idx}
                className={`px-6 py-3 rounded-lg border hover:border-green-500 ${darkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-gray-100 text-gray-900 border-gray-200'}`}>
                {tool}
              </span>
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'} py-20 px-4`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-lg`}>Let's build something amazing together</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className={`p-8 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-200'}`}>
            <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>Send a Message</h3>
            
            {submitted && (
              <div className="mb-6 p-4 bg-green-900 border border-green-500 rounded-lg flex items-center gap-3">
                <Check className="text-green-400" size={24} />
                <span className="text-green-400">Message sent successfully!</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border focus:border-blue-500 focus:outline-none ${darkMode ? 'bg-gray-700 text-white border border-gray-600' : 'bg-gray-100 text-gray-900 border border-gray-300'}`}
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border focus:border-blue-500 focus:outline-none ${darkMode ? 'bg-gray-700 text-white border border-gray-600' : 'bg-gray-100 text-gray-900 border border-gray-300'}`}
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className={`w-full px-4 py-3 rounded-lg border focus:border-blue-500 focus:outline-none resize-none ${darkMode ? 'bg-gray-700 text-white border border-gray-600' : 'bg-gray-100 text-gray-900 border border-gray-300'}`}
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 shadow-lg flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className={`p-8 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-200'}`}>
              <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-900 rounded-lg">
                    <Mail className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Email</h4>
                    <a href="mailto:your.email@example.com" className={`${darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}>
                      your.email@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-900 rounded-lg">
                    <MapPin className="text-green-400" size={24} />
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Location</h4>
                    <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Kerala, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`p-8 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-200'}`}>
              <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>Connect With Me</h3>
              
           <div className="flex gap-4">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-lg ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}
                >
                  <Github size={24} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  <Linkedin size={24} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            <div className="bg-blue-600 p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Download Resume</h3>
              <p className="text-white mb-6">Get a detailed overview of my experience and skills</p>
              <button 
                onClick={() => window.open('#', '_blank')}
                className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 shadow-lg flex items-center justify-center gap-2 mx-auto"
              >
                <Download size={20} />
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              Fadil Faisal
            </h3>
            <p className="text-gray-400">
              BCA Student passionate about creating innovative solutions through code.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((link) => (
                <div key={link}>
                  <a href="#" className="text-gray-400 hover:text-white">
                    {link}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Follow Me</h4>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-700 rounded-lg hover:bg-gray-600">
                <Github className="text-white" size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-700 rounded-lg hover:bg-gray-600">
                <Linkedin className="text-white" size={24} />
              </a>
              <a href="mailto:your.email@example.com" className="p-3 bg-gray-700 rounded-lg hover:bg-gray-600">
                <Mail className="text-white" size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            © 2024 Fadil Faisal. Built with React & Tailwind CSS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default App;