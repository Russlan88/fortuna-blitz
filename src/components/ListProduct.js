import React from "react";
import { Link } from "react-router-dom";
import PlayerAPI from "../components/data/data";

import {
	ProductItemStyled,
	ProductFigureStyled,
    ProductDescriptionStyled,
    ProductStyled,
} from '../pages/products/productStyled.js';

import { ReactComponent as ProductIcon } from '../assets/images/product__icon.svg';


// The FullRoster iterates over all of the players and creates
// a link to their profile page.
const ListProduct = () => (
 <div className="container">
    <ProductStyled>
      {PlayerAPI.all().map((p) => (
        <ProductItemStyled key={p.number}>
          <Link to={`/products/${p.number}`}>
          <ProductFigureStyled src={p.img_src} alt={p.name}/>
          <ProductDescriptionStyled className="products__description single-item">
                <ProductIcon />
                <h3 className="single-item__title">{p.name}</h3>
                <p className="single-item__description">{p.position}</p>
            </ProductDescriptionStyled>
          </Link>
        </ProductItemStyled>
      ))}
    </ProductStyled>
  </div>
);

export default ListProduct;
  
// import {
// 	ProductStyled,
// 	RightContainer,
// 	ContainerWrapper,
// } from './productStyled.js';
// import {
// 	SmallTitle,
// 	DoubleColorTitle,
// 	MainPararaph,
// } from '../../assets/css/variables';

// const ListProduct = () => {
//     const Desktop = ({ children }) => {
// 		const isDesktop = useMediaQuery({ minWidth: 992 });
// 		return isDesktop ? children : null;
// 	};
// 	const Tablet = ({ children }) => {
// 		const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
// 		return isTablet ? children : null;
// 	};
// 	const Mobile = ({ children }) => {
// 		const isMobile = useMediaQuery({ maxWidth: 767 });
// 		return isMobile ? children : null;
//     };
    
//     return (
//         <div className="container">
// 			<div style={{marginTop: "180px"}}>
// 				<div className="container__left">
// 					<div>Find out more</div>
// 					<div>
// 						We build <span>successful, lasting, profitable</span> products
// 					</div>
// 					<div>
// 						Lorem ipsum dolor sit amet, sit sumo iracundia no debitis.
// 					</div>
// 				</div>
// 				<div className="container__right">
// 					<p>
// 						<strong>Labores placerat salutandi</strong> nam ea, id qui
// 						<strong>eligendi ex</strong> adipiscing sei disputationi. Iuvaret
// 						constituam id his, epicuri evertitur quo in, sint minim sonet est
// 						at. Ut qui viris legendos perpetua, numquam mei dolorem sit et
// 						tincidunt convallis, rutrum felis vel, neque orci.
// 					</p>
// 					<p>
// 						Vivendo instructior ea pri, reque tollit consulatu in pri. Nobis
// 						laoreet ne mei. In vim tritani ornatus laboramus.
// 					</p>
// 				</div>
// 			</div>
// 			<div>
// 				<div>{Single_product}</div>
// 			</div>
// 			<div>
// 				{/* <Swiper
// 					slidesPerView={3}
// 					spaceBetween={30}
// 					slidesPerGroup={3}
// 					loop={true}
// 					onSwiper={(swiper) => console.log(swiper)}
// 					onSlideChange={() => console.log('slide change')}
// 				>
// 					{Slider}
// 				</Swiper> */}
// 			</div>
// 			{/* <Mobile>
// 				<Swiper
// 					slidesPerView={1}
// 					slidesPerGroup={1}
// 					loop={true}
// 					onSwiper={(swiper) => console.log(swiper)}
// 					onSlideChange={() => console.log('slide change')}
// 				>
// 					{Slider}
// 				</Swiper>
// 			</Mobile> */}
// 		</div>
//     )
// }

// export default ListProduct;