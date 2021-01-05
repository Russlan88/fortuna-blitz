/** @format */

import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import MapFrame from './map.js';

class Maps extends Component {
	static defaultProps = {
		center: {
			lat: 59.95,
			lng: 30.33,
		},
		zoom: 11,
	};

	render() {
		return (
			// Important! Always set the container height explicitly

			<GoogleMapReact
				bootstrapURLKeys={{ key: 'AIzaSyCYhndImk525k2BF2sOvBRdQaIppzif_aA' }}
				defaultCenter={this.props.center}
				defaultZoom={this.props.zoom}
				options={{
					styles: MapFrame,
				}}
			></GoogleMapReact>
		);
	}
}

export default Maps;
