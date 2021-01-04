/** @format */

import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

function media() {
	return (
		<div className="media-block">
			<h5 className="media-block__title">Social media</h5>
			<ul className="social-list">
				<li className="social-list__item">
					<a href="http://www.facebook.com">
						<FaFacebookF />
						<svg className="social-svg-circle">
							<circle cx="50%" cy="50%" r="49%"></circle>
							<circle cx="50%" cy="50%" r="49%"></circle>
						</svg>
					</a>
				</li>
				<li className="social-list__item">
					<a href="http://www.facebook.com">
						<FaTwitter />
						<svg className="social-svg-circle">
							<circle cx="50%" cy="50%" r="49%"></circle>
							<circle cx="50%" cy="50%" r="49%"></circle>
						</svg>
					</a>
				</li>
				<li className="social-list__item">
					<a href="http://www.facebook.com">
						<FaLinkedinIn />
						<svg className="social-svg-circle">
							<circle cx="50%" cy="50%" r="49%"></circle>
							<circle cx="50%" cy="50%" r="49%"></circle>
						</svg>
					</a>
				</li>
			</ul>
		</div>
	);
}

export default media;
