/** @format */

import React from 'react';
import { useMediaQuery } from 'react-responsive';
import {
	ProductStyled,
	RightContainer,
	ContainerWrapper,
} from './productStyled.js';
import {
	SmallTitle,
	DoubleColorTitle,
	MainPararaph,
} from '../../assets/css/variables';

import Single_product from './single-product';
import Slider from '../../components/slider/slider.js';
import { Swiper } from 'swiper/react';

const Products = () => {
	const Desktop = ({ children }) => {
		const isDesktop = useMediaQuery({ minWidth: 992 });
		return isDesktop ? children : null;
	};
	const Tablet = ({ children }) => {
		const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
		return isTablet ? children : null;
	};
	const Mobile = ({ children }) => {
		const isMobile = useMediaQuery({ maxWidth: 767 });
		return isMobile ? children : null;
	};

	return (
		<div className="container">
			<ContainerWrapper style={{marginTop: "180px"}}>
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
			<Desktop>
				<ProductStyled>{Single_product}</ProductStyled>
			</Desktop>
			<Tablet>
				<Swiper
					slidesPerView={3}
					spaceBetween={30}
					slidesPerGroup={3}
					loop={true}
					onSwiper={(swiper) => console.log(swiper)}
					onSlideChange={() => console.log('slide change')}
				>
					{Slider}
				</Swiper>
			</Tablet>
			<Mobile>
				<Swiper
					slidesPerView={1}
					slidesPerGroup={1}
					loop={true}
					onSwiper={(swiper) => console.log(swiper)}
					onSlideChange={() => console.log('slide change')}
				>
					{Slider}
				</Swiper>
			</Mobile>
		</div>
	);
};

export default Products;
