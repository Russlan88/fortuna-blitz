import styled from 'styled-components';
import { blackColor, darkBlue } from '../../assets/css/variables';


export const ContactsStyle = styled.div`

	display: grid;
	// grid-template-columns: 520px 1fr;
	grid-template-columns: repeat(auto-fit, minmax(520px, 1fr));
	grid-column-gap: 80px;
	

	a {
		color: inherit;
		text-decoration: none;
	}

}


.contacts{
	&__title {
		font-family: 'Work Sans', sans-serif;
		font-size: 11px;
		font-weight: 500;
		line-height: 20px;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: #9e9e9e;
		margin: 0 0 12px;
	}
	
	&__subtitle {
		font-family: Cormorant, serif;
		font-weight: 700;
		letter-spacing: 0;
		color: ${blackColor};
		font-size: 50px;
		line-height: 1em;
		margin: 25px 0;
		-ms-word-wrap: break-word;
		word-wrap: break-word;
	
		span {
			color: ${darkBlue};
		}
	}
	
	&__paragraph {
		font-family: 'Cormorant', serif;
		font-size: 24px;
		font-weight: 500;
		font-style: italic;
		line-height: 32px;
		margin-bottom: 40px;
	}
}

.secondary-title {
		font-family: 'Work Sans', sans-serif;
		font-size: 11px;
		font-weight: 500;
		line-height: 20px;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: #9e9e9e;
		margin: 0 0 12px;
}

.address-media-block {
	display: flex;

	&__address {
		margin-right: 50px;
	}
}

`;

export const SubContainer = styled.div`
	display: grid;
	// grid-template-columns: 350px 1fr;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	grid-column-gap: 30px;
`
