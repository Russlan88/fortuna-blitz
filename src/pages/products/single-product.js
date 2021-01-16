import React from 'react';
import {
    useParams, Link
  } from 'react-router-dom';

  import './style.scss';

  // import styled from 'styled-components';

  import { Button, Container } from '../../assets/css/basic.js';

  import {ListPreviewStyle} from '../../assets/styled-components/products_preview.js';

import data from '../../components/data/data.json';

// const GridWrapper = styled.div`
//   display: grid;
//     grid-template-columns: 450px 1fr;
//     grid-gap: 85px;
//     img {
//       width: 100%;
//     }
//     p {
//       line-height: 26px;
//     }
// `



const Invoice = () => {
    // @ts-ignore
    const { iid } = useParams()
    // @ts-ignore
    const { img, title, main_description, prev_images } = data.find((inv) => inv.id === String(iid))
  
    return (
      <Container>
      <div className="single-product-wrapper">
          <img src={img} alt={title}/>
          <div className="product-detals">
            <h2>{title}</h2>
            <p>{main_description}</p>
              <ListPreviewStyle>
                {prev_images.map((image, index) => (
                  <li key={index}><img src={image} alt={title}/></li>
                ))}
            </ListPreviewStyle>
            <div className="block-cta">
                <Button as={Link} to="/products" type="submit" className="secondary secondary--modify">
              Back
                </Button>
                <Button as={Link} to="/contacts" type="submit" className="secondary secondary--modify">
              Ask for full range and price
                </Button>
              </div>
            </div>
          </div>
      </Container>
    )
  }

  export default Invoice;