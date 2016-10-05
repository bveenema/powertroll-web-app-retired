// Libs
import React, {Component} from 'react';
import Measure from 'react-measure';

// Material UI Components
import Paper from 'material-ui/Paper';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

// Components
import AddProcess1 from '../components/addProcess/AddProcess1';


class AddProcess extends Component {
  constructor(props){
    super(props)
    this.state = {
      finished: false,
      stepIndex: 0,
      orientation: 'horizontal',
    };
    this.onMeasure = this.onMeasure.bind(this);
  }

  onMeasure(dimensions) {
    console.log("onMeasure", dimensions)

    this.setState({
      orientation: (dimensions.width > 650) ? 'horizontal' : 'vertical',
    });
  }

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (<AddProcess1 />);
      case 1:
        return 'What is an ad group anyways?';
      case 2:
        return 'This is the bit I really care about!';
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }

  renderStepActions(step) {
    const {stepIndex} = this.state;

    return (
      <div style={{margin: '12px 0'}}>
        <RaisedButton
          label={stepIndex === 2 ? 'Finish' : 'Next'}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onTouchTap={this.handleNext}
          style={{marginRight: 12}}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onTouchTap={this.handlePrev}
          />
        )}
      </div>
    );
  }

  render() {
    const {finished, stepIndex, orientation} = this.state;

    return (
      <Measure onMeasure={this.onMeasure}>
        <Paper className="pure-u-1">
          <div  hidden={orientation === 'horizontal'}>
            <Stepper activeStep={stepIndex} orientation='vertical'>
              <Step>
                <StepLabel>General</StepLabel>
                <StepContent>
                  {this.getStepContent(stepIndex)}
                  {this.renderStepActions(stepIndex)}
                </StepContent>
              </Step>
              <Step>
                <StepLabel>Create an ad group</StepLabel>
                <StepContent>
                  {this.getStepContent(stepIndex)}
                  {this.renderStepActions(stepIndex)}
                </StepContent>
              </Step>
              <Step>
                <StepLabel>Create an ad</StepLabel>
                <StepContent>
                  {this.getStepContent(stepIndex)}
                  {this.renderStepActions(stepIndex)}
                </StepContent>
              </Step>
            </Stepper>
          </div>
          <div  hidden={orientation === 'vertical'}>
            <Stepper activeStep={stepIndex} orientation='horizontal'>
              <Step>
                <StepLabel>General</StepLabel>
              </Step>
              <Step>
                <StepLabel>Create an ad group</StepLabel>
              </Step>
              <Step>
                <StepLabel>Create an ad</StepLabel>
              </Step>
            </Stepper>
            <div style={{margin: '0 16px'}}>
              {this.getStepContent(stepIndex)}
              {this.renderStepActions(stepIndex)}
            </div>
          </div>
          {orientation}
          {finished && (
            <p style={{margin: '20px 0', textAlign: 'center'}}>
              <a
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  this.setState({stepIndex: 0, finished: false});
                }}
              >
                Click here
              </a> to reset the example.
            </p>
          )}
        </Paper>
      </Measure>
    );
  }
}

export default AddProcess;
