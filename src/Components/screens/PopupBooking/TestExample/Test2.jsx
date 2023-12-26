import React, { useState } from 'react';
import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from '@mui/material';

function Step1({ data, setData, nextStep }) {
  const handleNext = () => {
    // Add validation logic if needed
    nextStep();
  };

  return (
    <Container>
      <Typography variant="h4">Step 1</Typography>
      {/* ... Your Step 1 content ... */}
      <Button variant="contained" color="primary" onClick={handleNext}>
        Next
      </Button>
    </Container>
  );
}

function Step2({ data, setData, nextStep }) {
  const handleNext = () => {
    // Add validation logic if needed
    nextStep();
  };

  return (
    <Container>
      <Typography variant="h4">Step 2</Typography>
      {/* ... Your Step 2 content ... */}
      <Button variant="contained" color="primary" onClick={handleNext}>
        Next
      </Button>
    </Container>
  );
}

function Step3({ data }) {
  return (
    <Container>
      <Typography variant="h4">Step 3 - Success Booking</Typography>
      {/* ... Your Step 3 content ... */}
    </Container>
  );
}

function MultiStepForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    dropdown: '',
    address: '',
    date: null,
    time: null,
  });

  const steps = ['Step 1', 'Step 2', 'Step 3'];

  const handleNextStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handlePreviousStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Container>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length ? (
        <Step3 data={formData} />
      ) : (
        <>
          {activeStep === 0 && (
            <Step1 data={formData} setData={setFormData} nextStep={handleNextStep} />
          )}
          {activeStep === 1 && (
            <Step2 data={formData} setData={setFormData} nextStep={handleNextStep} />
          )}
          {activeStep > 0 && (
            <Button variant="outlined" onClick={handlePreviousStep}>
              Previous
            </Button>
          )}
        </>
      )}
    </Container>
  );
}

export default MultiStepForm;
