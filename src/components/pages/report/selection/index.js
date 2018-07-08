import React, { Component } from 'react';
import { Btn, FormGroup, FormControl, FormLabel } from 'components/shared';
import moment from 'moment';

import './index.css';

class Selection extends Component {
  toLabel = (val, reportKey) => (val && reportKey === "measurements") ? moment.unix(val).format("DD:MM:YYYY HH:MM:SS") : (val || 'Loading ...');

  select = ({ target: { value: { value } } }) => {
    this.props.onChange && this.props.onChange(value);
  }

  render() {
    const { label, value, options, reportKey } = this.props;
    const selected = { value, label: this.toLabel(value, reportKey) };
    const selectOptions = (options || []).map(o => ({ value: o, label: this.toLabel(o, reportKey) }));

    return (
      <div className="report-selection">
        <FormGroup>
          <FormLabel>{label || ''}</FormLabel>
          <FormControl
            type="select"
            className="select-container long select-field"
            value={selected}
            options={selectOptions}
            selectable={false}
            clearable={false}
            onChange={this.select} />
        </FormGroup>
      </div>
    );
  }
}

export default class ReportSelection extends Component {
  render () {
    const {
      reportDevices,
      reportCurrentDeviceId,
      reportMeasurements,
      reportCurrentMeasurement,
      reportCurrentNode,
      reportNodes,
      updateReportDevice,
      updateReportMeasurement,
      updateReportNode,
      testData
    } = this.props;
    const data = reportCurrentDeviceId && reportCurrentMeasurement && reportCurrentNode && testData.stations[reportCurrentDeviceId].measurements[reportCurrentMeasurement].nodes[reportCurrentNode];

    return (
      <div className="report-selection-container">
        <div className="report-selection-wraper">
          <Selection label="Select a Base Station" options={reportDevices} value={reportCurrentDeviceId} onChange={data => updateReportDevice(data)}/>
          <div className="report-selection-divider"></div>
          <Selection label="Select a Measurement" options={reportMeasurements} value={reportCurrentMeasurement} reportKey="measurements" onChange={data => updateReportMeasurement(data)}/>
          <div className="report-selection-divider"></div>
          <Selection label="Select Inside Node"  options={reportNodes} value={reportCurrentNode} onChange={data => updateReportNode(data)}/>
        </div>
        <div className="report-selection-wraper">
          <Btn className="btn-blue">Apply</Btn>
        </div>
      </div>
    );
  }
}
