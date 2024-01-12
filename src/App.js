import React from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Testimonial from "./components/tesimonial/Testimonial";
import Skills from "./components/Skills/skills";

function App() {
  return (
    <div className="w-full h-auto bg-black text-lightText">
      <Navbar />

      <div className="max-w-screen-xl mx-auto">
        <Banner />
        {/* <Features /> */}
        <Skills />
        <Testimonial />
        <Contact />
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;
