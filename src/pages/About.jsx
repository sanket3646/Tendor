import React from "react";
import Header from "../components/Header";
import AboutComponent from "../components/About";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main className="pt-24">
        <AboutComponent />
      </main>
      <Footer />
    </div>
  );
}