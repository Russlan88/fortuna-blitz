/** @format */

import React from 'react';

import {
	ProductStyled,
	ProductItemStyled,
	ProductFigureStyled,
	ProductDescriptionStyled,
	RightContainer,
	ContainerWrapper,
} from './productStyled.js';
import {
	SmallTitle,
	DoubleColorTitle,
	MainPararaph,
} from '../../assets/css/variables';
import data from './data.json';
import { ReactComponent as ProductIcon } from '../../assets/images/product__icon.svg';

const Products = () => {
	const product = data.map((data) => {
		return (
			<ProductItemStyled key={data.id}>
				<ProductFigureStyled
					className="products__figure"
					src={data.img_src}
					alt="Product"
				/>
				<ProductDescriptionStyled className="products__description single-item">
					<ProductIcon />
					<h3 className="single-item__title">{data.title}</h3>
					<p className="single-item__description">{data.description}</p>
				</ProductDescriptionStyled>
			</ProductItemStyled>
		);
	});

	return (
		<div className="container">
			<ContainerWrapper>
				<div className="container__left">
					<SmallTitle>Find out more</SmallTitle>
					<DoubleColorTitle>
						We build <span>successful, lasting, profitable</span> products
					</DoubleColorTitle>
					<MainPararaph>
						Lorem ipsum dolor sit amet, sit sumo iracundia no debitis.
					</MainPararaph>
				</div>
				<RightContainer className="container__right">
					<p>
						<strong>Labores placerat salutandi</strong> nam ea, id qui
						<strong>eligendi ex</strong> adipiscing sei disputationi. Iuvaret
						constituam id his, epicuri evertitur quo in, sint minim sonet est
						at. Ut qui viris legendos perpetua, numquam mei dolorem sit et
						tincidunt convallis, rutrum felis vel, neque orci.
					</p>
					<p>
						Vivendo instructior ea pri, reque tollit consulatu in pri. Nobis
						laoreet ne mei. In vim tritani ornatus laboramus.
					</p>
				</RightContainer>
			</ContainerWrapper>
			<ProductStyled>{product}</ProductStyled>
		</div>
	);
};

export default Products;
