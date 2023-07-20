import React from 'react';
import Slider from "react-slick";
import { StyledPromo, StyledPromoItem, StyledPromoDetail, StyledPromoTitle, StyledPromoPrice } from './styled'
import ImgHeinekenLn from 'assets/img/img-heineken-ln.png'
import ImgSolLn from 'assets/img/img-sol-ln.png'
import ImgBudweiserLn from 'assets/img/img-budweiser-ln.png'

const Slide = () => {
  const settings = {
    dots: false,
    speed: 500,
    className: "center",
    fade: true,
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return(
    <StyledPromo>
      <Slider {...settings}>
        <StyledPromoItem>
          <img src={ImgHeinekenLn} alt="Cerveja Heineken (Long Neck)" />
          <StyledPromoDetail>
            <StyledPromoTitle>Cerveja Heineken (Long Neck)</StyledPromoTitle>
            <StyledPromoPrice>
              <h4>R$ 8,00</h4>
              <h3>R$ 7,00</h3>
            </StyledPromoPrice>
          </StyledPromoDetail>
        </StyledPromoItem>
        <StyledPromoItem>
          <img src={ImgSolLn} alt="Cerveja Sol (Long Neck)" />
          <StyledPromoDetail>
          <StyledPromoTitle>Cerveja Sol (Long Neck)</StyledPromoTitle>
          <StyledPromoPrice>
              <h4>R$ 6,50</h4>
              <h3>R$ 4,99</h3>
            </StyledPromoPrice>
          </StyledPromoDetail>
        </StyledPromoItem>
        <StyledPromoItem>
          <img src={ImgBudweiserLn} alt="Cerveja Budweiser (Long Neck)" />
          <StyledPromoDetail>
          <StyledPromoTitle>Cerveja Budweiser (Long Neck)</StyledPromoTitle>
          <StyledPromoPrice>
              <h4>R$ 7,50</h4>
              <h3>R$ 6,50</h3>
            </StyledPromoPrice>
          </StyledPromoDetail>
        </StyledPromoItem>
      </Slider>
    </StyledPromo>
  );
}

export default Slide;