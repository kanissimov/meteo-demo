import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {
  render() {
    return <div>Chart</div>;
  }
}

function mapStateToProps({ cities, selectedCity }) {
  return { cities, selectedCity };
}

export default connect(mapStateToProps)(Details);
