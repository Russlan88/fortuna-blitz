/** @format */

import React from 'react';
import ContactForm from './form';

const Form = () => {
	return (
		<div className="form-container">
			<h5 className="secondary-title">Contact Address</h5>
			<p className="address-block__paragraph">
				Harjumaa, Tallinn linn, Narva mnt 13a, 10151
			</p>
			<ContactForm className="contact-form">
				<input type="text" defaultValue="Your name" />
				<input
					type="text"
					defaultValue="Full company name (if you are representative)"
				/>
				<input type="text" defaultValue="Subject" />
				<input type="email" defaultValue="Email" />
				<input type="tel" placeholder="(___) ___-____" />
			</ContactForm>
			<h3 className="secondary-title">General Inquires</h3>
			<a href="mailto:fortunablitz@gmail.com">fortunablitz@gmail.com</a>
		</div>
	);
};

export default Form;
