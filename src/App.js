import React from "react";
//globalStyled
import GlobalStyle from "./components/GlobalStyle";


// import pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import OurClient from './pages/OurClient';
import ContactUs from './pages/ContactUs';
import Nav from './components/Nav';
//Router


import {  Routes, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/aboutus" exact element= {<AboutUs/>}/>
        <Route path="/ourclient"    exact element= {<OurClient/>}          />
        <Route path="/contactus" exact element={<ContactUs />} />
      
      </Routes> 
     
    </div>
  );
}

export default App;
