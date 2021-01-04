/** @format */

import React from 'react';

import { ContactsStyle } from './contact-us';
import Map from '../map/map';
import Form from '../form/form';
import Media from '../media/media';

const Contacts = () => {
	return (
		<ContactsStyle className="container">
			<Map />
			<div className="contacts__main-info">
				<h3 className="contacts__title">Contact</h3>
				<h4 className="contacts__subtitle">
					Lorem ipsum <span>get in touch.</span>
				</h4>
				<p className="contacts__paragraph">
					Gravida sit amet dolor vel molestie tempor sodales arcu aliquet
				</p>

				<div className="address-block">
					<h5 className="address-block__title">Contact Address</h5>
					<p className="address-block__paragraph">
						Harjumaa, Tallinn linn, Narva mnt 13a, 10151
					</p>
				</div>
				<Form />
				<Media />
			</div>
		</ContactsStyle>
	);
};

export default Contacts;
