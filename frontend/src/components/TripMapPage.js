import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";

import Map from "ol/Map";
import GeoJSON from "ol/format/GeoJSON";
import OSM from "ol/source/OSM";
import VectorSource from "ol/source/Vector";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import View from "ol/View";

import "ol/ol.css";

class LoginPage extends Component {
  componentDidMount() {
    let geojsonObject = {
      type: "FeatureCollection",
      crs: {
        type: "name",
        properties: {
          name: "EPSG:4326"
        }
      },
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [1000, 72]
          }
        }
      ]
    };

    let pointSource = new VectorSource({
      features: new GeoJSON().readFeatures(geojsonObject)
    });

    let pointLayer = new VectorLayer({ source: pointSource });

    let map = new Map({
      target: this.refs.mapContainer,
      layers: [new TileLayer({ source: new OSM() }), pointLayer],
      view: new View({
        center: [42, 0],
        zoom: 2
      })
    });
  }
  render() {
    return <div ref="mapContainer" />;
  }
}

export default LoginPage;
