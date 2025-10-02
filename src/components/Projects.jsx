import React, { useEffect, useRef, useState } from "react";
import { ExternalLink, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";


export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Loksabha Elections – Catering Tender (2024)",
      category: "Catering Services",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c03428f112e80b1a3b1ccc/08f77b82a_IMG202404151344171.jpg",
      description: "Successfully completed catering services tender for the Solapur District during the General Elections Lok Sabha 2024. Provided catering for Election Commission officers and workers across 2 constituencies: Solapur Lok Sabha and Madha Lok Sabha.",
      year: "2024",
      location: "Solapur District",
      pageUrl: "LoksabhaCateringProject"
    },
    {
      id: 2,
      title: "Loksabha Elections – Vehicle Tender (2024)",
      category: "Vehicle Services", 
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c03428f112e80b1a3b1ccc/8dfb28260_20240424175912_IMG_63521.jpg",
      description: "Successfully completed vehicle services tender for the Solapur District during the General Elections Lok Sabha 2024. Provided vehicles, including mobile campaigning vans and election surveillance vehicles, for Election Commission officers and workers across the Solapur Lok Sabha and Madha Lok Sabha constituencies.",
      year: "2024",
      location: "Solapur District",
      pageUrl: "LoksabhaVehicleProject"
    },
    {
      id: 3,
      title: "Vidhansabha Elections – Catering Tender (2024)",
      category: "Catering Services",
      image: "VC.jpeg",
      description: "Successfully completed catering services tender for the Solapur District during the General Elections Maharashtra State Vidhansabha 2024. Provided catering for Election Commission officers and workers across all 11 constituencies of Solapur District.",
      year: "2024",
      location: "Solapur District",
      pageUrl: "VidhansabhaCateringProject"
    },
    {
      id: 4,
      title: "Vidhansabha Elections – Vehicle Tender (2024)",
      category: "Vehicle Services",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c03428f112e80b1a3b1ccc/e9aa431f6_IMG202409111332234.jpg",
      description: "Successfully completed vehicle services tender for the Solapur District during the General Elections Maharashtra State Vidhansabha 2024. Provided vehicles, including mobile campaigning vans and election surveillance vehicles, for Election Commission officers and workers across all 11 constituencies of Solapur District.",
      year: "2024",
      location: "Solapur District",
      pageUrl: "VidhansabhaVehicleProject"
    },
        {
      id: 5,
      title: "Flood Help Project",
      category: "Vehicle Services",
      image: "FloodProject.JPG",
      description: "Successfully completed vehicle services tender for the Solapur District during the General Elections Maharashtra State Vidhansabha 2024. Provided vehicles, including mobile campaigning vans and election surveillance vehicles, for Election Commission officers and workers across all 11 constituencies of Solapur District.",
      year: "2025",
      location: "Solapur District",
      pageUrl: "VidhansabhaVehicleProject"
    }
  ];

  return (
    <section ref={projectsRef} className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Our Completed Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A showcase of our commitment to quality, precision, and timely delivery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Link
                key={project.id}
                to={`/${project.pageUrl}`}

                className={`group neuro-card-dark overflow-hidden hover:scale-105 transition-all duration-500 animate-scale-in animate-delay-${index * 100 + 300} block`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 glass-effect p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="glass-effect px-3 py-1 text-xs font-medium text-blue-300 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-sm text-gray-400">{project.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center text-sm text-gray-400 mt-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    {project.location}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}