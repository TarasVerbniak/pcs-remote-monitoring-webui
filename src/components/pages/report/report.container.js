// Copyright (c) Microsoft. All rights reserved.

import { connect } from 'react-redux';
import { translate } from 'react-i18next';

import { Report } from './report';

const mapStateToProps = state => ({});

// Wrap the dispatch method
const mapDispatchToProps = dispatch => ({});

export const ReportContainer = translate()(connect(mapStateToProps, mapDispatchToProps)(Report));
