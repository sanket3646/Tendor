import React from "react";
import { ArrowLeft, Calendar, MapPin, Truck } from "lucide-react";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function FloodReliefProject() {
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
                Flood Relief
              </span>
              <div className="flex items-center text-gray-400">
                <Calendar className="w-4 h-4 mr-2" />
                2025
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-2" />
                Solapur District
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-8">
              🌊 Solapur Flood Relief – Food Parcel Donation (2025)
            </h1>
          </div>

          {/* Hero Image */}
          <div className="neuro-card-dark p-4 mb-12 animate-scale-in animate-delay-300">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c03428f112e80b1a3b1ccc/aa8039894_IMG_36531.jpg"
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
                    During the devastating flood situation in Solapur District in 2025, Pravin Enterprises took a humanitarian initiative by distributing 10,000+ food parcels to people in need. This relief effort was aimed at supporting affected families, stranded individuals, and rescue teams with nutritious and hygienic meals during the crisis.
                    Our team worked tirelessly to prepare, package, and deliver meals under challenging conditions, ensuring timely assistance and maximum outreach. This project reflected our strong sense of social responsibility and commitment to community welfare in times of disaster.        
                </p>
                
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Project Scope</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Distribution of 10,000+ food parcels every day across multiple flood-affected areas in Solapur District
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Direct support to flood-affected families, individuals, and relief workers
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Deployment of a dedicated team for 24/7 meal preparation and distribution during peak crisis
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Ensuring hygiene, food safety, and quick delivery despite adverse conditions
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
                      <div className="text-white font-medium">Daily 10,000 parcels</div>
                      <div className="text-gray-400 text-sm">Solapur District</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-blue-400 mr-3" />
                    <div>
                      <div className="text-white font-medium">Duration</div>
                      <div className="text-gray-400 text-sm">8 days</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-blue-400 mr-3" />
                    <div>
                      <div className="text-white font-medium">Location</div>
                      <div className="text-gray-400 text-sm">North Solapur, South Solapur, Mohol, Madha</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
             <div className="neuro-card-dark p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Community Support
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Quick Response During Crisis
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Hygienic and Nutritious Meals
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Social Responsibility in Action
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