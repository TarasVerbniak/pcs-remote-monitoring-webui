import React, { Component } from 'react';
import moment from 'moment';
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, Label } from 'recharts';

import './chart.css';

export default class Report extends Component {
  render () {
    let { data, reportCurrentNode } = this.props;
    if (!data) return null;

    data = Object.keys(data).map(name => {
      const { te, ti, tse, tsi } = data[name].nodes[reportCurrentNode];
      return {
        name: moment.unix(name).format("DD:MM, HH:MM"),
        'Inside air temp (Ti)': ti,
        'Inside aisurfacer temp (Tsi)': tsi,
        'Outside air temp (Te)': te,
        'Outside surface temp (Tse)': tse
      };
    });

    return (
      <ResponsiveContainer height={370} width="100%">
        <LineChart data={data} margin={{ top: 20, right: 50, left: 20, bottom: 5 }}>
          <CartesianGrid horizontal={false} strokeDasharray="3 3" />
          <XAxis dataKey="name">
            <Label value="Date and time (Local)" offset={-15} position='insideBottomRight' fill="white"/>
          </XAxis>
          <YAxis>
            <Label value="Temperatrure [°C]" angle={-90} position='insideLeft' fill="white"/>
          </YAxis>
          <Tooltip />
          <Legend iconType='rect'/>
          <Line type="monotone" dataKey="Inside air temp (Ti)" stroke="#FE7F0C"/>
          <Line type="monotone" dataKey="Inside aisurfacer temp (Tsi)" stroke="#E1E225" />
          <Line type="monotone" dataKey="Outside air temp (Te)" stroke="#1F78B4" />
          <Line type="monotone" dataKey="Outside surface temp (Tse)" stroke="#29E3E0" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
