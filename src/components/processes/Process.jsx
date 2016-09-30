// Libs
import React, {Component} from 'react';
import {pick} from 'lodash';

// Material-UI Components
import {Card, CardActions, CardHeader, CardMedia, CardText} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import NavigationMoreVert from 'material-ui/svg-icons/navigation/more-vert'

// src Components
import InstantDataChip from './InstantDataChip';
import ActionButton from './ActionButton';
import SetPointForm from './SetPointForm';
import Chart from './Chart';

// Styles
const styles = {
  header:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 8px',
  },
  headerButton: {
    padding: '4px',
  },
  objectRowDiv: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    padding: '0 6px',
  },
  actions: {
    marginRight: '0px',
    maxWidth: '200px',
  },
}

// Component
class Process extends Component {
  constructor(props){
    super(props);
    this.state = {
      expanded: this.props.initiallyExpanded,
      hideOnExpand: {
        display: 'block',
      }
    };
    this.handleExpandChange = this.handleExpandChange.bind(this);
  }

  handleExpandChange = (expanded) => {
    console.log('handleExpandChange');
    if(expanded){
      this.setState({
        expanded: expanded,
        hideOnExpand: {
          display: 'none',
        },
      });
    }else{
      this.setState({
        expanded: expanded,
        hideOnExpand: {
          display: 'block',
        }
      });
    }
  };

  handleExpand = () => {
    console.log('handleExpand');
    this.setState({expanded: true});
  };

  handleButton(e) {
    console.log('handleButton');
    e.stopPropagation();
  }

  render() {
    let sensors = this.props.data.sensors;
    let setpoints = this.props.data.processes;
    let actions = this.props.data.actions;

    // Get Data Point Arrays
    let dataPoints = sensors.map((sensor) => {
      return pick(sensor, ['dataMeta','data']);
    });

    // Create Instant Datas
    let instantDatas = sensors.map((sensor) =>{
      let mostRecentDataPoint = sensor.data.length - 1;
      let mostRecentData = sensor.data[mostRecentDataPoint].value;
      return(
        <InstantDataChip
          name={sensor.name}
          type={sensor.dataMeta.type}
          data={mostRecentData}
          unit={sensor.dataMeta.unit}
          battery={sensor.batteryLevel}
          key={sensor._id}
        />
      );
    });
    // Create Setpoint/Action Buttons
    let setpointForms = setpoints.map((setpoint) => {
      return(
        <SetPointForm
          controlled={setpoint.controlled}
          value={setpoint.value}
          unit={setpoint.unit}
          sensorName={setpoint.sensorName}
          key={setpoint._id}
        />
      )
    });
    let actionButtons = actions.map((action) => {
      return(
        <ActionButton
          name={action.name}
          type={action.type}
          duration={action.duration}
          while={action.while}
          disabled={false}
          key={action._id}
        />
      )
    });
    // Create Device info section

    return (
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>

        <div onTouchTap={this.handleExpand} style={this.state.hideOnExpand} >
          {instantDatas[0]}{instantDatas[1]}{actionButtons[0]}
        </div>

        <CardHeader
          title={this.props.data.meta.name}
          subtitle={this.props.data.device.name}
          style={styles.header}
          expandable={true}
          actAsExpander={true}
        >
          <IconButton style={styles.headerButton}><NavigationMoreVert /></IconButton>
        </CardHeader>

        <CardMedia expandable={true}>
          <Chart
            data={dataPoints}
            height={200}
            padding={30}
          />
        </CardMedia>

        <CardText style={styles.objectRowDiv}
        expandable={true}>
          {instantDatas}
        </CardText>

        <CardActions style={styles.objectRowDiv} className="pure-g"
        expandable={true}>
          <div className="pure-u-1-2" style={styles.actions}>{setpointForms}</div>
          <div className="pure-u-1-2" style={styles.actions}>{actionButtons}</div>
        </CardActions>
      </Card>
    );
  }
};

export default Process;
