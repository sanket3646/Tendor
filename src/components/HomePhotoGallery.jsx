import React, { useEffect, useRef, useState, useCallback } from "react";
import { Calendar, MapPin, Clock, ChevronLeft, ChevronRight } from "lucide-react";

export default function PhotoGallery() {
  const [isVisible, setIsVisible] = useState(false);
  const galleryRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideshowImages = [
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c03428f112e80b1a3b1ccc/2714ec116_IMG_12001.jpg",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c03428f112e80b1a3b1ccc/74b5c0cf8_IMG_1204.jpg",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c03428f112e80b1a3b1ccc/24ec40582_IMG_0917.jpg"
  ];

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slideshowImages.length);
  }, [slideshowImages.length]);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length);
  };
  
  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, [nextImage]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={galleryRef} className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Current Project
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our ongoing commitment to excellence in service delivery
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="neuro-card-dark overflow-hidden animate-scale-in animate-delay-300">
              <div className="relative overflow-hidden group">
                 <div className="relative w-full h-64 md:h-80">
                  {slideshowImages.map((src, index) => (
                    <img
                      key={src}
                      src={src}
                      alt={`Catering services at Solapur University ${index + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                    />
                  ))}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <span className="glass-effect px-4 py-2 text-sm font-medium text-green-300 rounded-full flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Ongoing
                  </span>
                </div>
                
                {/* Slideshow Controls */}
                <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button onClick={prevImage} className="glass-effect p-2 rounded-full text-white hover:bg-white/20">
                    <ChevronLeft size={28} />
                  </button>
                  <button onClick={nextImage} className="glass-effect p-2 rounded-full text-white hover:bg-white/20">
                    <ChevronRight size={28} />
                  </button>
                </div>
                
                 <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {slideshowImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-blue-400 w-6' : 'bg-white/50 hover:bg-white/80'}`}
                    />
                  ))}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 animate-slide-in-left animate-delay-500">
                  Providing Catering Services to Solapur University
                </h3>
                
                <p className="text-gray-300 leading-relaxed text-lg mb-6 animate-fade-in-up animate-delay-700">
                  We are currently providing long-term catering services to Punyashlok Ahilyadevi Holkar Solapur University. Under a 2-year tie-up, we ensure high-quality and hygienic food services for staff, students, and officials. Our responsibility covers daily meals during University programs, seminars, cultural events, and the PM-USHA scheme initiatives. With a dedicated team, timely service, and commitment to excellence, we aim to maintain a standard of trust and satisfaction throughout the contract period.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 animate-slide-in-right animate-delay-900">
                  <div className="flex items-center text-gray-300">
                    <Calendar className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-white">Timeline</div>
                      <div className="text-sm">Ongoing (2024–2026)</div>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-white">Location</div>
                      <div className="text-sm">Solapur, Maharashtra</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}