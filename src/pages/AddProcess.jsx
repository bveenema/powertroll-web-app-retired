// Libs
import React, {Component} from 'react';

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
    const {finished, stepIndex} = this.state;

    return (
        <Paper className="pure-u-1" style={{height: '1000px', margin: 'auto'}}>
          <Stepper activeStep={stepIndex} orientation="vertical">
            <Step>
              <StepLabel>General</StepLabel>
              <StepContent>
                This is some content you need to render
                {this.renderStepActions(0)}
              </StepContent>
            </Step>
            <Step>
              <StepLabel>Create an ad group</StepLabel>
              <StepContent>
                <p>An ad group contains one or more ads which target a shared set of keywords.</p>
                {this.renderStepActions(1)}
              </StepContent>
            </Step>
            <Step>
              <StepLabel>Create an ad</StepLabel>
              <StepContent>
                <p>
                  Try out different ad text to see what brings in the most customers,
                  and learn how to enhance your ads using features like ad extensions.
                  If you run into any problems with your ads, find out how to tell if
                  they're running and how to resolve approval issues.
                </p>
                {this.renderStepActions(2)}
              </StepContent>
            </Step>
          </Stepper>
          <div style={contentStyle}>
            <p>{this.getStepContent(stepIndex)}</p>
            <div style={{marginTop: 12}}>
              <FlatButton
                label="Back"
                disabled={stepIndex === 0}
                onTouchTap={this.handlePrev}
                style={{marginRight: 12}}
              />
              <RaisedButton
                label="Next"
                disabled={stepIndex === 2}
                primary={true}
                onTouchTap={this.handleNext}
              />
            </div>
          </div>
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
    );
  }
}

export default AddProcess;
