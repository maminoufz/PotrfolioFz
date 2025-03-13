import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-sm mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 dark:text-white">Fezzani Mohammed Lamine</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Full-Stack Developer passionate about creating robust web applications using Laravel and React.js. 
              With a strong foundation in both backend and frontend technologies, I bring ideas to life through clean, efficient code.
            </p>
          </div>
          <div className="flex flex-col md:items-end justify-center">
            <div className="flex gap-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Fezzani Mohammed Lamine. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}