import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import {
  getReportDeviceMeasurements,
  getReportCurrentDeviceId,
  getReportDevices
} from 'store/reducers/appReducer';

import { Report } from './report';

const mapStateToProps = state => ({
  reportMeasurements: getReportDeviceMeasurements(state),
  reportCurrentDeviceId: getReportCurrentDeviceId(state),
  reportDevices: getReportDevices(state)
});

// Wrap the dispatch method
const mapDispatchToProps = dispatch => ({
});

export const ReportContainer = translate()(connect(mapStateToProps, mapDispatchToProps)(Report));
