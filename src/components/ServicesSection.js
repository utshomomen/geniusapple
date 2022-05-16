import React from 'react';
// import icons
import reactangle from '../img/Rectangle.svg';
// import services from '../img/service.svg';
import home2 from '../img/17.png';

//styles
import { About, Description, Image } from "../styles";
import styled from 'styled-components';



const ServicesSection = () => {
  
  return (

    <Services>

      <Description>

        <h2> <span> От заявки до ремонта Три простых шага</span>
      </h2>
      <Cards>
        <div className="card">

          <div className="icon">
            <img alt="icon" src={reactangle} />

            <h3>Заявка или звонок
            </h3>

          </div>
          <p>Оставьте заявку на нашем сайте. Мы перезвоним Вам и ответим на все вопросы
          </p>
        </div>
        <div className="card">

          <div className="icon">
            <img alt="icon" src={reactangle} />

            <h3>Расчет стоимости </h3>

          </div>
          <p>Скажем точную сумму ремонта, уточним контактные данные и удобное для вас время.</p>
        </div>

        <div className="card">

          <div className="icon">
            <img alt="icon" src={reactangle} />

            <h3>Ремонт </h3>

          </div>
          <p>Ремонтируем устройства в кратчайшие сроки и даем гарантию 6 месяцев</p>
        </div>
      </Cards>
      </Description>
      <Image>

        <img alt="service" src={home2} />
      </Image>
    </Services>


);





};


const Services = styled(About)`
/* min-height: 90vh ;
display: flex;
align-items: center;
justify-content: space-between;
padding: 5rem 10rem;
color: #fff; */

h2 {
  padding-bottom: 5rem;

}
p {
  width: 70%;
  padding: 2rem 0rem 4rem 0rem;
}



`;

const Cards = styled.div`
display: flex;
flex-wrap: wrap;



`;

export default ServicesSection;