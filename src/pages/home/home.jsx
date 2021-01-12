/** @format */

import React from 'react';

import HomeStyled from './home.js';
import { Button } from '../../assets/css/basic';
// import ContactIcon from '../../assets/images/contact__icon.png';

const Home = () => {
	return (
		<HomeStyled>
			<div className="first-column">
				<div className="copyrigth">&copy;2020 FORTUNA BLITZ</div>
			</div>
			<div className="second-column">
				<h1 className="main-title">Interaction & Experience</h1>
				<p className="main-paragraph">
					Discover a better way of redefining company goals and achieving higher
					conversion rates the natural way.
				</p>
				<Button className="primary">Find out more</Button>
			</div>
			<div className="image-figure">
				<img
					className="mainFigure"
					alt="main figure"
					src="https://www.platingsandpairings.com/wp-content/uploads/2020/02/sous-vide-chicken-breasts-19-1460x2190.jpg"
				/>
			</div>
		</HomeStyled>
	);
};

export default Home;
