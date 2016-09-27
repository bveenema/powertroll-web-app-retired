// Libs
import React from 'react';

// components
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import DeviceBattery90 from 'material-ui/svg-icons/device/battery-90';

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
      <Chip key={sensor._id}>
        <Avatar color="#444" icon={<DeviceBattery90 />} />
        {sensor.name}: {mostRecentData}
      </Chip>
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
