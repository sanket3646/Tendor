// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Layout from "./Layout";
import LoksabhaCateringProject from "./pages/LoksabhaCateringProject";
import LoksabhaVehicleProject from "./pages/LoksabhaVehicleProject";
import VidhansabhaCateringProject from "./pages/VidhansabhaCateringProject";
import VidhansabhaVehicleProject from "./pages/VidhansabhaVehicleProject";
import ScrollToTop from "./components/ScrollToTop";
import FloodReliefProject from "./pages/FloodReliefProject";
import ZilaParishadElections from "./pages/ZilaParishadElections";

function App() {
  return (
    <Layout>
            <div className="flex flex-col min-h-screen">
        {/* Header always visible */}
        <Header />

        {/* Main content */}
        <main className="flex-grow">
          <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/LoksabhaCateringProject" element={<LoksabhaCateringProject />} />
          <Route path="/LoksabhaVehicleProject" element={<LoksabhaVehicleProject />} />
          <Route path="/VidhansabhaCateringProject" element={<VidhansabhaCateringProject />} />
          <Route path="/VidhansabhaVehicleProject" element={<VidhansabhaVehicleProject />} />
          <Route path="/FloodReliefProject" element={<FloodReliefProject/>} />
          <Route path="/ZilaParishadElections" element={<ZilaParishadElections/>}/>

        </Routes>

        </main>

        {/* Footer always visible */}
       
      </div>
    </Layout>

   
  );
}

export default App;
