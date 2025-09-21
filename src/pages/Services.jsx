import React from "react";
import Header from "../components/Header";
import ServicesComponent from "../components/Services";
import Footer from "../components/Footer";

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main className="pt-24">
        <ServicesComponent />
      </main>
      <Footer />
    </div>
  );
}