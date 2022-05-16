import React from "react"
import AboutSection from '../components/AboutSection'
import ServicesSection from "../components/ServicesSection";
import FaqSections from "../components/FaqSections"
  ;
import MainBody from "../components/MainBody"
import FooterMain from "../components/FooterMain";
const Home = () => {

  return (
  
    <>
      <AboutSection />
      <MainBody/>
      <ServicesSection />
      <FaqSections />
      <FooterMain/>
      
    </>
  );
};

export default Home;