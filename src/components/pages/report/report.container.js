import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import {
  redux as appRedux,
  getReportDeviceMeasurements,
  getReportCurrentDeviceId,
  getReportDevices,
  getReportCurrentDeviceMeasurement,
  getReportDeviceNodes,
  getReportCurrentDeviceNode
} from 'store/reducers/appReducer';

import { Report } from './report';

const mapStateToProps = state => ({
  reportCurrentDeviceId: getReportCurrentDeviceId(state),
  reportDevices: getReportDevices(state),
  reportMeasurements: getReportDeviceMeasurements(state),
  reportCurrentMeasurement: getReportCurrentDeviceMeasurement(state),
  reportNodes: getReportDeviceNodes(state),
  reportCurrentNode: getReportCurrentDeviceNode(state)
});

// Wrap the dispatch method
const mapDispatchToProps = dispatch => ({
  updateReportDevice: device => dispatch(appRedux.actions.updateReportDevice(device))
});

export const ReportContainer = translate()(connect(mapStateToProps, mapDispatchToProps)(Report));
