// Libs
import React from 'react';

// components
import Chip from 'material-ui/Chip';

const TopProcess = (props) => {
  let sensors = props.data.sensors;
  let type;
  if(props.data.meta.type === "setpoint"){
    type = "Setpoint";
  }else {
    type = "fuck off";
  }
  // Create Chart
  // Create Indicator Dots
  // Create Instant Datas
  let instantData = sensors.map((sensor) =>{
    return(
      <Chip key={sensor._id}>{sensor.name}</Chip>
    );
  });
  // Create Setpoint/Action Buttons
  // Create Device info section

  return (
    <div className="top-process">
      <h1>{props.data.meta.name}</h1>
      <h2>Type: {type}</h2>
      {instantData}
    </div>
  );
};

export default TopProcess;
