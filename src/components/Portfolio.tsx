import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../supabaseClient";
import { ArrowRight } from "lucide-react";

// Define the type for case studies
interface CaseStudy {
  id: string;
  title: string;
  description: string;
  image: string;
  before_img: string;
  after_img: string;
}

export function Portfolio() {
  const [visibleCaseStudies, setVisibleCaseStudies] = useState<CaseStudy[]>([]); // Case studies currently visible
  const [offset, setOffset] = useState<number>(3); // Offset to keep track of the number of case studies loaded
  const [totalCaseStudies, setTotalCaseStudies] = useState<number>(0); // Total number of case studies
  const [loading, setLoading] = useState<boolean>(false); // Loading state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true while data is being fetched

      const { data, error, count } = await supabase
        .from("cas")
        .select("*", { count: "exact" })
        .limit(offset);

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setVisibleCaseStudies(data?.slice(0, offset) || []); // Set visible case studies based on the offset
        setTotalCaseStudies(count || 0); // Set total case studies count
      }

      setLoading(false); // Set loading to false once the data has been fetched
    };

    fetchData();
  }, [offset]);

  const handleLoadMore = () => {
    setOffset((prevOffset) => prevOffset + 3); // Increase the offset to load more case studies
  };

  // Check if there are more case studies to load
  const hasMore = totalCaseStudies > visibleCaseStudies.length;

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Case Studies</h2>
        
        {/* Loading Indicator */}
        {loading ? (
          <div className="flex justify-center items-center py-4">
            <div className="spinner-border animate-spin border-4 border-t-4 border-blue-600 rounded-full w-12 h-12"></div>
          </div>
        ) : (
          <div className="flex flex-wrap justify-between gap-8">
            <div className="grid md:grid-cols-3 gap-8 flex-1">
              {visibleCaseStudies.map((caseStudy) => (
                <div
                  key={caseStudy.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105 cursor-pointer"
                  onClick={() => navigate(`/case-study/${caseStudy.id}`)}
                >
                  <img
                    src={caseStudy.before_img} // Use before_img as the default image
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
              ))}
            </div>

            {/* Conditionally render "See More" button */}
            {hasMore && (
              <div className="flex items-center justify-end w-full mt-8">
                <button
                  className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
                  onClick={handleLoadMore}
                >
                  See More
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
