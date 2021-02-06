// @ts-nocheck
/** @format */

import React, { useState } from 'react';
import ContactForm from './form.js';
import NumberFormat from 'react-number-format';
import { useForm } from "react-hook-form";
import { db } from '../firebase';

import { Button } from '../../assets/css/basic';

const Form = () => {
	const {errors, register, handleSubmit} = useForm();
	const [name, setName] = useState('');
	const [companyName, setCompanyName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [phone, setPhone] = useState('');

	const onSubmit = () => {

		db.collection('Contact form Fortuna Blitz')
			.add({
				name: name,
				companyName: companyName,
				email: email,
				message: message,
				phone: phone,
			})
			.then(() => {
				// @ts-ignore
				document.querySelector('.success').classList.add('active');
				setTimeout(() => {
					document.querySelector('.success').classList.remove('active');
				  }, 5000);
			})
			.catch((error) => {
				alert(error.message);
			});

			setName('');
			setCompanyName('');
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
			<ContactForm className="contact-form" onSubmit={handleSubmit(onSubmit)}>
				<input
					type="text"
					name="name"
					placeholder="Your name"
					value={name}
					ref={register({ required: true })}
					onChange={(e) => setName(e.target.value)}
				/>
				{errors.name && <span style={{color: "#bf1650"}}>This field is required</span>}
				<input
					type="text"
					name="companyName"
					placeholder="Full company name"
					value={companyName}
					ref={register({ required: true })}
					onChange={(e) => setCompanyName(e.target.value)}
				/>
				{errors.companyName && <span style={{color: "#bf1650"}}>This field is required</span>}
				<input
					type="email"
					name="mail"
					placeholder="Email"
					value={email}
					ref={register({ required: true,  pattern: /^\S+@\S+$/i })}
					onChange={(e) => setEmail(e.target.value)}
				/>
				{errors.mail && <span style={{color: "#bf1650"}}>Please provide a valid email address</span>}

				<label htmlFor="phone">Phone number</label>

				<NumberFormat
					id="phone"
					format="+##(###) ###-####"
					type="tel"
					name="phone_number"
					placeholder="+__(___) ___-____"
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
					ref={register({ required: true })}
					allowEmptyFormatting
					mask="_"
				/>
				{errors.phone_number && <span style={{color: "#bf1650"}}>This field is required</span>}

				<textarea
					placeholder="Message"
					name="message"
					value={message}
					ref={register({ required: true })}
					onChange={(e) => setMessage(e.target.value)}
				></textarea>
				{errors.message && <span style={{color: "#bf1650"}}>This field is required</span>}

					<div className="success">Message submitted succesfuly!</div>
				<Button type="submit" className="secondary secondary--modify --contact">
					Submit
				</Button>
			</ContactForm>
		</div>
	);
};

export default Form;
