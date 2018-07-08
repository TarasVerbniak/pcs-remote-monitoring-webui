import React, { Component } from 'react';
import { PageContent } from 'components/shared';
import ReportSelection from './selection';
import Chart from './chart';
import './report.css';

export class Report extends Component {
  randomDataGenerator = () => {
    const { reportCurrentMeasurement, reportCurrentDeviceId, reportCurrentNode, testData } = this.props;
    const data = reportCurrentDeviceId && reportCurrentMeasurement && reportCurrentNode && testData.stations[reportCurrentDeviceId].measurements[reportCurrentMeasurement].nodes[reportCurrentNode];
    console.log(data)
    const randomMeasurements = {};
    for (let i = 0; i < 30; i =+ 1) {
      // add.push({
      // });
    }
  }

  render () {
    const {
      reportCurrentDeviceId,
      reportCurrentMeasurement,
      reportCurrentNode,
      testData
    } = this.props;
    const data = this.randomDataGenerator();
    return [
      <PageContent className="report-container" key="page-content">
        <h1>gOMS U-Value Calculator</h1>
        <ReportSelection {...this.props} />
        <Chart />
      </PageContent>
    ];
  }
}
