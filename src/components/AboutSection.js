import React from 'react'
import telephonemain1Asset from '../img/telephonemain1Asset.png';

import styled from 'styled-components';

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

const About = styled.div`

min-height: 90vh ;
display: flex;
align-items: center;
justify-content: space-between;
padding: 5rem 10rem;
color: #fff;




`;

const Description = styled.div`
  
flex:1;
padding-right:5rem ;
h2 {
  font-weight:lighter;
}




`;



const Image = styled.div`
  
flex: 1;
img{
width: 100%;
height: 70vh;


}
`;


const Hide = styled.div`




`;

export default AboutSection;