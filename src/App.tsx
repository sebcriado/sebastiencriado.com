import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Code, Rocket, Brain, Coffee, ArrowUp } from 'lucide-react';
import { useLanguage } from './contexts/LanguageContext';
import { LanguageToggle } from './components/LanguageToggle';

function App() {
  const { translations: t } = useLanguage();

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0b14]">
      {/* Navigation */}
      <nav className="border-b border-gray-800 sticky top-0 bg-[#0a0b14]">
        <div className="container py-4 flex justify-between items-center">
          <span className="text-xl font-semibold">sebastiencriado.com</span>
          <div className="flex items-center space-x-6">
            <a href="#projects" className="nav-link hidden sm:block">{t.nav.projects}</a>
            <a href="#about" className="nav-link hidden sm:block">{t.nav.about}</a>
            <a href="#contact" className="nav-link hidden sm:block">{t.nav.contact}</a>
            <LanguageToggle />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="container py-14">
        <div className="max-w-3xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mb-8">
            <img 
              src="/assets/images/seb.png" 
              alt="Sébastien Criado" 
              className="w-32 h-32 rounded-full border-4 border-[#30964D]"
            />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Sébastien Criado
              </h1>
              <p className="text-xl text-gray-400">
                {t.hero.title}
              </p>
            </div>
          </div>
          <p className="text-gray-400 mb-8">
            {t.hero.currentRole}
          </p>
          <div className="flex space-x-4">
            <a href="https://github.com/sebcriado" className="nav-link" target="_blank">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/s%C3%A9bastien-criado-19427a212/" className="nav-link" target="_blank">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </header>

      {/* Projects Section */}
      <section id="projects" className="py-10">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">{t.projects.title}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a href="https://github.com/sebcriado/asteroid-game" className="card group" target="_blank">
              <div className="flex items-center mb-4">
                <Rocket className="w-6 h-6 text-[#30964D] mr-3" />
                <h3 className="text-xl font-bold">{t.projects.asteroidGame.title}</h3>
              </div>
              <p className="text-gray-400">
                {t.projects.asteroidGame.description}
              </p>
            </a>

            <a href="https://github.com/sebcriado/ExerKids" className="card group" target="_blank">
              <div className="flex items-center mb-4">
                <Brain className="w-6 h-6 text-[#30964D] mr-3" />
                <h3 className="text-xl font-bold">{t.projects.exerKids.title}</h3>
              </div>
              <p className="text-gray-400">
                {t.projects.exerKids.description}
              </p>
            </a>

            <a href="https://preprod.koffeezapp.fr/" className="card group" target="_blank">
              <div className="flex items-center mb-4">
                <Coffee className="w-6 h-6 text-[#30964D] mr-3" />
                <h3 className="text-xl font-bold">{t.projects.koffeez.title}</h3>
              </div>
              <p className="text-gray-400">
                {t.projects.koffeez.description}
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-14 bg-[#0d0e17]">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">{t.about.title}</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">{t.about.tools.title}</h3>
              <div className="space-y-4">
                {['Symfony', 'React', 'Typescript', 'Docker', 'MySQL', 'Docker', 'Figma'].map((tool) => (
                  <div key={tool} className="flex items-center space-x-3">
                    <Code className="w-5 h-5 text-[#30964D]" />
                    <span>{tool}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6">{t.about.softSkills.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                {t.about.softSkills.skills.map((skill) => (
                  <div key={skill} className="card text-center py-4">
                    <p className="font-medium">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-8">{t.contact.title}</h2>
          <a 
            href="mailto:contact.sebastiencriado@gmail.com"
            className="inline-flex items-center space-x-2 bg-[#30964D] text-white px-6 py-3 rounded-lg hover:bg-[#267a3f] transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span className=' text-sm sm:text-lg'>contact.sebastiencriado@gmail.com</span>
          </a>
        </div>
      </section>
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-[#30964D] rounded-full shadow-lg hover:bg-[#267a3f] transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}

export default App;