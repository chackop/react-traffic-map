import React, { Component } from "react";
import MapboxGL from "mapbox-gl";

export default class Maps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      map: false,
      viewport: {
        zoom: 10,
        center: [-113.4909, 53.5444]
      }
    };

    this.toggle = this.toggle.bind(this);
  }

  initializeMap() {
    MapboxGL.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
    let map = new MapboxGL.Map({
      container: "map",
      style: "mapbox://styles/mapbox/light-v9",
      ...this.state.viewport
    });

    map.on("load", () => {
      map.addLayer({
        id: "points",
        type: "circle",
        source: {
          type: "geojson",
          data: this.state.data
        },
        paint: {
          "circle-radius": 7,
          "circle-color": "#B4D455"
        }
      });
    });

    this.setState({ map });
  }

  componentDidMount() {
    const { data, api_url } = this.state;
    if (!data) {
      fetch(api_url, { method: "GET" })
        .then(resp => resp.json())
        .then(resp => this.createFeatureCollection(resp))
        .then(resp => this.setState({ data: resp }))
        .catch(err => console.log(err));
    }
  }

  createFeatureCollection(data) {
    let features = [];
    data.forEach(point => {
      features.push({
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [
            parseFloat(point.location.longitude),
            parseFloat(point.location.longitude)
          ]
        },
        properties: {
          description: point.description,
          details: point.details,
          duration: point.duration,
          impact: point.impact
        }
      });
    });

    return {
      type: "FeaturesCollection",
      features: features
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { data, map } = this.state;
    if (data && !map) {
      this.initializeMap();
    }
    return <div style={{ width: 1100, height: 600 }} id="map" />;
  }
}
