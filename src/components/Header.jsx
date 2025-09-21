import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen
          ? "bg-gray-900/95 backdrop-blur-md shadow-2xl border-b border-gray-700"
          : "bg-transparent"
      }`}
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            to="/"
            className={`text-2xl font-bold gradient-text transition-all duration-500 transform ${
              isScrolled ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            Pravin Enterprises
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-medium transition-all duration-300 relative py-2 ${
                    isActive ? "text-blue-400" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

        {/* Mobile Menu Button */}
        <button
          className={`neuro-button-dark p-3 md:hidden z-50 hover:scale-110 transition-transform duration-300 ${
            isScrolled ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
        </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-gray-900/98 backdrop-blur-lg transform transition-all duration-500 ease-in-out z-40 ${
          isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <Link
            to="/"
            className="text-2xl font-bold gradient-text"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Pravin Enterprises
          </Link>
          <button
            className="p-2 text-gray-400 hover:text-white transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center h-full -mt-16 space-y-8">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-2xl transition-all duration-300 font-medium ${
                  isActive ? "text-blue-400" : "text-gray-300 hover:text-white hover:scale-110"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
