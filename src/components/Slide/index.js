import React from 'react';
import Slider from "react-slick";
import {
  StyledPromo,
  StyledPromoItem,
  StyledPromoDetail,
  StyledPromoTitle,
  StyledPromoPrice,
  StyledPromoImg
} from './styled'
import ImgHeinekenLn from 'assets/img/img-heineken-ln.png'
import ImgSolLn from 'assets/img/img-sol-ln.png'
import ImgBudweiserLn from 'assets/img/img-budweiser-ln.png'

const Slide = () => {
  const settings = {
    dots: false,
    arrows: false,
    speed: 500,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return(
    <StyledPromo>
      <Slider {...settings}>
        <StyledPromoItem>
          <StyledPromoImg>
            <img src={ImgHeinekenLn} alt="Cerveja Heineken (Long Neck)" />
          </StyledPromoImg>
          <StyledPromoDetail>
            <StyledPromoTitle>Cerveja Heineken (Long Neck)</StyledPromoTitle>
            <StyledPromoPrice>
              <h4>De: <span>R$ 8,00</span></h4>
              <h3>Por: R$ 7,00</h3>
            </StyledPromoPrice>
          </StyledPromoDetail>
        </StyledPromoItem>
        <StyledPromoItem>
          <StyledPromoImg>
            <img src={ImgSolLn} alt="Cerveja Sol (Long Neck)" />
          </StyledPromoImg>
          <StyledPromoDetail>
          <StyledPromoTitle>Cerveja Sol (Long Neck)</StyledPromoTitle>
          <StyledPromoPrice>
              <h4>De: <span>R$ 6,50</span></h4>
              <h3>Por: R$ 4,99</h3>
            </StyledPromoPrice>
          </StyledPromoDetail>
        </StyledPromoItem>
        <StyledPromoItem>
          <StyledPromoImg>
            <img src={ImgBudweiserLn} alt="Cerveja Budweiser (Long Neck)" />
          </StyledPromoImg>
          <StyledPromoDetail>
          <StyledPromoTitle>Cerveja Budweiser (Long Neck)</StyledPromoTitle>
          <StyledPromoPrice>
              <h4>De: <span>R$ 7,50</span></h4>
              <h3>Por: R$ 6,50</h3>
            </StyledPromoPrice>
          </StyledPromoDetail>
        </StyledPromoItem>
      </Slider>
    </StyledPromo>
  );
}

export default Slide;