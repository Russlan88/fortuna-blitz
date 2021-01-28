/** @format */

import React from 'react';
import {Link} from 'react-router-dom'

// Framer motion
import { motion } from 'framer-motion';


import HomeStyled from './home.js';
import { Button } from '../../assets/css/basic';
import VisualFirst from '../../assets/images/main__1.jpg';
import VisualSecond from '../../assets/images/main__2.jpg';
import VisualThird from '../../assets/images/main__3.jpg';
import VisualCaption from '../../components/visual-caption/visual-caption';
import VisualContainerStyle from '../../assets/styled-components/visualContainerStyle';
// import ContactIcon from '../../assets/images/contact__icon.png';

const Home = () => {

	return (
		<HomeStyled>
			<div className="second-column">
				<motion.h1 className="main-title" style={{color: '#393A3B'}}>Best quality products for <span style={{color: '#950740'}}>your market</span></motion.h1>
				<p className="main-paragraph">
				Fortuna Blitz is a wholesale trading company, which provides food trade in international markets (Europe, USA, Asia, Africa). The company promotes the products of the world's leading brands (Heinz) in the food industry and also has its own trademarks.<br /><br />
Working with Fortuna Blitz you receive a long-term reliable partner with versatile assortment who can fulfill consumers’ demands in the best quality food on your market.
				</p>
				<h3>We provide:</h3>
				<ol className="homeList">
					<li>Best quality food products and global brands </li>
					<li>Individual approach in assortment and pricing policy</li>
					<li>Logistics and customs processing</li>
					<li>Transparent partnership on win-win conditions</li>
				</ol>
				<Button as={Link} to="/products" className="secondary secondary--modify">Find out more</Button>
			</div>
			<VisualContainerStyle>
				<VisualCaption initial={0} opacity={1} duration={1} topInitial={-90} topFinal={50}  src_img={VisualFirst} width={'430px'} top={'70px'} right={'40px'}/>
				<VisualCaption initial={0} opacity={1} duration={3}  src_img={VisualSecond} width={'300px'} top={'150px'} right={'355px'} zIndex={9}/>
				<VisualCaption initial={0} opacity={1} duration={4} marginTop={120} marginTopFinal={'inherit'} src_img={VisualThird} width={'360px'} top={'440px'} right={'140px'}/>
			</VisualContainerStyle>
		</HomeStyled>
	);
};

export default Home;
