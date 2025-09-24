import React from "react";
import { ArrowLeft, Calendar, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Testimonials1 from "../components/Testimonials1";

export default function LoksabhaCateringProject() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link 
            to="/projects"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Projects
          </Link>

          {/* Project Header */}
          <div className="animate-fade-in-up">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="glass-effect px-4 py-2 text-sm font-medium text-blue-300 rounded-full">
                Catering Services
              </span>
              <div className="flex items-center text-gray-400">
                <Calendar className="w-4 h-4 mr-2" />
                2024
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-2" />
                Solapur District
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-8">
              Loksabha Elections – Catering Tender (2024)
            </h1>
          </div>

          {/* Hero Image */}
          <div className="neuro-card-dark p-4 mb-12 animate-scale-in animate-delay-300">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c03428f112e80b1a3b1ccc/08f77b82a_IMG202404151344171.jpg"
              alt="Catering services for Loksabha Elections"
              className="w-full h-64 md:h-96 object-cover rounded-xl"
            />
          </div>

          {/* Project Details */}
          <div className="grid lg:grid-cols-3 gap-12 mb-12">
            <div className="lg:col-span-2 space-y-8 animate-slide-in-left animate-delay-500">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                  Successfully completed catering services tender for the Solapur District during the General Elections Lok Sabha 2024. This comprehensive project involved providing high-quality catering services for Election Commission officers and workers across two major constituencies.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Our team ensured timely delivery of nutritious meals, maintaining the highest standards of food safety and quality throughout the election period. The project required careful coordination with election officials and adherence to strict security protocols.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Project Scope</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Coverage across 2 major constituencies: Solapur Lok Sabha and Madha Lok Sabha
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Catering services for Election Commission officers and staff
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    24/7 meal service during the entire election period
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Strict adherence to food safety and hygiene standards
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6 animate-slide-in-right animate-delay-700">
              <div className="neuro-card-dark p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Project Stats</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-blue-400 mr-3" />
                    <div>
                      <div className="text-white font-medium">2 Constituencies</div>
                      <div className="text-gray-400 text-sm">Solapur & Madha Lok Sabha</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-blue-400 mr-3" />
                    <div>
                      <div className="text-white font-medium">Duration</div>
                      <div className="text-gray-400 text-sm">Election Period 2024</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-blue-400 mr-3" />
                    <div>
                      <div className="text-white font-medium">Location</div>
                      <div className="text-gray-400 text-sm">Solapur District</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="neuro-card-dark p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Quality Assurance
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Timely Delivery
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Professional Service
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Security Compliance
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <Testimonials1/>
      </main>
      <Footer />
    </div>
  );
}