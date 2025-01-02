import { Heart, Award, Users } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="pt-20 pb-32 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Expert Dental Care with a Personal Touch
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            With over 5 years of experience in cosmetic and restorative dentistry,
            we're committed to providing exceptional dental care and beautiful smiles.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <Heart className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Patient-Focused Care</h3>
              <p className="text-gray-600">Personalized treatment plans for every patient</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <Award className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">Experience working with a team</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <Users className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Modern Approach</h3>
              <p className="text-gray-600">Latest techniques and technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}