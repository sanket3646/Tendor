import React from "react";
import { Phone, Mail, MapPin, MessageCircle, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";


export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const menuItems = [
    { label: "Home", path: "/home" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" }
  ];

  return (
    <footer className="bg-gray-950 text-white py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2 space-y-6 animate-slide-in-left">
            <h3 className="text-3xl font-bold gradient-text">Pravin Enterprises</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Your trusted government tender contractor in Solapur, specializing in infrastructure development, building construction, and project management with proven excellence and unwavering commitment to quality.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/917972343809"
                target="_blank"
                rel="noopener noreferrer"
                className="neuro-button-dark p-4 hover:scale-110 transition-all duration-300 group"
              >
                <MessageCircle className="w-6 h-6 text-green-400 group-hover:text-green-300" />
              </a>
              <a
                href="tel:+917972343809"
                className="neuro-button-dark p-4 hover:scale-110 transition-all duration-300 group"
              >
                <Phone className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
              </a>
              <a
                href="mailto:pravingaikwad8997@gmail.com"
                className="neuro-button-dark p-4 hover:scale-110 transition-all duration-300 group"
              >
                <Mail className="w-6 h-6 text-amber-400 group-hover:text-amber-300" />
              </a>
            </div>
          </div>
      
          {/* Quick Links 
          <div className="space-y-6 animate-fade-in-up animate-delay-300">
            <h4 className="text-xl font-semibold text-white">Quick Navigation</h4>
            <nav className="space-y-3">
              {menuItems.map((item, index) => (
                <Link
                  key={item.page}
                  to="/"
                  className={`block text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 animate-fade-in-up animate-delay-${400 + index * 100}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
         */}
          {/* Contact Info */}
          <div className="space-y-6 animate-slide-in-right animate-delay-600">
            <h4 className="text-xl font-semibold text-white">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+91 79723 43809</span>
              </div>
              <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
                <MessageCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">WhatsApp Available</span>
              </div>
              <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
                <Mail className="w-5 h-5 text-amber-400" />
                <span className="text-gray-300">pravingaikwad8997@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
                <MapPin className="w-5 h-5 text-red-400" />
                <span className="text-gray-300">Abhishek nagar, Murarji Peth, Solapur, Maharashtra 413001</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center animate-fade-in-up animate-delay-800">
          <p className="text-gray-400 text-center md:text-left">
            &copy; {new Date().getFullYear()} Pravin Enterprises. All rights reserved. | Government Tender Contractor - Solapur
          </p>
          
          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 neuro-button-dark p-3 hover:scale-110 transition-all duration-300 group"
          >
            <ArrowUp className="w-5 h-5 text-blue-400 group-hover:text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
}