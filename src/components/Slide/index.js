import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import {
  StyledPromo,
  StyledPromoItem,
  StyledPromoDetail,
  StyledPromoTitle,
  StyledPromoPrice,
  StyledPromoImg
} from './styled'

const Slide = () => {
  const [promos, setPromos] = useState([])
  const promosActivated = promos.filter(promo => promo.activatePromo === true);
  const query = `
    {
      promotionsCollection{
        items{
          title
          originalPrice
          salePrice
          productImg {
            url
          }
          activatePromo
        }
      }
    }
  `;

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

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/g2c5zffvf18q/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer _ntqOk6QB2UA_qND-qTxxaLsriX3YXHd6dOEWEFyArg',
        },
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        setPromos(data.promotionsCollection.items);
      });
    }, 
  [query]);

  if (promos.length === 0 || !promos) {
    return 'Carregando...'
  }

  return(
    <StyledPromo>
      <Slider {...settings}>
        {promosActivated.map((item, index) => {
          return (
            <StyledPromoItem key={index}>
              <StyledPromoImg>
                <img src={item.productImg.url} alt={item.title} />
              </StyledPromoImg>
              <StyledPromoDetail>
                <StyledPromoTitle>{item.title}</StyledPromoTitle>
                <StyledPromoPrice>
                  <h4>De: <span>R$ {item.originalPrice}</span></h4>
                  <h3>Por: R$ {item.salePrice}</h3>
                </StyledPromoPrice>
              </StyledPromoDetail>
            </StyledPromoItem>
          )
        })}
        
      </Slider>
    </StyledPromo>
  );
}

export default Slide;