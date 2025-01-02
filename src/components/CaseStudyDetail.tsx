import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import supabase from '../supabaseClient';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

// Define the type for case study
interface CaseStudy {
  id: string;
  title: string;
  description: string;
  before_img: string;
  after_img: string;
  solution: string;
  result: string;
}

export function CaseStudyDetail() {
  const { id } = useParams(); // Get the case study id from the URL params
  const navigate = useNavigate();
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null); // State to hold the case study data
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  useEffect(() => {
    const fetchCaseStudy = async () => {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from('cas')
        .select('*')
        .eq('id', id) // Filter by the case study id
        .single(); // Only one result should match

      if (error) {
        setError('Case study not found');
        console.error('Error fetching case study:', error);
      } else {
        setCaseStudy(data);
      }

      setLoading(false);
    };

    if (id) {
      fetchCaseStudy();
    }
  }, [id]);

  // If loading, display a loading spinner
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="spinner-border animate-spin border-4 border-t-4 border-blue-600 rounded-full w-12 h-12"></div>
      </div>
    );
  }

  // If there's an error (no case study found), show an error page
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Case Study Not Found</h2>
          <button
            onClick={() => navigate('/dashboard')}
            className="text-blue-600 hover:text-blue-700 flex items-center"
          >
            <ArrowLeft className="mr-2" /> Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  // If case study is found, render the details
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => navigate('/dashboard')}
          className="text-blue-600 hover:text-blue-700 flex items-center mb-8"
        >
          <ArrowLeft className="mr-2" /> Back to Portfolio
        </button>

        <h1 className="text-4xl font-bold mb-8">{caseStudy?.title}</h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-2">Before</h3>
            <img
              src={caseStudy?.before_img}
              alt="Before treatment"
              className="w-full h-80 object-cover rounded-lg shadow-md"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">After</h3>
            <img
              src={caseStudy?.after_img}
              alt="After treatment"
              className="w-full h-80 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3 flex items-center">
            <CheckCircle2 className="text-green-500 mr-2" />
            descrption
          </h3>
          <p className="text-gray-600">{caseStudy?.description}</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3 flex items-center">
            <CheckCircle2 className="text-blue-500 mr-2" />
            Result
          </h3>
          <p className="text-gray-600">{caseStudy?.result}</p>
        </div>
      </div>
    </div>
  );
}
