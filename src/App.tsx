import { useState } from 'react';
import { projects, translations, skills } from './data';
import { Language } from './types';
import ProjectCard from './components/ProjectCard';
import LanguageSelector from './components/LanguageSelector';
import ThemeToggle from './components/ThemeToggle';
import SkillBar from './components/SkillBar';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Code } from 'lucide-react';

function App() {
  const [lang, setLang] = useState<Language>('en');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors">
      <nav className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code className="w-6 h-6 text-blue-600 animate-spin-slow" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </div>
          <div className="flex items-center gap-4">
            <LanguageSelector currentLang={lang} onLanguageChange={setLang} />
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 transform hover:scale-105 transition-transform duration-500">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Hi, I'm Fezzani Mohammed Lamine
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Full-Stack Developer passionate about creating robust web applications using Laravel and React.js.
            With a strong foundation in both backend and frontend technologies, I bring ideas to life through clean, efficient code.
          </p>
        </div>

        {/* Skills Section */}
        <section className="mb-16 perspective-1000">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-500">
            {translations.skills[lang]}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 perspective">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <SkillBar
                  name={skill.name}
                  level={skill.level}
                  icon={skill.icon}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {translations.title[lang]}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                lang={lang}
                translations={translations}
              />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <Contact lang={lang} translations={translations} />
      </main>

      <Footer />
    </div>
  );
}

export default App;