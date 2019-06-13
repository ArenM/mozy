import React, { Component } from "react";
import TripMapPage from "../components/TripMapPage";

import { connect } from "react-redux";

class TripMapContainer extends Component {
  render() {
    return <TripMapPage />;
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(TripMapContainer);
