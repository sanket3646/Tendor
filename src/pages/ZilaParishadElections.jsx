import React from "react";
import { ArrowLeft, Calendar, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import PhotoGallery from "../components/ZilaPhotoGallery";


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
                Elections
              </span>
              <div className="flex items-center text-gray-400">
                <Calendar className="w-4 h-4 mr-2" />
                2025
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-2" />
                Solapur & Satara District
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-8">
              Zila Parishad & Panchayat Samiti Elections(2025)
            </h1>
          </div>

          {/* Hero Image */}
          <PhotoGallery/>

          {/* Project Details */}
          <div className="grid lg:grid-cols-3 gap-12 mb-12">
            <div className="lg:col-span-2 space-y-8 animate-slide-in-left animate-delay-500">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
                <p className="text-gray-300 leading-relaxed text-lg mb-6">                 
During the 2025 Zila Parishad and Panchayat Samiti Elections in Solapur District, our team managed large-scale catering services for election officials and administrative staff. Working under government supervision, we ensured timely preparation, packaging, and distribution of breakfast and lunch meals across designated centers.
The project included structured breakfast arrangements such as pohe and samosa, hygienically packed lunch parcels, and organized on-site dining facilities.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Despite strict schedules and operational pressure during polling and counting days, our team maintained quality, punctuality, and disciplined execution throughout the election period.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Project Scope</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Preparation and distribution of breakfast meals
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Large-scale lunch parcel packing and delivery
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    On-site dining arrangements for election staff
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Maintenance of hygiene and food safety standards
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
                      <div className="text-white font-medium">Meal Service:
Breakfast & Lunch for Election Officials</div>
                      <div className="text-gray-400 text-sm">Solapur & Satara</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-blue-400 mr-3" />
                    <div>
                      <div className="text-white font-medium">Duration</div>
                      <div className="text-gray-400 text-sm">Polling & Counting Days</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-blue-400 mr-3" />
                    <div>
                      <div className="text-white font-medium">Location</div>
                      <div className="text-gray-400 text-sm">Solapur & Satara</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="neuro-card-dark p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Large-Scale Catering Execution
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Organized Packaging System
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                   On-Time Service Delivery

                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Government Protocol Compliance
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