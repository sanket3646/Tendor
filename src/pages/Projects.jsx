import React from "react";
import Header from "../components/Header";
import ProjectsComponent from "../components/Projects";
import Footer from "../components/Footer";

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main className="pt-24">
        <ProjectsComponent />
      </main>
      <Footer />
    </div>
  );
}