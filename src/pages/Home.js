import React from "react"
import AboutSection from '../components/AboutSection'
import ServicesSection from "../components/ServicesSection";
import FaqSections from "../components/FaqSections"
  ;
import MainBody from "../components/MainBody"
const Home = () => {

  return (
  
    <>
      <AboutSection />
      <MainBody/>
      <ServicesSection />
      <FaqSections />
      
    </>
  );
};

export default Home;