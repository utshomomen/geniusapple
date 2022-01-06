import React from 'react';
// import icons
import reactangle from '../img/Rectangle.svg';
// import services from '../img/service.svg';
import home2 from '../img/17.png';

const ServicesSection = () => {
  
  return (

    <div className="services">

      <div className="description">

        <h2> <span> От заявки до ремонта Три простых шага</span>
      </h2>
      <div className="cards">
        <div className="card">

          <div className="icon">
            <img alt="icon" src={reactangle} />

            <h3>1.	Заявка или звонок
            </h3>

          </div>
          <p>Оставьте заявку на нашем сайте. Мы перезвоним Вам и ответим на все вопросы
          </p>
        </div>
        <div className="card">

          <div className="icon">
            <img alt="icon" src={reactangle} />

            <h3> 2.	Расчет стоимости </h3>

          </div>
          <p>Скажем точную сумму ремонта, уточним контактные данные и удобное для вас время.</p>
        </div>

        <div className="card">

          <div className="icon">
            <img alt="icon" src={reactangle} />

            <h3> 3.	Ремонт </h3>

          </div>
          <p>Ремонтируем устройства в кратчайшие сроки и даем гарантию 6 месяцев</p>
        </div>
      </div>
      </div>
      <div className="image">

        <img alt="service" src={home2} />
      </div>
    </div>


);





};



export default ServicesSection;