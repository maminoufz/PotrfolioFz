interface Props {
  name: string;
  level: number;
  icon: string;
}

export default function SkillBar({ name, level, icon }: Props) {
  return (
    <div className="group perspective">
      <div className="mb-6 transform-gpu transition-transform duration-500 hover:rotate-y-12 hover:scale-105">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transform-gpu transition-all duration-500 hover:shadow-2xl border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl animate-bounce">{icon}</span>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {name}
              </span>
            </div>
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {level}%
            </span>
          </div>
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-1000 ease-out transform origin-left animate-slide-right"
              style={{ width: `${level}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}