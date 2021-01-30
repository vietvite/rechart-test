import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from 'recharts';
import { mockChart } from '../mocks/chart.mock';

export default class MonotoneChart extends PureComponent {
  render() {
    return (
      <LineChart
        width={1200}
        height={600}
        data={mockChart(9)}
        margin={{
          top: 20, right: 50, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <ReferenceLine x="4" stroke="red" label="Max PV PAGE" />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth="3" />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeWidth="3" />
      </LineChart>
    );
  }
}
