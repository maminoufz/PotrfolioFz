import { Mail, Phone, MapPin } from 'lucide-react';
import { Language, Translations } from '../types';

interface Props {
  lang: Language;
  translations: Translations;
}

export default function Contact({ lang, translations }: Props) {
  return (
    <section className="py-12" id="contact">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
          {translations.contact[lang]}
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {translations.sendMessage[lang]}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-blue-600" />
                <span className="dark:text-gray-300">mamioufz2003@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-blue-600" />
                <span className="dark:text-gray-300">+213554066523</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-blue-600" />
                <span className="dark:text-gray-300">bordj bou arreridj</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}