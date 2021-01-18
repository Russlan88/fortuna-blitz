/** @format */

import React, { useState } from 'react';
import ContactForm from './form.js';
import NumberFormat from 'react-number-format';
import { db } from '../firebase';

import { Button } from '../../assets/css/basic';

const Form = () => {
	const [name, setName] = useState('');
	const [companyName, setCompanyName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [phone, setPhone] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		db.collection('Contact form Fortuna Blitz')
			.add({
				name: name,
				companyName: companyName,
				email: email,
				message: message,
				phone: phone,
			})
			.then(() => {
				alert('Message has been submitted!');
			})
			.catch((error) => {
				alert(error.message);
			});

		setName('');
		setEmail('');
		setMessage('');
		setPhone('');
	};

	return (
		<div className="form-container">
			<h5 className="secondary-title">Contact Address</h5>
			<p className="address-block__paragraph">
				Harjumaa, Tallinn linn, Narva mnt 13a, 10151
			</p>
			<ContactForm className="contact-form" onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Your name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					type="text"
					placeholder="Full company name"
					value={companyName}
					onChange={(e) => setCompanyName(e.target.value)}
				/>

				<input
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>

				<label htmlFor="phone">Phone number</label>

				<NumberFormat
					id="phone"
					format="+##(###) ###-####"
					type="tel"
					placeholder="+__(___) ___-____"
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
					allowEmptyFormatting
					mask="_"
				/>

				<textarea
					placeholder="Message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				></textarea>

				{/* <input
					type="tel"
					placeholder="(___) ___-____"
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
				/> */}
				<Button type="submit" className="secondary secondary--modify --contact">
					Submit
				</Button>
			</ContactForm>
		</div>
	);
};

export default Form;
