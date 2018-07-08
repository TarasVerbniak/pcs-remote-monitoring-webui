import React, { Component } from 'react';
import moment from 'moment';

import './info.css';

export default class Grid extends Component {
  render () {
    const { reportCurrentDeviceId, reportMeasurements, data } = this.props;
    if (!data) return null;

    const selection = Object.keys(data);
    const selectionStart = selection[0];
    const selectionEnd = selection[selection.length - 1];
    const selectionLength = moment.unix(selectionEnd).diff(moment.unix(selectionStart), 'days')

    const allStart = reportMeasurements[0];
    const allEnd = reportMeasurements[reportMeasurements.length - 1];
    const allLength = moment.unix(allEnd).diff(moment.unix(allStart), 'days')

    return (<table><tbody>
      <tr>
        <td>Measurement ID</td>
        <td>{reportCurrentDeviceId}</td>
      </tr>
      <tr>
        <td>Total measurement length</td>
        <td>{`${allLength} d `}</td>
      </tr>
      <tr>
        <td>Start of selected period</td>
        <td>{moment.unix(selectionStart).format("DD:MM:YYYY HH:MM")}</td>
      </tr>
      <tr>
        <td>End of selected period</td>
        <td>{moment.unix(selectionEnd).format("DD:MM:YYYY HH:MM")}</td>
      </tr>
      <tr>
        <td>Length of selected period</td>
        <td>{`${selectionLength} d `}</td>
      </tr>
    </tbody></table>);
  }
}
