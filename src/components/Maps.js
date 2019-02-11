import React, { Component } from "react";
import ReactMapGL from "react-map-gl";

export default class Maps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewport: {
        width: 1100,
        height: 600,
        zoom: 4,
        lat: 53.5444,
        long: 113.4909,
        // lat: 51.5074,
        // long: 0.1278
      }
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={viewport => this.setState({ viewport })}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      />
    );
  }
}
