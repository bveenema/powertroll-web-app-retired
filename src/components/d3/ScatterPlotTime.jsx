// Libs
import React from 'react';
import {scaleLinear, scaleTime, extent, isoParse} from 'd3';

// Components
import DataCircles  from './DataCircles';
import DataLine from './DataLine';
import XYAxis from './XYAxis';

// Returns the largest X coordinate from the data set
const xDomain   = (data)  => extent(data, (d) => isoParse(d.date));

// Returns the higest Y coordinate from the data set
const yDomain   = (data)  => extent(data, (d) => d.value);

// Returns a function that "scales" X coordinates from the data to fit the chart
const xScale = (props) => {
  return scaleTime()
    .domain(xDomain(props.data))
    .range([props.padding, props.width - props.padding * 2]);
};

// Returns a function that "scales" Y coordinates from the data to fit the chart
const yScale = (props) => {
  return scaleLinear()
    .domain(yDomain(props.data))
    .range([props.height - props.padding, props.padding]);
};

const ScatterPlotTime = (props) => {
  const scales = { xScale: xScale(props), yScale: yScale(props) };
  return (
    <svg width={props.width} height={props.height}>
      <DataCircles
        xScale={scales.xScale}
        yScale={scales.yScale}
        data={props.data}
      />
      <DataLine
        xScale={scales.xScale}
        yScale={scales.yScale}
        data={props.data}
      />
      <XYAxis {...props} {...scales} />
    </svg>
  );
}

export default ScatterPlotTime;
