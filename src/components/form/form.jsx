/** @format */

import React from 'react';

const Form = () => {
	return (
		<form className="contact-form">
			<input type="text" defaultValue="Your name" />
			<input
				type="text"
				defaultValue="Full company name (if you are representative)"
			/>
			<input type="text" defaultValue="Subject" />
			<input type="email" defaultValue="Email" />
			<input type="tel" placeholder="(___) ___-____" />
		</form>
	);
};

export default Form;
