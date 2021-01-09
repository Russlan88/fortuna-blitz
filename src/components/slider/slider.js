import React from 'react'
import data from '../../components/data/data.json';


// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import {
	ProductItemStyled,
	ProductFigureStyled,
	ProductDescriptionStyled,
} from '../../pages/products/productStyled';
import { ReactComponent as ProductIcon } from '../../assets/images/product__icon.svg';

import {SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Slider = data.map((data) => {
        return (
           
          <SwiperSlide style={{background: "red"}}>
              <ProductItemStyled key={data.id}>
                 <ProductFigureStyled
                className="products__figure"
                src={data.img_src}
                alt={data.title}
            />
            <ProductDescriptionStyled className="products__description single-item">
                <ProductIcon />
                <h3 className="single-item__title">{data.title}</h3>
                <p className="single-item__description">{data.description}</p>
            </ProductDescriptionStyled>
        </ProductItemStyled></SwiperSlide>
   
        )
});

export default Slider
