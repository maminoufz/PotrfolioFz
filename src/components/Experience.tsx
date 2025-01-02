import { GraduationCap, Briefcase, Award } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
        <div className="space-y-12">
          <div className="flex items-start">
            <Briefcase className="h-8 w-8 text-blue-600 mt-1 mr-4" />
            <div>
              <h3 className="text-xl font-semibold">Dentist -  Clinic</h3>
              <p className="text-gray-600">2023-2024 - Present</p>
            </div>
          </div>
          <div className="flex items-start">
            <GraduationCap className="h-8 w-8 text-blue-600 mt-1 mr-4" />
            <div>
              <h3 className="text-xl font-semibold">Dental Surgery Residency</h3>
              <p className="text-gray-600">2022 - 2024</p>
              <p className="mt-2">Completed advanced training in oral surgery and dental implants.</p>
            </div>
          </div>
          <div className="flex items-start">
            <Award className="h-8 w-8 text-blue-600 mt-1 mr-4" />
            <div>
              <h3 className="text-xl font-semibold">Certifications & Awards</h3>
              <ul className="mt-2 space-y-2">
                <li>Graduated from the University of Algiers, Zaiania</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}