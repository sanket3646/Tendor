import React, { useEffect, useRef, useState, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials2() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const testimonials = [

    {
      name: "प्रताप सर",
      position: "",
      content: "घरामध्ये जेवल्यासारखे वाटले, एकदम मस्त जेवण.",
      rating: 5,
    },
    {
      name: "स्मिता गायकवाड मॅडम",
      position: "",
      content: "जेवणाची सोय चांगली आहे, व्यवस्थित व स्वच्छता चांगली आहे.",
      rating: 5,
    }
  ];

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, [nextTestimonial]);

  return (
    <section ref={testimonialsRef} className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300">
              Trusted by government officials and departments across Solapur
            </p>
          </div>
          
          <div className="relative">
            <div className="neuro-card-dark p-8 md:p-12 text-center overflow-hidden animate-scale-in">
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 opacity-20">
                <Quote className="w-12 h-12 text-blue-400" />
              </div>
              
              {/* Stars */}
              <div className="flex justify-center mb-6 animate-fade-in-up animate-delay-300">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-amber-400 fill-current animate-pulse animate-delay-100" />
                ))}
              </div>
              
              {/* Testimonial Content */}
              <blockquote className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed font-light italic animate-fade-in-up animate-delay-500">
                "{testimonials[currentIndex].content}"
              </blockquote>
              
              {/* Author Info */}
              <div className="animate-slide-in-left animate-delay-700">
                <div className="text-center">
                  <div className="font-semibold text-white text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  {testimonials[currentIndex].position && (
                    <div className="text-blue-400 font-medium">
                      {testimonials[currentIndex].position}
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="flex justify-center items-center mt-8 gap-6 animate-fade-in-up animate-delay-900">
              <button
                onClick={prevTestimonial}
                className="neuro-button-dark p-4 hover:scale-110 transition-all duration-300 group"
              >
                <ChevronLeft className="w-6 h-6 text-blue-400 group-hover:text-white" />
              </button>
              
              <div className="flex gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-blue-400 w-8' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="neuro-button-dark p-4 hover:scale-110 transition-all duration-300 group"
              >
                <ChevronRight className="w-6 h-6 text-blue-400 group-hover:text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}