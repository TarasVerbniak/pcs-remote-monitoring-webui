import React, { Component } from 'react';

import './grid.css';

export default class Grid extends Component {
  render () {
    const { header, width, children, overflow } = this.props;

    return (<div className="report-box" style={{ width }}>
      <div className="report-box-header">{header}</div>
      <div style={{ overflow }}>{children}</div>
    </div>);
  }
}
