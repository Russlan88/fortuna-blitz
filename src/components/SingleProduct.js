import React from "react";
import ProductAPI from "../components/data/data";
import { Link } from "react-router-dom";

import { Button } from '../assets/css/basic';
import styled from 'styled-components';

const GridWrapper = styled.div`
  display: grid;
    grid-template-columns: 450px 1fr;
    height: 510px;
    grid-gap: 85px;

    img {
      width: 100%;
    }

    p {
      line-height: 26px;
    }
`

// The Player looks up the player using the number parsed from
// the URL's pathname. If no player is found with the given
// number, then a "player not found" message is displayed.
const Player = (props) => {
  const player = ProductAPI.get(parseInt(props.match.params.number, 10));
  if (!player) {
    return <div>Sorry, but the player was not found</div>;
  }
  return (
    <div className="container">
    <GridWrapper className="gridWrapper">
      <img src={player.img_src} />
        <div className="sideContainer">
        <h1>
          {player.name}
        </h1>
        <h2>Position: {player.position}</h2>
        <p>{player.inner_description}</p>
        <Link to="/products">
        <Button type="submit" className="secondary secondary--modify">
					Back
				</Button>
      </Link>
      </div>
    </GridWrapper>
      
    </div>
  );
};

export default Player;