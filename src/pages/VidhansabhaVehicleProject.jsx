import React from "react";
import { ArrowLeft, Calendar, MapPin, Truck } from "lucide-react";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function VidhansabhaVehicleProject() {
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
                Vehicle Services
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
              Vidhansabha Elections – Vehicle Tender (2024)
            </h1>
          </div>

          {/* Hero Image */}
          <div className="neuro-card-dark p-4 mb-12 animate-scale-in animate-delay-300">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c03428f112e80b1a3b1ccc/e9aa431f6_IMG202409111332234.jpg"
              alt="Vehicle services for Vidhansabha Elections"
              className="w-full h-64 md:h-96 object-cover rounded-xl"
            />
          </div>

          {/* Project Details */}
          <div className="grid lg:grid-cols-3 gap-12 mb-12">
            <div className="lg:col-span-2 space-y-8 animate-slide-in-left animate-delay-500">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                  Successfully completed vehicle services tender for the Solapur District during the General Elections Maharashtra State Vidhansabha 2024. This comprehensive project involved managing vehicle services across all 11 constituencies of Solapur District, representing our largest transportation logistics operation.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  The project required deploying and coordinating a large fleet of vehicles across multiple constituencies simultaneously, including mobile campaigning vans and election surveillance vehicles, ensuring seamless operations throughout the extended election period.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Comprehensive Services</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Vehicle deployment across all 11 constituencies of Solapur District
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Mobile campaigning vans for widespread election activities
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Election surveillance vehicles for comprehensive monitoring
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Coordinated transportation for Election Commission staff district-wide
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6 animate-slide-in-right animate-delay-700">
              <div className="neuro-card-dark p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Project Stats</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Truck className="w-5 h-5 text-blue-400 mr-3" />
                    <div>
                      <div className="text-white font-medium">11 Constituencies</div>
                      <div className="text-gray-400 text-sm">Entire Solapur District</div>
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
                      <div className="text-gray-400 text-sm">All Solapur District</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}