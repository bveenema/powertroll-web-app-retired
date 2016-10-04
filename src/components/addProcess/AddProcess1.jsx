// libs
import React, { Component } from 'react';
import {find} from 'lodash';

// Material-UI Components
import Paper from 'material-ui/Paper';
import Toggle from 'material-ui/Toggle';

// Components
import SelectFieldWrapper from '../general/SelectFieldWrapper';

// Data
import templates from '../../data/templates';
import setupSettings from '../../data/setup1';

// Styles
const styles = {
  templateSelect: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  }
}

// Component
class AddProcess1 extends Component {
  constructor(props){
    super(props)
    this.state = {
      customize: false,
      currentTemplate: '',
      templateDefined: {
        loadType: null,
        controlType: null,
        controlMethod: null,
      },
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }


  handleChange(event, index, value, id) {
    console.log(id + ": " + value);
    if(id === 'template'){
      this.setState({currentTemplate: value});
      if(value === 'Custom'){
        this.setState({customize: true})
      }else{
        let templateObject = find(templates, {'name':value});
        console.log('template',templateObject);
        this.setState({templateDefined: {
          loadType: templateObject.defaultSettings.loadType,
          controlType: templateObject.defaultSettings.controlType,
          controlMethod: templateObject.defaultSettings.controlMethod,
        }});
      }
    }
  }

  componentDidUpdate(){
    console.log('componentDidUpdate', this);
  }

  handleToggle(){
    if(this.state.currentTemplate === 'Custom'){
      return
    }
    this.setState({customize: !this.state.customize});
  }

  render() {
    // Generate Template Names
      let templateNames = templates.map((template) => {return template.name});
    templateNames.unshift('Custom');
    // Generate Device Names
      let deviceNames = setupSettings.devices.map((device) => {return device.name});
    // Generate Sensor Names
      let sensorNames = setupSettings.sensors.map((sensor) => {return sensor.name});
    // Generate Load Type Names
      let loadTypeNames = setupSettings.loadTypes.map((loadType) => {return loadType.name});
    // Generate Control Type Names
      let controlTypeNames = setupSettings.controlTypes.map((controlType) => {return controlType.name});
    // Generate Control Method Names
      let controlMethodNames = setupSettings.controlMethods.map((controlMethod) => {return controlMethod.name});
    return(
      <div className="select-boxes" style={styles.templateSelect}>
        <SelectFieldWrapper
          id="template"
          floatingLabelText="Template"
          values={templateNames}
          texts={templateNames}
          handleChange={this.handleChange}
        />
        <SelectFieldWrapper
          id="device"
          floatingLabelText="Select a Device"
          values={deviceNames}
          texts={deviceNames}
          handleChange={this.handleChange}
        />
        <SelectFieldWrapper
          id="sensor"
          floatingLabelText="Select a Sensor"
          values={sensorNames}
          texts={sensorNames}
          handleChange={this.handleChange}
        />
        <Toggle
          className="pure-u-1-3"
          label="Customize"
          labelPosition="right"
          toggled={this.state.customize}
          onToggle={this.handleToggle}
        />


        <SelectFieldWrapper
          id="loadType"
          floatingLabelText="Type of Load"
          values={loadTypeNames}
          texts={loadTypeNames}
          initialValue={this.state.templateDefined.loadType}
          disabled={!this.state.customize}
          handleChange={this.handleChange}
        />
        <SelectFieldWrapper
          id="controlType"
          floatingLabelText="Type of Control"
          values={controlTypeNames}
          texts={controlTypeNames}
          initialValue={this.state.templateDefined.controlType}
          disabled={!this.state.customize}
          handleChange={this.handleChange}
        />
        <SelectFieldWrapper
          id="controlMethod`"
          floatingLabelText="Control Method"
          values={controlMethodNames}
          texts={controlMethodNames}
          initialValue={this.state.templateDefined.controlMethod}
          disabled={!this.state.customize}
          handleChange={this.handleChange}
        />
      </div>
    )
  }
}

AddProcess1.propTypes = {

}

AddProcess1.defaultProps = {

}

export default AddProcess1;
