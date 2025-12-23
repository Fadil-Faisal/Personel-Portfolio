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
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 ${scrolled ? 'bg-gray-900 shadow-lg' : 'bg-gray-900 bg-opacity-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button 
              onClick={() => navigateTo('home')}
              className="text-2xl font-bold text-blue-500 hover:text-blue-400 font-serif"
            >
              FF
            </button>

            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => navigateTo(item.toLowerCase())}
                  className={`text-sm font-medium ${
                    currentPage === item.toLowerCase()
                      ? 'text-blue-500'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-gray-800 text-yellow-400 hover:bg-gray-700"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-gray-800 text-white"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-4 py-4 space-y-3">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => navigateTo(item.toLowerCase())}
                  className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="pt-16">
        {currentPage === 'home' && <HomePage navigateTo={navigateTo} />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'projects' && <ProjectsPage />}
        {currentPage === 'skills' && <SkillsPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      <Footer />
    </div>
  );
}

function HomePage({ navigateTo }) {
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
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6">
          Hi, I'm <span className="text-blue-400">Fadil Faisal</span>
        </h1>
        
        <div className="text-xl sm:text-2xl text-gray-300 mb-8 h-16 flex items-center justify-center">
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
              className="bg-gray-800 bg-opacity-50 p-6 rounded-xl border border-gray-700 hover:border-blue-500"
            >
              <div className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
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
            className="px-8 py-4 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 border border-gray-600 flex items-center gap-2"
          >
            <Download size={20} />
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="flex justify-center">
            <div className="w-64 h-64 bg-gray-800 rounded-full overflow-hidden border-4 border-gray-700 flex items-center justify-center text-6xl">
              👤
            </div>
          </div>

          <div className="text-gray-300 space-y-4">
            <p className="text-lg leading-relaxed">
              Hello! I'm a third-year BCA student from Kerala, India, passionate about building innovative applications that solve real-world problems. My journey in tech started with curiosity and has evolved into a deep commitment to crafting exceptional digital experiences.
            </p>
            <p className="text-lg leading-relaxed">
              Specializing in Flutter and full-stack development, I've honed my skills across mobile and web platforms. From creating the Kerala Bike Rental app to Creating a Video Teaching Platform, I love pushing boundaries and learning new technologies.
            </p>
            <p className="text-lg leading-relaxed">
              Beyond coding, I'm fascinated by stock trading and financial markets, constantly seeking to understand how technology intersects with finance.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Education Journey</h3>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { year: '2023 - Present', title: 'Bachelor of Computer Applications', institution: 'Yenepoya University, Banglore', status: 'Third Year' },
              { year: '2021 - 2023', title: 'Higher Secondary Education', institution: 'IGPS, Kerala', status: 'Completed' }
            ].map((edu, idx) => (
              <div key={idx} className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold text-sm">
                    {edu.year}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-2">{edu.title}</h4>
                    <p className="text-gray-400">{edu.institution}</p>
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
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Interests & Hobbies</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Code size={32} />, title: 'Coding', desc: 'Building apps & websites' },
              { icon: <TrendingUp size={32} />, title: 'Stock Trading', desc: 'Financial markets analysis' },
              { icon: <Brain size={32} />, title: 'AI & ML', desc: 'Exploring intelligent systems' },
              { icon: <Smartphone size={32} />, title: 'Mobile Dev', desc: 'Flutter & React Native' }
            ].map((interest, idx) => (
              <div key={idx} className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-green-500 text-center">
                <div className="text-blue-400 mb-4 flex justify-center">{interest.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-2">{interest.title}</h4>
                <p className="text-gray-400 text-sm">{interest.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectsPage() {
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
      title: 'Video Teaching Platform',
      description: 'Created a full-stack web application for online video teaching where students (Users) can pay teachers to schedule and conduct one-on-one video teaching sessions.',
      tech: ['React', 'Flutter', 'Node.js', 'django', 'MySQL'],
      image: '🤖',
      github: 'https://github.com/yourusername/emotion-detection',
      live: null,
      features: ['Real-Time Video Call', 'Pay As They Teach', 'INNOVATIVE', 'REST API']
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
    <div className="min-h-screen bg-gray-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">Showcasing my best work in web and mobile development</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="bg-blue-900 p-12 flex items-center justify-center text-8xl">
                {project.image}
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
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
                      className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
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
              className="bg-gray-800 rounded-xl max-w-2xl w-full max-h-screen overflow-y-auto border border-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-3xl font-bold text-white">{selectedProject.title}</h3>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-white"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="text-8xl mb-6 text-center">{selectedProject.image}</div>
                
                <p className="text-gray-300 mb-6 text-lg">{selectedProject.description}</p>
                
                <h4 className="text-xl font-semibold text-white mb-3">Key Features</h4>
                <ul className="space-y-2 mb-6">
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-300">
                      <Check size={20} className="text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <h4 className="text-xl font-semibold text-white mb-3">Technologies Used</h4>
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
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
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

function SkillsPage() {
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
    <div className="min-h-screen bg-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">Technologies I work with daily</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skills.map((skill, idx) => (
            <div key={idx} className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">{skill.icon}</span>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                    <span className="text-blue-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div 
                      className="h-full bg-blue-500 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              <span className="inline-block px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                {skill.category}
              </span>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Certifications & Achievements</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Flutter Development', issuer: 'Udemy', year: '2024' },
              { title: 'React Advanced Patterns', issuer: 'Coursera', year: '2024' },
              { title: 'AWS Cloud Practitioner', issuer: 'Amazon', year: '2023' }
            ].map((cert, idx) => (
              <div key={idx} className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <div className="text-4xl mb-4">🏆</div>
                <h4 className="text-lg font-semibold text-white mb-2">{cert.title}</h4>
                <p className="text-gray-400 text-sm">{cert.issuer}</p>
                <p className="text-blue-400 text-sm mt-2">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['VS Code', 'Git', 'Docker', 'Postman', 'Figma', 'Android Studio', 'MongoDB', 'PostgreSQL', 'AWS', 'Vercel'].map((tool, idx) => (
              <span 
                key={idx}
                className="px-6 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 hover:border-green-500"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactPage() {
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
    <div className="min-h-screen bg-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">Let's build something amazing together</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            {submitted && (
              <div className="mb-6 p-4 bg-green-900 border border-green-500 rounded-lg flex items-center gap-3">
                <Check className="text-green-400" size={24} />
                <span className="text-green-400">Message sent successfully!</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none resize-none"
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
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-900 rounded-lg">
                    <Mail className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <a href="mailto:fadilfaisalk@gmail.com" className="text-gray-400 hover:text-blue-400">
                      fadilfaisalk@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-900 rounded-lg">
                    <MapPin className="text-green-400" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Location</h4>
                    <p className="text-gray-400">Thalassery, Kerala, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
              
           <div className="flex gap-4">
                <a
                  href="https://github.com/Fadil-Faisal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
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
              <a href="mailto:fadilfaisalk@gmail.com" className="p-3 bg-gray-700 rounded-lg hover:bg-gray-600">
                <Mail className="text-white" size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            © 2026 Fadil Faisal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default App;