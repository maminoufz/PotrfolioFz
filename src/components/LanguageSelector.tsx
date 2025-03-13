import { Globe } from 'lucide-react';
import { Language } from '../types';

interface Props {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function LanguageSelector({ currentLang, onLanguageChange }: Props) {
  return (
    <div className="flex items-center gap-2">
      <Globe className="w-5 h-5" />
      <select
        value={currentLang}
        onChange={(e) => onLanguageChange(e.target.value as Language)}
        className="bg-transparent border-none focus:ring-0 dark:text-white"
      >
        <option value="en">English</option>
        <option value="fr">Français</option>
        <option value="ar">العربية</option>
      </select>
    </div>
  );
}