// import React from 'react'
// import ProductAPI from '../../components/data/data';
// import { Link } from "react-router-dom";
// import {
// 	ProductItemStyled,
// 	ProductFigureStyled,
// 	ProductDescriptionStyled,
// } from './productStyled.js';

// import { ReactComponent as ProductIcon } from '../../assets/images/product__icon.svg';

// const Player = (props) => {
//     const player = ProductAPI.get(parseInt(props.match.params.number, 10));
//     if (!player) {
//       return <div>Sorry, but the player was not found</div>;
//     }
//     return (
//       <div>
//         single product
//         <h1>
//           {player.name} (#{player.number})
//         </h1>
//         <h2>Position: {player.position}</h2>
//         <Link to="/products">Back</Link>
//       </div>
//     );
//   };
  
//   export default Player;

// //  const Single_product = data.map((data) => {
// //     return (
// //         <ProductItemStyled key={data.id}>
// //             <ProductFigureStyled
// //                 className="products__figure"
// //                 src={data.img_src}
// //                 alt={data.title}
// //             />
// //             <ProductDescriptionStyled className="products__description single-item">
// //                 <ProductIcon />
// //                 <h3 className="single-item__title">{data.title}</h3>
// //                 <p className="single-item__description">{data.description}</p>
// //             </ProductDescriptionStyled>
// //         </ProductItemStyled>
// //     );
// // });

// // export default Single_product;
