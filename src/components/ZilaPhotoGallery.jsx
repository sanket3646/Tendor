import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  Calendar,
  MapPin,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import zilaInside from "../assets/zilaparishadinside.jpeg";
import zilaBreakFast from "../assets/zilabreakfast.jpeg";
import zilaLunch from "../assets/zilalunch.jpeg";

export default function PhotoGallery() {
  const [isVisible, setIsVisible] = useState(false);
  const galleryRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideshowImages = [zilaInside, zilaBreakFast, zilaLunch];

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slideshowImages.length);
  }, [slideshowImages.length]);

  const prevImage = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length,
    );
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
      { threshold: 0.3 },
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={galleryRef} className="py-10 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="neuro-card-dark p-4 mb-12 animate-scale-in animate-delay-300">
          <div
            className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <div className="max-w-4xl mx-auto">
              <div className="neuro-card-dark overflow-hidden animate-scale-in animate-delay-200">
                <div className="relative overflow-hidden group">
                  <div className="relative w-full h-90 md:h-100">
                    {slideshowImages.map((src, index) => (
                      <img
                        key={src}
                        src={src}
                        alt={`Catering services at Solapur University ${index + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
                      />
                    ))}
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Slideshow Controls */}
                  <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={prevImage}
                      className="glass-effect p-2 rounded-full text-white hover:bg-white/20"
                    >
                      <ChevronLeft size={28} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="glass-effect p-2 rounded-full text-white hover:bg-white/20"
                    >
                      <ChevronRight size={28} />
                    </button>
                  </div>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {slideshowImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-blue-400 w-6" : "bg-white/50 hover:bg-white/80"}`}
                      />
                    ))}
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
