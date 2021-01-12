import React from 'react';
import {
    useParams, Link
  } from 'react-router-dom';

  import styled from 'styled-components';

  import { Button, Container } from '../../assets/css/basic.js';

import data from '../../components/data/data.json';

const GridWrapper = styled.div`
  display: grid;
    grid-template-columns: 450px 1fr;
    grid-gap: 85px;
    img {
      width: 100%;
    }
    p {
      line-height: 26px;
    }
`

const Invoice = () => {
    // @ts-ignore
    const { iid } = useParams()
    const { img, description, title } = data.find((inv) => inv.id === String(iid))
  
    return (
      <Container>
        <GridWrapper>
          <h2>{title}</h2>
          <p>{description}</p>
          <img src={img} alt={title}/>
          <Link to="/products"> <Button type="submit" className="secondary secondary--modify">
            Back
          </Button></Link>
        </GridWrapper>
      </Container>
    )
  }

  export default Invoice;