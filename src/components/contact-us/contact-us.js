import styled from 'styled-components';
import { blackColor } from '../../assets/css/variables';


export const ContactsStyle = styled.div`

	display: flex;
	justify-content: space-evenly;

	a {
		color: inherit;
		text-decoration: none;
	}

	

	.contact-form {
		display: flex;
		flex-direction: column;

		input {
			position: relative;
			display: inline-block;
			width: 100%;
			vertical-align: top;
			margin: 0 0 35px;
			padding: 5px 0;
			font-family: Cormorant, serif;
			font-size: 17px;
			line-height: 20px;
			font-weight: 500;
			font-style: italic;
			color: ${blackColor};
			background-color: transparent;
			border-radius: 0;
			outline: 0;
			cursor: pointer;
			border: none;
			border-bottom: 1px solid ${blackColor};
		}
	}
}



.contactTitle {
	font-family: 'Work Sans', sans-serif;
	font-size: 11px;
	font-weight: 500;
	line-height: 20px;
	letter-spacing: 0.2em;
	text-transform: uppercase;
	color: #9e9e9e;
	margin: 0 0 12px;
}

.contactSubtitle {
	font-family: Cormorant, serif;
	font-weight: 700;
	letter-spacing: 0;
	color: ${blackColor};
	font-size: 55px;
	line-height: 1em;
	margin: 25px 0;
	-ms-word-wrap: break-word;
	word-wrap: break-word;

	span {
		color: #f23801;
	}
}

.paragraph {
	font-family: 'Cormorant', serif;
	font-size: 24px;
	font-weight: 500;
	font-style: italic;
	line-height: 32px;
	margin-bottom: 40px;
}

.address-media-block {
	display: flex;

	&__address {
		margin-right: 50px;
	}
}

.social-list {
	display: flex;
	justify-content: space-between;
	margin: 0px;
	padding: 0px;

	&__item {
		list-style: none;
		height: 36px;
		width: 36px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;

		position: relative;
		display: inline-block;
		vertical-align: middle;
		padding: 0;
		margin: 0 14px 14px 0;

		a {
			color: inherit;
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-align: center;
			-ms-flex-align: center;
			align-items: center;
			-webkit-box-pack: center;
			-ms-flex-pack: center;
			justify-content: center;
			width: 36px;
			height: 36px;
			-webkit-transition: 0.4s ease-out;
			-o-transition: 0.4s ease-out;
			transition: 0.4s ease-out;
			font-size: 11px;

			&:hover {
				color: #f23801;

				.social-svg-circle circle {
					-webkit-transform: rotate(55deg);
					-ms-transform: rotate(55deg);
					transform: rotate(55deg);
					-webkit-transition: all 0.6s cubic-bezier(0.43, 0.41, 0.36, 0.9);
					-o-transition: all 0.6s cubic-bezier(0.43, 0.41, 0.36, 0.9);
					transition: all 0.6s cubic-bezier(0.43, 0.41, 0.36, 0.9);

					&:first-child {
						stroke-dashoffset: -115;
					}

					&:last-child {
						stroke-dashoffset: 0;
					}
				}
			}
		}

		.social-svg-circle {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			overflow: visible;

			circle {
				fill: none;
				stroke-width: 1px;
				-webkit-transform-origin: center;
				-ms-transform-origin: center;
				transform-origin: center;
				-webkit-transform: rotate(-145deg);
				-ms-transform: rotate(-145deg);
				transform: rotate(-145deg);
				-webkit-transition: all 0.6s cubic-bezier(0.43, 0.41, 0.36, 0.9);
				-o-transition: all 0.6s cubic-bezier(0.43, 0.41, 0.36, 0.9);
				transition: all 0.6s cubic-bezier(0.43, 0.41, 0.36, 0.9);

				&:first-child {
					stroke: #e1e1e1;
					// stroke-dashoffset: 0;
					// stroke-dasharray: 115;
				}

				&:last-child {
					stroke: #f23801;
					stroke-dashoffset: 115;
					stroke-dasharray: 115;
				}
			}
		}
	}

`;
