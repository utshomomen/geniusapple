import React from 'react';
import styled from 'styled-components';

//images
import client1 from "../img/client1.jpg";
import client2 from "../img/client2.jpg";
import client3 from "../img/client3.jpg";
import client4 from "../img/client4.jpg";

import {Link } from "react-router-dom";

const OurClient =() => {
  return (
   <Work>
   
      <Picture>
        <h2>Client1</h2>
        <div className="line"></div>
        <Link  to="/" >
        <img src={client1} alt="client1" /></Link>
      </Picture>
      <Picture>
        <h2>Client1</h2>
        <div className="line"></div>
        <Link to="/" >
        <img src={client2} alt="client2"  /></Link>
      </Picture>
      <Picture>
        <h2>Client2</h2>
        <div className="line"></div>
        <Link to="/" >
        <img src={client3} alt="client3"  /></Link>
      </Picture>
      <Picture>
        <h2>Client3</h2>
        <div className="line"></div>
        <Link to="/" >
        <img src={client4} alt="client4"  /></Link>
      </Picture> 
       
      </Work>
  )
}



const Work = styled.div`
  
  min-height:100vh ; 
  overflow:hidden ;
  padding:5rem 10rem ;
  h2{
    padding:1rem 0rem;
  }
`;

const Picture = styled.div`

padding-bottom:10rem ;
.line{
  height:0.5rem ;
  background:#cccccc ;
  margin-bottom:3rem ;

}
img{
  width:100%;
  height:70vh;
  object-fit: cover;
}
`;


export default OurClient;


