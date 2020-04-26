import React from 'react';
import Date from './Date';
import './PointTooltip.css';

// Returns nicer custom tooltip when user hovers over a data point
const PointTooltip = ({ active, payload }) => 
  active && payload.length ?
    <div className="tooltip">
      {payload[0].payload.confirmed} cases
      <Date date={payload[0].payload.date} />
    </div>
  : <></>

export default PointTooltip;