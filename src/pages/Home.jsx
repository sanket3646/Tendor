import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import PhotoGallery from "../components/PhotoGallery";

import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        <Hero />
        <PhotoGallery />     
      </main>
      <Footer />
    </div>
  );
}