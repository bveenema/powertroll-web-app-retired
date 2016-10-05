// Libs
import React, {Component} from 'react';
import Measure from 'react-measure';
import { zip } from 'lodash';

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


class StepperWrapper extends Component {
  constructor(props){
    super(props)
    this.state = {
      stepIndex: 0,
      orientation: 'horizontal',
    };
    this.verticalStepContent = [];
    this.horizontalStepContent = [];
    this.onMeasure = this.onMeasure.bind(this);
    this.renderStepContent = this.renderStepContent.bind(this);
    this.renderStepContentFromChildren = this.renderStepContentFromChildren.bind(this);
  }

  componentWillMount(){
    console.log("children", this.props.children);
    this.renderStepContentFromChildren();
    let stepContent = this.renderStepContent();
    this.verticalStepContent = stepContent[0];
    this.horizontalStepContent = stepContent[1];
  }

  onMeasure(dimensions) {
    this.setState({
      orientation: (dimensions.width > 650) ? 'horizontal' : 'vertical',
    });
  }

  handleNext = () => {
    const {stepIndex} = this.state;
    let numSteps = this.props.children.length - 1;
    if(stepIndex === numSteps){
      this.props.onFinish();
    }else{
      this.setState({
        stepIndex: stepIndex + 1,
        finished: stepIndex >= numSteps,
      });
    }

  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({
        stepIndex: stepIndex - 1,
        finished: false,
      });
    }
  };

  renderStepContent(){
    let stepArray = zip(this.props.content, this.props.labels);
    let verticalStepContent = stepArray.map((step,index) => {
      return (
        <Step key={index}>
          <StepLabel>{step[1]}</StepLabel>
            <StepContent>
              {step[0]}
              {this.renderStepActions(index)}
            </StepContent>
        </Step>
      );
    });
    let horizontalStepLabels = stepArray.map((step,index) => {
      return (
        <Step key={index}>
          <StepLabel>{step[1]}</StepLabel>
        </Step>
      );
    });
    return [verticalStepContent,horizontalStepLabels];
  }

  renderStepContentFromChildren() {
    let horizontalStepContent = React.Children.map(this.props.children, child => {
      let newSubChildren = child.props.children[0];
      return React.cloneElement(child, {
        children: newSubChildren,
      });
    });
    console.log('horizontal', horizontalStepContent);
  }

  getHorizontalStepContent(stepIndex) {
    return 'yes';
  }

  renderStepActions(step) {
    let numSteps = this.props.children.length - 1;
    return (
      <div style={{margin: '12px 0'}}>
        <RaisedButton
          label={step === numSteps ? this.props.finish : 'Next'}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onTouchTap={this.handleNext}
          style={{marginRight: 12}}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disabled={step === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onTouchTap={this.handlePrev}
          />
        )}
      </div>
    );
  }

  render() {
    const {stepIndex, orientation} = this.state;

    return (
      <Measure onMeasure={this.onMeasure}>
        <Paper className="pure-u-1">
          <div  hidden={orientation === 'horizontal'}>
            <Stepper
              activeStep={stepIndex}
              orientation='vertical'
              linear={this.props.linear}>
              {this.props.children}
            </Stepper>
          </div>
          <div  hidden={orientation === 'vertical'}>
            <Stepper
              activeStep={stepIndex}
              orientation='horizontal'
              linear={this.props.linear}>
            </Stepper>
            <div style={{margin: '0 16px'}}>
              {this.getHorizontalStepContent(stepIndex)}
              {this.renderStepActions(stepIndex)}
            </div>
          </div>
        </Paper>
      </Measure>
    );
  }
}

StepperWrapper.propTypes = {
  content: React.PropTypes.array.isRequired,
  labels: React.PropTypes.array.isRequired,
  finish: React.PropTypes.string.isRequired,
  linear: React.PropTypes.bool,
}

StepperWrapper.defaultProps = {
  linear: false,
}


export default StepperWrapper;
