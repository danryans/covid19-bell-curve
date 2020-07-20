import React, { useState } from 'react';
import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';
import PointTooltip from './PointTooltip';

// Returns covid data from API
const getCovidData = () => fetch("https://pomber.github.io/covid19/timeseries.json").then(response => response.json())

// Returns country selected fromm url query parameters (defaults to Australia)
const getCountry = () => {
  const defaultCountry = "Australia";

  // Get parameters from URL
  const urlSearch = window.location.search;
  const urlParameters = new URLSearchParams(urlSearch);

  // Check if country parameter is set, if not use default
  const countryParameter = urlParameters.get("country");

  // Return selected country or default (if selected is null)
  return countryParameter !== null ? countryParameter : defaultCountry;
}

// Adjusts each days entry with current covid cases
const correctCaseValues = (values) => {
  // Iterate each day and generate new active cases
  for (let day of values) {
    const active = Math.max(0, day.confirmed - day.deaths - day.recovered);

    day.active = active;
  }

  // return new collection of values
  return values;
}

// Entry point
const Chart = () => {
  const [data, setData] = useState([]);

  // Fetch API data on initialisation
  React.useEffect(() => {
    // Get country
    const selectedCountry = getCountry();

    // Fetch data, normalise values and set graph value to be based on active cases
    getCovidData()
      .then(response => correctCaseValues(response[selectedCountry]))
      .then(response => setData(response));
  }, []);

  return (
    <ResponsiveContainer>
      <LineChart margin={{top: 0, right: 0, bottom: 0, left: 0}} data={data}>
        <Line type="monotone" dot={false} name="date" dataKey="active" stroke="#ffa000" strokeWidth={3} />
        <Tooltip content={<PointTooltip />}/>
      </LineChart>
    </ResponsiveContainer>
  );
}

export default Chart;