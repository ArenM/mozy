import React, { Component } from "react";
import TripMapPage from "../components/TripMapPage";

import { connect } from "react-redux";

class TripMapContainer extends Component {
  render() {
    return <TripMapPage />;
  }
}

const mapStateToProps = state => ({ errors: state.errors.auth_errors });

export default connect(mapStateToProps)(TripMapContainer);
