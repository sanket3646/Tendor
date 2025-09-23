import React from "react";
import Header from "../components/Header";
import ContactComponent from "../components/Contact";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="bg-gray-900 overflow-x-hidden">
      <Header />
      <main className="pt-24 w-full max-w-full">
        <ContactComponent />
      </main>
      <Footer />
    </div>
  );
}
