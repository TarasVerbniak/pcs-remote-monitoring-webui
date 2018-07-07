import React, { Component } from 'react';
import { PageContent } from 'components/shared';
import ReportSelection from './selection';
import './report.css';

export class Report extends Component {
  render () {
    const { reportDevices, reportCurrentDeviceId, reportMeasurements } = this.props;
    console.log('--reportDevices', reportDevices, reportCurrentDeviceId, reportMeasurements)

    return [
      <PageContent className="report-container" key="page-content">
        <h1>gOMS U-Value Calculator</h1>
        <ReportSelection />
      </PageContent>
    ];
  }
}
