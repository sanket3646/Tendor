import React, { useEffect, useRef, useState } from "react";
import { Briefcase, Utensils, Plane, BookOpen, Camera, Sparkles } from "lucide-react";

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const servicesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Briefcase,
      title: "Office Administrative & Support",
      description: "Providing comprehensive administrative and office support services to ensure smooth government operations."
    },
    {
      icon: Utensils,
      title: "Food & Beverage Services",
      description: "High-quality catering and food service management for government events, canteens, and functions."
    },
    {
      icon: Plane,
      title: "Travel & Tour Operations",
      description: "Organizing official travel, accommodation, and tours for government departments and personnel."
    },
    {
      icon: BookOpen,
      title: "Publishing & Documentation",
      description: "Professional publishing, printing, and documentation services for all official government materials."
    },
    {
      icon: Camera,
      title: "Photography & Videography",
      description: "Official event coverage, documentation, and promotional content creation with professional equipment."
    },
    {
      icon: Sparkles,
      title: "Other Professional Activities",
      description: "A wide range of other specialized professional services tailored to meet diverse government needs."
    }
  ];

  return (
    <section ref={servicesRef} className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Our Comprehensive Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Delivering excellence across a wide spectrum of government contracting activities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`neuro-card-dark p-8 text-center hover:scale-105 transition-all duration-300 group cursor-pointer animate-scale-in animate-delay-${index * 100 + 300}`}
              >
                <div className="glass-effect w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-blue-400 animate-float" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}