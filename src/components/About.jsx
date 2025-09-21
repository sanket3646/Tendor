import React, { useEffect, useRef, useState } from "react";
import { Award, Users, Clock, Shield } from "lucide-react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    { icon: Award, title: "Quality Assurance", text: "Premium standards" },
    { icon: Users, title: "Expert Team", text: "Skilled professionals" },
    { icon: Clock, title: "Timely Delivery", text: "On-schedule completion" },
    { icon: Shield, title: "Trusted Partner", text: "Government approved" }
  ];

  return (
    <section id="about" ref={aboutRef} className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center gradient-text mb-16">
            About Pravin Enterprises
          </h2>
          
          <div className="flex flex-col items-center text-center gap-12">
            
            <div className="relative animate-scale-in max-w-4xl w-full">
              <div className="neuro-card-dark p-2 inline-block w-full">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c03428f112e80b1a3b1ccc/bb66a0d91_image.png"
                  alt="Pravin Enterprises Team"
                  className="rounded-lg w-full h-auto md:h-[500px] object-cover object-center"
                />
              </div>
               <div className="absolute -bottom-6 right-1/2 translate-x-1/2 md:right-6 md:translate-x-0 neuro-card-dark p-6 glass-effect">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-1">10+</div>
                  <div className="text-sm text-gray-300">Years Experience</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 animate-fade-in-up max-w-4xl text-center">
              <p className="text-lg text-gray-300 leading-relaxed">
                Pravin Enterprises is a trusted government contracting firm based in Solapur. We handle all types of government contract work orders with a focus on quality, reliability, and timely execution.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our services cover a wide range of activities including administrative support, food and beverage services, travel and tourism, publishing, photography, videography, and other professional solutions. With a commitment to transparency and professionalism, we aim to deliver results that meet the highest standards and build lasting trust with our clients.
              </p>
            </div>
              
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 w-full max-w-4xl">
              {features.map((feature, index) => (
                <div key={index} className={`neuro-card-dark p-6 text-center animate-scale-in animate-delay-${200 + index * 100}`}>
                  <feature.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <h4 className="font-semibold text-white mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-400">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}