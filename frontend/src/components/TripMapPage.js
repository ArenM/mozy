import React, { Component } from "react";
import PropTypes from "prop-types";

import { Map, View } from "ol";
import GeoJSON from "ol/format/GeoJSON";
import OSM from "ol/source/OSM";
import VectorSource from "ol/source/Vector";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import { all } from "ol/loadingstrategy";

import "ol/ol.css";

class MapPage extends Component {
  componentDidMount() {
    var routes_source = new VectorSource({
      format: new GeoJSON(),
      url: "http://localhost:5000/route",
      strategy: all
    });

    let routes_layer = new VectorLayer({
      source: routes_source
    });

    let map = new Map({
      target: this.refs.mapContainer,
      layers: [new TileLayer({ source: new OSM() }), routes_layer],
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

MapPage.propTypes = {
  trips: PropTypes.object.isRequired
};

export default MapPage;
