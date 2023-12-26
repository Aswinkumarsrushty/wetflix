import React, { useState } from 'react';
import { Button, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';

function Step1({ data, setData, nextStep }) {
  const handleNext = () => {
    // Add validation logic if needed
    nextStep();
  };

  return (
    <Container>
      <Typography variant="h4">Step 1</Typography>
      <TextField
        label="First Name"
        value={data.firstName}
        onChange={(e) => setData({ ...data, firstName: e.target.value })}
        fullWidth
        required
        margin="normal"
      />
      <TextField
        label="Last Name"
        value={data.lastName}
        onChange={(e) => setData({ ...data, lastName: e.target.value })}
        fullWidth
        required
        margin="normal"
      />
      <TextField
        label="Mobile Number"
        value={data.mobileNumber}
        onChange={(e) => setData({ ...data, mobileNumber: e.target.value })}
        fullWidth
        required
        margin="normal"
      />
      <FormControl fullWidth required margin="normal">
        <InputLabel>Dropdown</InputLabel>
        <Select
          label="Dropdown"
          value={data.dropdown}
          onChange={(e) => setData({ ...data, dropdown: e.target.value })}
        >
          <MenuItem value="Option 1">Option 1</MenuItem>
          <MenuItem value="Option 2">Option 2</MenuItem>
          <MenuItem value="Option 3">Option 3</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Address"
        value={data.address}
        onChange={(e) => setData({ ...data, address: e.target.value })}
        fullWidth
        required
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleNext}>Next</Button>
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
      {/* Date and Time selection */}
      {/* You can use libraries like MUI DatePicker and TimePicker here */}
      {/* Example: <MuiDatePicker value={data.date} onChange={(date) => setData({ ...data, date })} /> */}
      {/* Example: <MuiTimePicker value={data.time} onChange={(time) => setData({ ...data, time })} /> */}
      <Button variant="contained" color="primary" onClick={handleNext}>Next</Button>
    </Container>
  );
}

function Step3({ data }) {
  return (
    <Container>
      <Typography variant="h4">Step 3 - Success Booking</Typography>
      <Typography variant="body1">You have successfully booked with the following details:</Typography>
      <ul>
        <li>First Name: {data.firstName}</li>
        <li>Last Name: {data.lastName}</li>
        <li>Mobile Number: {data.mobileNumber}</li>
        <li>Dropdown: {data.dropdown}</li>
        <li>Address: {data.address}</li>
        {/* Display selected date and time */}
      </ul>
    </Container>
  );
}

function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    dropdown: '',
    address: '',
    date: null,
    time: null,
  });

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  return (
    <Container>
      {step === 1 && (
        <Step1 data={formData} setData={setFormData} nextStep={handleNextStep} />
      )}
      {step === 2 && (
        <Step2 data={formData} setData={setFormData} nextStep={handleNextStep} />
      )}
      {step === 3 && <Step3 data={formData} />}
      {step > 1 && (
        <Button variant="outlined" onClick={handlePreviousStep}>Previous</Button>
      )}
    </Container>
  );
}

export default MultiStepForm;
