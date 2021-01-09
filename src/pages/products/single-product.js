import React from 'react'
import data from '../../components/data/data.json';
import {
	ProductItemStyled,
	ProductFigureStyled,
	ProductDescriptionStyled,
} from './productStyled.js';

import { ReactComponent as ProductIcon } from '../../assets/images/product__icon.svg';


 const Single_product = data.map((data) => {
    return (
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
        </ProductItemStyled>
    );
});

export default Single_product;
