import React, { Component } from 'react';
import { Btn, FormGroup, FormControl, FormLabel } from 'components/shared';
import moment from 'moment';

import './index.css';

class Selection extends Component {
  toLabel = (val, reportKey) => (val && reportKey === "measurements") ? moment.unix(val).format("DD:MM:YYYY HH:MM:SS") : (val || 'Loading ...');
  toValue = (label, reportKey) => reportKey === "measurements" ? moment(label).unix().format("DD:MM:YYYY HH:MM:SS") : (label || 'Loading ...');

  select = item => {
    const { target: { value } } = item;
  }

  render() {
    const { label, value, options, reportKey } = this.props;
    const selected = { value, label: this.toLabel(value, reportKey) };
    const selectOptions = (options || []).map(o => ({ value, label: this.toLabel(o, reportKey) }));

    return (
      <div className="report-selection">
        <FormGroup>
          <FormLabel>{label || ''}</FormLabel>
          <ReactSelect
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
    const { reportDevices, reportCurrentDeviceId, reportMeasurements, reportCurrentMeasurement, reportCurrentNode, reportNodes, updateReportDevice } = this.props;

    return (
      <div className="report-selection-container">
        <div className="report-selection-wraper">
          <Selection label="Select a Base Station" options={reportDevices} value={reportCurrentDeviceId} onChange={data => updateReportDevice(data)}/>
          <div className="report-selection-divider"></div>
          <Selection label="Select a Measurement" options={reportMeasurements} value={reportCurrentMeasurement} reportKey="measurements" />
          <div className="report-selection-divider"></div>
          <Selection label="Select Inside Node"  options={reportNodes} value={reportCurrentNode} />
        </div>
        <div className="report-selection-wraper">
          <Btn className="btn-blue">Apply</Btn>
        </div>
      </div>
    );
  }
}
