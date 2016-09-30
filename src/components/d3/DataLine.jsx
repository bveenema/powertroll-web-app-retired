// Libs
import React from 'react';

const renderLine = (props) => {
  const circleProps = {
    cx: 50,
    cy: 50,
    r: 10,
    key: 7,
  }
  return <circle {...circleProps} />;
};


const DataLine = (props) => {
  return(
    <g className="data-line">{renderLine(props)}</g>
  );
}

DataLine.propTypes = {
  xScale: React.PropTypes.func.isRequired,
  yScale: React.PropTypes.func.isRequired,
  data: React.PropTypes.arrayOf(React.PropTypes.shape({
    date: React.PropTypes.string.isRequired,
    value: React.PropTypes.number.isRequired,
  })).isRequired,
}

export default DataLine;
