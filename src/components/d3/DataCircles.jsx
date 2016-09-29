// unfinished/src/components/data-circles.jsx
import React from 'react';
import {isoParse} from 'd3';

const renderCircles = (props) => {
  return (coords, index) => {
    const circleProps = {
      cx: props.xScale(isoParse(coords.date)),
      cy: props.yScale(coords.value),
      r: 2,
      key: index
    };
    return <circle {...circleProps} />;
  };
};

const DataCircles = (props) => {
  return <g>{ props.data.map(renderCircles(props)) }</g>
}

export default DataCircles;
