// Libs
import React from 'react';

// Components
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';

//Battery SVGs
import DeviceBatteryFull from 'material-ui/svg-icons/device/battery-full';
import DeviceBattery90 from 'material-ui/svg-icons/device/battery-90';
import DeviceBattery80 from 'material-ui/svg-icons/device/battery-80';
import DeviceBattery60 from 'material-ui/svg-icons/device/battery-60';
import DeviceBattery50 from 'material-ui/svg-icons/device/battery-50';
import DeviceBattery30 from 'material-ui/svg-icons/device/battery-30';
import DeviceBattery20 from 'material-ui/svg-icons/device/battery-20';
import DeviceBatteryAlert from 'material-ui/svg-icons/device/battery-alert';

const InstantDataChip = (props) => {
  // define chip color from prop.type
    let chipColor;
    if (props.type === "default") {chipColor="rgba(224,224,224,0.87)"}
    if (props.type === "temperature") {chipColor="rgba(224,0,0,0.87)"}
    if (props.type === "on/off") {chipColor="rgba(50,50,50,0.87)"}
    if (props.type === "humidity") {chipColor="rgba(0,0,224,0.87)"}

  // define battery icon from prop.battery
    let batteryIcon;
         if (props.battery < 10) {batteryIcon=<DeviceBatteryAlert />}
    else if (props.battery < 20) {batteryIcon=<DeviceBattery20 />}
    else if (props.battery < 30) {batteryIcon=<DeviceBattery30 />}
    else if (props.battery < 50) {batteryIcon=<DeviceBattery50 />}
    else if (props.battery < 60) {batteryIcon=<DeviceBattery60 />}
    else if (props.battery < 80) {batteryIcon=<DeviceBattery80 />}
    else if (props.battery < 90) {batteryIcon=<DeviceBattery90 />}
    else {batteryIcon=<DeviceBatteryFull />}

  return (
    <Chip className="instant-data-chip" backgroundColor={chipColor}>
      <Avatar color="#444" icon={batteryIcon} backgroundColor="#f7f7f7"/>
      {props.name}: {props.data}
    </Chip>
  );
}

InstantDataChip.propTypes = {
  name: React.PropTypes.string.isRequired,
  type: React.PropTypes.string,
  data: React.PropTypes.number.isRequired,
  battery: React.PropTypes.number.isRequired,
}

InstantDataChip.defaultProps = {
  type: "default",
}

export default InstantDataChip;
