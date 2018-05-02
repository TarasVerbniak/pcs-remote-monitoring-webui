// Copyright (c) Microsoft. All rights reserved.

import moment from 'moment';
import {
  DEFAULT_TIME_FORMAT,
  EMPTY_FIELD_VAL,
  MAX_DATE_STRING,
  gridValueFormatters
} from 'components/shared/pcsGrid/pcsGridConfig';

const { checkForEmpty } = gridValueFormatters;

const formatTime = (value) => {
  if (value) {
    if (value === MAX_DATE_STRING) return '';
    const time = moment.utc(value).local();
    return checkForEmpty((time.unix() > 0) ? time.format(DEFAULT_TIME_FORMAT) : '');
  }
  return value;
}

export const TimeRenderer = ({ value }) => {
  const formattedTime = formatTime(value);
  return (
    formattedTime ? formattedTime : EMPTY_FIELD_VAL
  );
}
