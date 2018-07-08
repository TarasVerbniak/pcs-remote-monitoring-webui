import React, { Component } from 'react';
import { PageContent } from 'components/shared';
import ReportSelection from './selection';
import Chart from './chart';
import Grid from './grid';
import Info from './info';
import './report.css';

export class Report extends Component {
  getSelectedData = () => {
    const { reportCurrentMeasurement: m, reportCurrentDeviceId: id, reportMeasurements: ms, testData } = this.props;
    if (!id || !m) return null;

    const data = {};
    const measurements = testData.stations[id].measurements;
    // return only measurements after selected one (period from selected - to ...)
    ms.slice(ms.indexOf(m), ms.length).map(m => data[m] = measurements[m]);

    return data;
  }

  render () {
    const data = this.getSelectedData();

    return [
      <PageContent className="report-container" key="page-content">
        <h1>gOMS U-Value Calculator</h1>
        <ReportSelection {...this.props} />
        <div className="report-data">
          <Grid width="70%" overflow="visible" header="Temparature Measurements Of Selected Period">
            <Chart {...this.props} data={data} />
          </Grid>
          <Grid width="28%" overflow="auto" header="U-Value Analysis">
            <Info {...this.props} data={data} />
          </Grid>
        </div>
      </PageContent>
    ];
  }
}
