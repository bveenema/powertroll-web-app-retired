//Libs
import React from 'react';

//Material UI Components
import {
  Step,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';

// Components
import StepperWrapper from '../components/addProcess/StepperWrapper';
import AddProcess1 from '../components/addProcess/AddProcess1';

const Test = (props) => {
  return (
    <StepperWrapper
      linear={false}
      finish={'Add Process'}
      onFinish={() => {console.log('finished!')}}
    >
      <Step>
        <StepLabel>
          test label 1
        </StepLabel>
        <StepContent>
          test content 1
        </StepContent>
      </Step>
      <Step>
        <StepLabel>
          test label 2
        </StepLabel>
        <StepContent>
          test content 2
        </StepContent>
      </Step>
    </StepperWrapper>
  )
}

export default Test;
