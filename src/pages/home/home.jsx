/** @format */

import React from 'react';
import {Link} from 'react-router-dom'

// import Products from '../products/products';

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
			<div className="first-column">
				<div className="copyrigth">ITZ</div>
			</div>
			<div className="second-column">
				<h1 className="main-title" style={{color: '#393A3B'}}>Best quality for <span style={{color: '#213562'}}>your market</span></h1>
				<p className="main-paragraph" style={{
					fontFamily: "Work Sans",
					lineHeight: "1.733em",
					textAlign: "left",
					fontWeight: 300,
					fontStyle: "normal",
					width: '500px'
				}}>
				Fortuna Blitz is a wholesale trading company, which provides food trade in international markets (Europe, USA, Asia, Africa). The company promotes the products of the world's leading brands (Heinz) in the food industry and also has its own trademarks.<br /><br />
Working with Fortuna Blitz you receive a long-term reliable partner with versatile assortment who can fulfill consumers’ demands in the best quality food on your market.
				</p>
				<h3>We provide:</h3>
				<ol className="homeList">
					<li>Best quality food products and global brands (Heinz)</li>
					<li>Individual approach in assortment and pricing policy</li>
					<li>Logistics and customs processing</li>
					<li>Transparent partnership on win-win conditions</li>
				</ol>

				<Button as={Link} to="/products" className="primary">Find out more</Button>
			</div>
			<VisualContainerStyle>
				<VisualCaption src_img={VisualFirst} width={'430px'} top={'70px'} right={'40px'}/>
				<VisualCaption src_img={VisualSecond} width={'300px'} top={'150px'} right={'355px'} zIndex={9}/>
				<VisualCaption src_img={VisualThird} width={'360px'} top={'440px'} right={'140px'}/>
			</VisualContainerStyle>
		</HomeStyled>
	);
};

export default Home;
