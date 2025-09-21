import React, { useEffect, useRef, useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+91 79723 43809",
      link: "tel:+917972343809"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "+91 79723 43809",
      link: "https://wa.me/917972343809"
    },
    {
      icon: Mail,
      title: "Email",
      content: "pravingaikwad8997@gmail.com",
      link: "mailto:pravingaikwad8997@gmail.com"
    },
    {
      icon: MapPin,
      title: "Address",
      content: "Abhishek nagar, Murarji Peth, Solapur, Maharashtra 413001",
      link: "https://maps.app.goo.gl/QgWwaj4FxD3X9xKu5"
    }
  ];

  return (
    <section id="contact" ref={contactRef} className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center gradient-text mb-16">
            Get in Touch
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="neuro-card-dark p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="neuro-input-dark w-full text-white"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="neuro-input-dark w-full text-white"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="neuro-input-dark w-full text-white"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="neuro-input-dark w-full text-white resize-none"
                    placeholder="Tell us about your project requirements"
                  />
                </div>
                
                <button
                  type="submit"
                  className="neuro-button-dark w-full py-4 text-blue-400 font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Send Message <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="neuro-card-dark p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      target={item.link.startsWith('http') ? '_blank' : '_self'}
                      rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="flex items-center space-x-4 p-4 neuro-button-dark hover:scale-105 transition-all duration-300 group"
                    >
                      <div className="glass-effect p-3 rounded-full">
                        <item.icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">{item.title}</div>
                        <div className="text-gray-300 group-hover:text-blue-400 transition-colors duration-300">{item.content}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Map */}
              <div className="neuro-card-dark overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.385002231267!2d75.9224854!3d17.6695272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5da51b34a4807%3A0x2289c89225793081!2sPravin%20Enterprises!5e0!3m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0, borderRadius: '20px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Pravin Enterprises Location"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}