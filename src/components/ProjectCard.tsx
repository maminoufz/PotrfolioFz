import { Project, Language, Translations } from '../types';
import { Github, Globe } from 'lucide-react';

interface Props {
  project: Project;
  lang: Language;
  translations: Translations;
}

export default function ProjectCard({ project, lang, translations }: Props) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
      <img 
        src={project.image} 
        alt={project.title[lang]}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title[lang]}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description[lang]}</p>
        <div className="mb-4">
          <h4 className="font-semibold mb-2 dark:text-white">{translations.technologies[lang]}</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm dark:text-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-4 mt-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Globe className="w-5 h-5" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}