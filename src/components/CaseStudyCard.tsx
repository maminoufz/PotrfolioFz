import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { CaseStudy } from '../data/caseStudies';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const navigate = useNavigate();

  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105 cursor-pointer"
      onClick={() => navigate(`/case-study/${caseStudy.id}`)}
    >
      <img
        src={caseStudy.image}
        alt={caseStudy.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{caseStudy.title}</h3>
        <p className="text-gray-600 mb-4">{caseStudy.description}</p>
        <div className="flex items-center text-blue-600 hover:text-blue-700">
          <span className="mr-2">View Details</span>
          <ArrowRight size={16} />
        </div>
      </div>
    </div>
  );
}