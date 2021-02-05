/** @format */
import React from 'react';
import {
    Link
  } from 'react-router-dom'

  import {Container} from '../../assets/css/basic.js';

  import data from '../../data/data.json';
  import {
    ProductStyled,
    ProductItemStyled,
    ProductFigureStyled,
    ProductDescriptionStyled,
  } from './productStyled.js';

 // import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';


import { ReactComponent as ProductIcon } from '../../assets/images/product__icon.svg';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Products = () => (

    <React.Fragment>
      {/* <GloabalStyles /> */}
      <Container>
        <h3 className="product-title">Products</h3>
        

        <ProductStyled>
              {data.map(({ id, description, img, title }) => (
                <ProductItemStyled key={id}>
                <Link to={`/${id}`}>
              <ProductFigureStyled
                className="products__figure"
                src={img}
                alt={title}
              />
              <ProductDescriptionStyled className="products__description single-item">
                <ProductIcon />
                <h3 className="single-item__title" style={{color: "#fff"}}>{title}</h3>
                <p className="single-item__description">{description}</p>
              </ProductDescriptionStyled>
              </Link>
            </ProductItemStyled>
              ))}
        </ProductStyled>
        </Container>
    </React.Fragment>
  )

export default Products;
