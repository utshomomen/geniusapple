import React from 'react'

import telephonemain1Asset from '../img/telephonemain1Asset.png';

// styled
// import styled from 'styled-components';

import { About, Description, Image, Hide } from "../styles";

const AboutSection = () => {


 
  return (
    <About>
      <Description>
        <p>БЫСТРЫЙ ЗАКАЗ РЕМОНТА</p>
        <div className="title">
          <Hide>
            <h2><span> БЫСТРО И КАЧЕСТВЕННО
            </span></h2>
          </Hide>
        </div>

        <button>Далее</button>
      </Description>

      <Image>
        <img src={telephonemain1Asset} alt="Mobilephone"  />
      </Image>
    </About>
  );
};


//styled about



export default AboutSection;