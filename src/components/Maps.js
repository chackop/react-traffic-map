import React, { Component } from "react";
import MapGL, { Marker } from "react-map-gl";
import CityPin from "./Pin";

export default class Maps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewport: {
        width: 1100,
        height: 600,
        zoom: 4,
        latitude: 53.5444,
        longitude: -113.4909
        // lat: 51.5074,
        // long: 0.1278
      },
      coords: [
        {
          lat: 53.5444,
          long: -113.4909
        },
        {
          lat: 53.567,
          long: -113.4947
        }
      ]
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { coords } = this.state;
    return (
      <MapGL
        {...this.state.viewport}
        onViewportChange={viewport => this.setState({ viewport })}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      >
        {coords.map(coord => (
          <Marker latitude={coord.lat} longitude={coord.long}>
            <CityPin />
          </Marker>
        ))}
      </MapGL>
    );
  }
}
