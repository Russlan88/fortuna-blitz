/** @format */

import React from 'react';

import { ContactsStyle, SubContainer } from '../contacts/contactsUs';
import Maps from '../../components/map/map.jsx';
import Form from '../../components/form/form.jsx';
import Media from '../../components/media/media.jsx';

const Contacts = () => {
	return (
		<ContactsStyle>
			<Maps />
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
					<Media />
				</SubContainer>
			</div>
		</ContactsStyle>
	);
};

export default Contacts;
