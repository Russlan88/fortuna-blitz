/** @format */

import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import Items from '../item/item';
import MediaItem from '../media-item/mediaItem';

const Media = () => {
	const listItem = Items.map((item, index) => (
		<li className="social-list__item" key={index}>
			<a href={item.href}>
				{item.group === 'FaFacebookF' ? (
					<FaFacebookF />
				) : item.group === 'FaTwitter' ? (
					<FaTwitter />
				) : (
					<FaLinkedinIn />
				)}
				<svg className={item.className}>
					<circle cx="50%" cy="50%" r="49%"></circle>
					<circle cx="50%" cy="50%" r="49%"></circle>
				</svg>
			</a>
		</li>
	));
	return (
		<React.Fragment>
			<div className="general-enquaire">
				<h3 className="secondary-title">General Inquires</h3>
				<a href="mailto:export@fortunablitz.eu">export@fortunablitz.eu</a>
				<div className="media-block" style={{ marginTop: '20px' }}>
					<h5 className="secondary-title">Social media</h5>
					<MediaItem>{listItem}</MediaItem>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Media;
