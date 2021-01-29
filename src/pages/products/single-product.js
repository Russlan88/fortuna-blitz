import React from 'react';
import {
    useParams, Link
  } from 'react-router-dom';

  import './style.scss';

  // import styled from 'styled-components';

  import { Button, Container } from '../../assets/css/basic.js';

  import {ListPreviewStyle} from '../../assets/styled-components/products_preview.js';

import data from '../../data/data.json';

const Invoice = (props) => {
    // @ts-ignore
    const { iid } = useParams()
    // @ts-ignore
    const { img, title, main_description, main_second_paragraph, main_third_paragraph,main_forth_paragraph, prev_images } = data.find((inv) => inv.id === String(iid))

    return (
      <Container>
      <div className="single-product-wrapper">
          <img src={img} alt={title}/>
          <div className="product-detals">
            <h2 style={{marginBottom: "35px"}}>{title}</h2>
            <p>{main_description}</p>
            <p>{main_second_paragraph}</p>
            <p>{main_third_paragraph}</p>
            <p>{main_forth_paragraph}</p>
              <ListPreviewStyle>
                {prev_images.map((image, index) => (
                  <li key={index}><img src={image} alt={title}/></li>
                ))}
            </ListPreviewStyle>
            <div className="block-cta">
                <Button as={Link} to="/products"  className="secondary secondary--modify">
              Back
                </Button>
                <Button as={Link} to="/contacts"  className="secondary secondary--modify">
              Ask for full range and price
                </Button>
              </div>
            </div>
          </div>
      </Container>
    )
  }

  export default Invoice;