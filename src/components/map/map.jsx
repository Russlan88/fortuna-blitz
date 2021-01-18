/** @format */

import React from 'react';
import GoogleMapReact from 'google-map-react';

import MapFrame from './map.js';

import MyGreatPlaceWithHover from './pin';
const Maps = () => {
	
	return (
		// Important! Always set the container height explicitly

		<GoogleMapReact
			bootstrapURLKeys={{ key: 'AIzaSyCYhndImk525k2BF2sOvBRdQaIppzif_aA' }}
			defaultCenter={{ lat: 59.438431, lng: 24.766538 }}
			defaultZoom={15}
			options={{
				styles: MapFrame,
			}}
		>
		<MyGreatPlaceWithHover 	
		// @ts-ignore
		defaultCenter={{ lat: 59.438431, lng: 24.766538 }}
 	text={'A'} /* Kreyser Avrora */ />
		</GoogleMapReact>
	);
};

export default Maps;
