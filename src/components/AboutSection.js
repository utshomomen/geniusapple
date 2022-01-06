import React from 'react'
import telephonemain1Asset from '../img/telephonemain1Asset.png';

const AboutSection= ()=> {
  return (
    <div>
      <div className="description">
      <p>БЫСТРЫЙ ЗАКАЗ РЕМОНТА</p>
        <div className="title">
          <div className="hide">
            <h2><span>Почему выбирают наш сервис? БЫСТРО И КАЧЕСТВЕННО
            </span></h2>
          </div>
        </div>

        <button>Далее</button>
      </div>

      <div className="image">
        <img src={telephonemain1Asset} alt="Mobilephone"  />
</div>
    </div>
  )
}
export default AboutSection;