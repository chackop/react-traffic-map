import React, { Component } from "react";
import MapGL, { Marker } from "react-map-gl";
import CityPin from "./Pin";

export default class Maps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      api_url: "https://data.edmonton.ca/resource/ju4q-wijd.json",
      viewport: {
        width: 1100,
        height: 600,
        zoom: 8,
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
      ],
      data: null
    };

    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    const { data, api_url } = this.state;
    if (!data) {
      fetch(api_url, { method: "GET" })
        .then(resp => resp.json())
        .then(resp => this.setState({ data: resp }));
    }
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { coords, data } = this.state;
    return (
      <MapGL
        {...this.state.viewport}
        onViewportChange={viewport => this.setState({ viewport })}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      >
        {data &&
          data.map((coord, i) => (
            <Marker
              latitude={coord.location.latitude}
              longitude={coord.location.longitude}
              key={i}
            >
              <CityPin />
            </Marker>
          ))}
      </MapGL>
    );
  }
}
