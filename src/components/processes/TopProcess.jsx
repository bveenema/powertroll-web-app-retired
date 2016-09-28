// Libs
import React from 'react';

// components
import InstantDataChip from './InstantDataChip';

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
    let mostRecentDataPoint = sensor.data.length - 1;
    let mostRecentData = sensor.data[mostRecentDataPoint].value;
    return(
      <InstantDataChip
        name={sensor.name}
        type={sensor.dataMeta.type}
        data={mostRecentData}
        battery={sensor.batteryLevel}
        key={sensor._id}
      />
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
