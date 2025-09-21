import React from "react";
import Header from "../components/Header";
import ContactComponent from "../components/Contact";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main className="pt-24">
        <ContactComponent />
      </main>
      <Footer />
    </div>
  );
}