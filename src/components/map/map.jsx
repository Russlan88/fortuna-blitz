/** @format */

import React from 'react';
import GoogleMapReact from 'google-map-react';

import MapFrame from './map.js';

const Maps = () => {
	return (
		// Important! Always set the container height explicitly

		<GoogleMapReact
			bootstrapURLKeys={{ key: 'AIzaSyCYhndImk525k2BF2sOvBRdQaIppzif_aA' }}
			defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
			defaultZoom={10}
			options={{
				styles: MapFrame,
			}}
		></GoogleMapReact>
	);
};

export default Maps;
