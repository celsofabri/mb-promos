import React from 'react';
import './App.css';

import Slider from "react-slick";

import ImgBecks from './img/cerveja-becks.png'

const App = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    // autoplay: true,
    // autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <main className="container">
      <aside className="sidebar">
        <h1 className="logo">MB Distribuidora</h1>
      </aside>
      <section className="promo">
      <Slider {...settings}>
        <div className="promo__item">
          <img src={ImgBecks} alt="Cerveja Becks" />
        </div>
        <div className="promo__item">
          <img src={ImgBecks} alt="Cerveja Becks" />
        </div>
        <div className="promo__item">
          <img src={ImgBecks} alt="Cerveja Becks" />
        </div>
        <div className="promo__item">
          <img src={ImgBecks} alt="Cerveja Becks" />
        </div>
        <div className="promo__item">
          <img src={ImgBecks} alt="Cerveja Becks" />
        </div>
        <div className="promo__item">
          <img src={ImgBecks} alt="Cerveja Becks" />
        </div>
      </Slider>
      </section>
    </main>
  );
}

export default App;
