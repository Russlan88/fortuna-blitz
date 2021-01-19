import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import MapFrame from './map.js';
import MyGreatPlaceWithHover from './pin';
 
 
class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.438431,
      lng: 24.766538
    },
    zoom: 16
  };
 
  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCYhndImk525k2BF2sOvBRdQaIppzif_aA' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
		  options={{
				styles: MapFrame,
			}}
        >
          <MyGreatPlaceWithHover
            // @ts-ignore
            lat={59.438431}
            lng={24.766538}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Map;

// /** @format */

// import React from 'react';
// import GoogleMapReact from 'google-map-react';

// import MapFrame from './map.js';

// import MyGreatPlaceWithHover from './pin';
// const Maps = () => {
	
// 	return (
// 		// Important! Always set the container height explicitly

// 		<GoogleMapReact
// 			bootstrapURLKeys={{ key: 'AIzaSyCYhndImk525k2BF2sOvBRdQaIppzif_aA' }}
// 			defaultCenter={{ lat: 59.438431, lng: 24.766538 }}
// 			defaultZoom={15}
// 			options={{
// 				styles: MapFrame,
// 			}}
// 		>
// 		<MyGreatPlaceWithHover 	
// 		// @ts-ignore
// 		defaultCenter={{ lat: 59.438431, lng: 24.766538 }}
// 		onDragEnd={(e) => e.onMarkerDragEnd({ lat: 59.438431, lng: 24.766538 })}
//  	text={'A'} /* Kreyser Avrora */ />
// 		</GoogleMapReact>
// 	);
// };

// export default Maps;
