import React, { useEffect, useState } from "react";
import { ArrowRight, Phone, Shield, Award, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const fullText = "Trusted Government Tender Contractor in Solapur";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    { icon: Shield, number: "10+", text: "Years Experience" },
    { icon: Award, number: "50+", text: "Projects Completed" },
    { icon: TrendingUp, number: "3", text: "Work in Action" }
  ];

  return (
    <section 
      className="min-h-screen parallax-bg relative flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 58, 138, 0.7)), url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c03428f112e80b1a3b1ccc/272c013aa_PravinEnterprisesSolapurBannerDesign.png')`
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse animate-delay-500"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl animate-pulse animate-delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text typing-animation">{typedText}</span>
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-4xl mx-auto animate-fade-in-up animate-delay-300 leading-relaxed">
          Delivering quality and timely results for government projects with years of proven excellence and unwavering commitment to infrastructure development
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up animate-delay-500">
          <Link
            to="/projects"
            className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 font-semibold rounded-full hover:from-blue-700 hover:to-blue-800 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3 text-lg"
          >
            View Projects 
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
          <Link
            to="/contact"
            className="group glass-effect text-white px-8 py-4 font-semibold rounded-full hover:bg-white/20 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3 text-lg border border-white/30"
          >
            Contact Now 
            <Phone size={20} className="group-hover:rotate-12 transition-transform duration-300" />
          </Link>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up animate-delay-700">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`neuro-card-dark p-6 text-center hover:scale-105 transition-all duration-300 animate-scale-in animate-delay-${800 + index * 200}`}
            >
              <div className="glass-effect w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-blue-400 animate-float" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-gray-300 font-medium">{stat.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}