import styled from 'styled-components';
import {darkBlue} from '../../assets/css/variables';


const MediaItem = styled.ul`

	margin: 0px;
    padding: 0px;
    display: grid;
    grid-template-columns: repeat(3, 36px);
    justify-content: flex-start;
	align-items: center;
	grid-column-gap: 10px;

	.social-list__item {
		list-style: none;
		height: 36px;
		width: 36px;
		border-radius: 50%;
		position: relative;
		padding: 0;

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
				color: ${darkBlue};

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
					stroke: ${darkBlue};
					stroke-dashoffset: 115;
					stroke-dasharray: 115;
				}
			}
		}

`;

export default MediaItem;