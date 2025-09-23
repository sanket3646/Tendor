import React, { useEffect, useRef, useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (contactRef.current) observer.observe(contactRef.current);

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const contactInfo = [
    { icon: Phone, title: "Phone", content: "+91 79723 43809", link: "tel:+917972343809" },
    { icon: MessageCircle, title: "WhatsApp", content: "+91 79723 43809", link: "https://wa.me/917972343809" },
    { icon: Mail, title: "Email", content: "pravingaikwad8997@gmail.com", link: "mailto:pravingaikwad8997@gmail.com" },
    { icon: MapPin, title: "Address", content: "Abhishek nagar, Murarji Peth, Solapur, Maharashtra 413001", link: "https://maps.app.goo.gl/QgWwaj4FxD3X9xKu5" },
  ];

  return (
    <section ref={contactRef} className="py-20 bg-gray-900 overflow-x-hidden">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <h2 className="text-4xl md:text-5xl font-bold text-center gradient-text mb-16">
          Get in Touch
        </h2>

        <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-12">
          {/* Contact Form */}
          <div className="neuro-card-dark p-6 sm:p-8 w-full lg:w-1/2 mx-auto flex-shrink-0">
            <h3 className="text-2xl font-semibold text-white mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="neuro-input-dark w-full text-white"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="neuro-input-dark w-full text-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="neuro-input-dark w-full text-white"
              />
              <textarea
                name="message"
                rows={5}
                placeholder="Message *"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="neuro-input-dark w-full text-white resize-none"
              />
              <button
                type="submit"
                className="neuro-button-dark w-full py-4 text-blue-400 font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Send Message <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Contact Info + Map */}
          <div className="flex flex-col gap-6 w-full lg:w-1/2 mx-auto mt-8 lg:mt-0">
            <div className="neuro-card-dark p-6 sm:p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : "_self"}
                    rel={item.link.startsWith("http") ? "noopener noreferrer" : ""}
                    className="flex items-center space-x-4 p-4 neuro-button-dark hover:scale-105 transition-all duration-300 group"
                  >
                    <div className="glass-effect p-3 rounded-full">
                      <item.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{item.title}</div>
                      <div className="text-gray-300 group-hover:text-blue-400 transition-colors duration-300">
                        {item.content}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="neuro-card-dark overflow-hidden rounded-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.385002231267!2d75.9224854!3d17.6695272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5da51b34a4807%3A0x2289c89225793081!2sPravin%20Enterprises!5e0!3m2!1sen!2sin"
                className="w-full aspect-video"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pravin Enterprises Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
