/** @format */

import React from 'react';

import { ContactsStyle, SubContainer } from '../contacts/contactsUs';
import Map from '../../components/map/map.jsx';
import Form from '../../components/form/form.jsx';
import Media from '../../components/media/media.jsx';

const Contacts = () => {
	return (
		<ContactsStyle>
			<Map />
			<div className="contacts__main-info">
				<h3 className="contacts__title">Contact</h3>
				<h4 className="contacts__subtitle">
					Get in touch <span>with us</span>
				</h4>
				<p className="contacts__paragraph">
				Fill in the contact form to receive all needed information or you can reach us directly via e-mail,
telephone or LinkedIn page:
				</p>

				<SubContainer>
					<Form />
					<React.Fragment>
			<div className="general-enquaire">
				<div className="media-block">
					<h5 className="secondary-title">Want to talk with us?</h5>
					<a href="tel:+3728 244 85 88" style={{marginBottom: "20px", display: "block"}}>+3728 244 85 88</a>
					<h5 className="secondary-title">Social media</h5>
					<Media />
				</div>
			</div>
		</React.Fragment>
				</SubContainer>
			</div>
		</ContactsStyle>
	);
};

export default Contacts;
