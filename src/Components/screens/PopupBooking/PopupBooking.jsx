import React, { useState } from "react"
import {
  Button,
  Container,
  FormControl,
  MenuItem,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from '@mui/material';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import ToggleButton from "@mui/material/ToggleButton"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import { ReactComponent as AccountHumanIcon } from '../../assets/SvgIcons/AccountHumanIcon.svg'
import { ReactComponent as HomeIcon } from '../../assets/SvgIcons/HomeIcon.svg'
import { ReactComponent as LocationIcon } from '../../assets/SvgIcons/LocationIcon.svg'
import { ReactComponent as LocationLocateIcon } from '../../assets/SvgIcons/LocationLocateIcon.svg'
import { ReactComponent as SuccessBookingHomeIcon } from '../../assets/SvgIcons/SuccessBookingHomeIcon.svg'
import { ReactComponent as SuccessBookingDateIcon } from '../../assets/SvgIcons/SuccessBookingDateIcon.svg'
import { ReactComponent as SuccessBookingTimeIcon } from '../../assets/SvgIcons/SuccessBookingTimeIcon.svg'
import { ReactComponent as PopupCancelIcon } from '../../assets/SvgIcons/PopupCancelIcon.svg'
import { ReactComponent as EditIcon } from '../../assets/SvgIcons/EditIcon.svg'
import MuiPhoneNumber from 'material-ui-phone-number';
import './PopupBooking.scss';
import SuccessImage from '../../assets/images/SuccessImage.png'
import Test4 from './TestExample/Test4'
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';

function Step1({ data, setData, nextStep }) {
  const handleNext = () => {
    nextStep()
  }

  return (
    <Container>
      <div className="FirstNameLastName">
        <div>
          <label>First Name:</label>
          <div className="FirstName" style={{ marginTop: "10px" }}>
            <FormControl sx={{ width: "44ch" }}>
              <OutlinedInput
                startAdornment={
                  <InputAdornment position="start">
                    <AccountHumanIcon />
                  </InputAdornment>
                }
                name="fname"
                value={data.firstName}
                onChange={e => setData({ ...data, firstName: e.target.value })}
                placeholder="First name"
              />
            </FormControl>
          </div>
        </div>
        <div>
          <label>Last Name:</label>
          <div className="LastName" style={{ marginTop: "10px" }}>
            <FormControl sx={{ width: "44ch" }}>
              <OutlinedInput
                startAdornment={
                  <InputAdornment position="start">
                    <AccountHumanIcon />
                  </InputAdornment>
                }
                name="lname"
                value={data.lastName}
                onChange={e => setData({ ...data, lastName: e.target.value })}
                placeholder="Last name"
              />
            </FormControl>
          </div>
        </div>
      </div>
      <div className="PhoneNumberDropdown">
        <div>
          <label>Phone:</label>
          <div className="PhoneNumber" style={{ marginTop: "10px" }}>
            <MuiPhoneNumber
              sx={{ width: "44ch" }}
              placeholder="Mobile number"
              defaultCountry={"in"}
              name="phoneNumber"
              value={data.mobileNumber}
              onChange={e => setData({ ...data, mobileNumber: e.target.value })}
              required
            />
          </div>
        </div>

        <div>
          <label>Booking type:</label> <br />
          <div className="Dropdown" style={{ marginTop: "10px" }}>
            <TextField
              sx={{ width: "44ch" }}
              id="filled-select-currency"
              variant="filled"
              select
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <HomeIcon />
                  </InputAdornment>
                )
              }}
              name="TechnicalVisit"
              value={data.dropdown || "TechnicalVisit"}
              onChange={e => setData({ ...data, dropdown: e.target.value })}
            >
              <MenuItem value="TechnicalVisit">Technical visit</MenuItem>
              <MenuItem value="ServiceVisit">Service visit</MenuItem>
            </TextField>
          </div>
        </div>
      </div>
      <div className="AddressContainer">
        <label>Address:</label>
        <div className="Address" style={{ marginTop: "10px" }}>
          <FormControl sx={{ width: "89ch" }}>
            <OutlinedInput
              startAdornment={
                <InputAdornment position="start">
                  <LocationIcon />
                </InputAdornment>
              }
              name="address"
              value={data.address}
              onChange={e => setData({ ...data, address: e.target.value })}
              placeholder="Urna urna sem, sodales nibh laoreet aliquam adipiscing pulvinar arcu."
              endAdornment={
                <InputAdornment position="end">
                  <LocationLocateIcon />
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
      </div>
      <div
        className="StepOneButtons"
        style={{
          marginTop: "48px",
          display: "flex",

          gap: "12px"
        }}
      >
      <div style={{display:'flex', marginLeft:'73%'}}>
        <div className="CancelButton">
          <Button
            style={{
              height: "48px",
              padding: "0px 24px",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              borderRadius: "8px",
              border: "1px solid #CAD4DE"
            }}
          >
            Cancel
          </Button>
        </div>
        <div className="ContinueButton">
          <Button
            onClick={handleNext}
            style={{
              height: "48px",
              padding: "0px 24px",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              borderRadius: "8px",
              background: "#4D8BFF",
              color: "#fff",
              fontSize: "16px",
              marginLeft:'12px'
            }}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
    </Container>
  )
}

function Step2({ data, setData, nextStep, handleConfirm, prevStep }) {

  const handleNext = () => {
    // Add validation logic if needed
    nextStep();
  };

  const handleGoBack = () => {
    prevStep(); // Go back to the previous step
  };

  const [alignment, setAlignment] = React.useState('morning1');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment)
  }

  const DateTimeHeaderStyle = {
    color: "#1F1F1F",
    fontFamily: "Figtree",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "24px"
  }

  const MorAftEveStyle = {
    color: "#4D8BFF",
    fontFamily: "Figtree",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "20px"
  }

  return (
    <Container>
      <div className="DateTimePicker">
        <div className="DatePicker">
          <div style={DateTimeHeaderStyle}>Select a date:</div>
          <div className="Date">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateCalendar"]}>
                <DateCalendar
                  referenceDate={dayjs("2022-04-17")}
                  views={["year", "month", "day"]}
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>
        </div>
        <div className='TimePicker'>
        <div style={DateTimeHeaderStyle}>Select a time slot:</div>
          <div className="MrngAfnEve">
            <div className="Morning">
            <div style={MorAftEveStyle}>Morning</div>
              <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
                sx={{marginTop:'12px'}}
              >
                <ToggleButton value="morning1" style={{ marginRight: '8px' }}>10:00AM</ToggleButton>
                <ToggleButton value="morning2" style={{ marginRight: '8px' }}>10:30AM</ToggleButton>
                <ToggleButton value="morning3" style={{ marginRight: '8px' }}>11:00AM</ToggleButton>
                <ToggleButton value="morning4" style={{ marginRight: '8px' }}>11:30AM</ToggleButton>
              </ToggleButtonGroup>
            </div>
            <div className="Afternoon">
            <div style={MorAftEveStyle}>Afternoon</div>
              <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
                sx={{marginTop:'12px'
                }}
              >
                <ToggleButton value="afternoon1" style={{ marginRight: '8px' }}>12:00PM</ToggleButton>
                <ToggleButton value="afternoon2" style={{ marginRight: '8px' }}>12:30PM</ToggleButton>
                <ToggleButton value="afternoon3" style={{ marginRight: '8px' }}>01:00PM</ToggleButton>
                <ToggleButton value="afternoon4" style={{ marginRight: '8px' }}>01:30PM</ToggleButton>
                <ToggleButton value="afternoon5" style={{ marginRight: '8px' }}>02:00PM</ToggleButton>
                <ToggleButton value="afternoon6" style={{ marginRight: '8px',marginTop:'8px' }}>02:30PM</ToggleButton>
                <ToggleButton value="afternoon7" style={{ marginRight: '8px',marginTop:'8px' }}>03:00PM</ToggleButton>
              </ToggleButtonGroup>
            </div>
            <div className="Evening">
            <div style={MorAftEveStyle}>Evening</div>
              <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
                sx={{marginTop:'12px'}}
              >
                <ToggleButton value="evening1" style={{ marginRight: '8px' }}>05:00PM</ToggleButton>
                <ToggleButton value="evening2" style={{ marginRight: '8px' }}>05:30PM</ToggleButton>
                <ToggleButton value="evening3" style={{ marginRight: '8px' }}>06:00PM</ToggleButton>
                <ToggleButton value="evening4" style={{ marginRight: '8px' }}>06:30PM</ToggleButton>
                <ToggleButton value="evening5" style={{ marginRight: '8px' }}>07:00PM</ToggleButton>
                <ToggleButton value="evening6" style={{ marginRight: '8px',marginTop:'8px' }}>07:30PM</ToggleButton>
                <ToggleButton value="evening6" style={{ marginRight: '8px',marginTop:'8px' }}>08:00PM</ToggleButton>
              </ToggleButtonGroup>
            </div>
          </div>
        </div>
    </div> 
      <div className='PreNexButton'>
        <Button 
          style={{
              height: "48px",
              padding: "0px 24px",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              borderRadius: "8px",
              border: "1px solid #CAD4DE"
            }}
        variant="outlined" onClick={handleGoBack}>Go Back</Button> {/* Add Go Back button */}
        <Button
           style={{
              height: "48px",
              padding: "0px 24px",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              borderRadius: "8px",
              background: "#4D8BFF",
              color: "#fff",
              fontSize: "16px"
            }}
         variant="outlined" onClick={handleConfirm}>Confirm</Button>
      </div>
    </Container>
  )
}

function Step3({ data, selectedDate, selectedTime }) {
  return (
    <Container>
      <div style={{textAlign:'center'}}>
      <img src={SuccessImage} alt="Success" />
      <h3>Your service request has been booked</h3>
      <div>We will reach out to you on your registered mobile number for further communication</div>
      <div style={{display:'flex',justifyContent:'space-evenly',marginTop:'36px'}}> 
        <div className='One' style={{display:'flex',alignItems:'center'}}>
          <div style={{height:'60px',width:'60px'}}><SuccessBookingHomeIcon /></div> <div style={{marginLeft:'12px'}}>{data.dropdown}</div>
        </div>
        <div className='Two' style={{display:'flex',alignItems:'center'}}>
          <div><SuccessBookingDateIcon /></div> <div style={{marginLeft:'12px'}}>{selectedDate ? selectedDate.format('YYYY-MM-DD') : 'Not selected'}</div>
        </div>
        <div className='Three' style={{display:'flex',alignItems:'center'}}>
          <div><SuccessBookingTimeIcon /></div><div style={{marginLeft:'12px'}}>{selectedTime ? selectedTime : 'Not selected'}</div>
        </div>
      </div>
      <div className='AddressandStatus'>
          <div className='Address'>
            <div className='AddressData'> 
              <h5>Address</h5>
              <p>{data.address}</p>
              <button>Edit Address <EditIcon /></button>
            </div>
          </div>
          <div className='Status'>
                  <div className="frame">
              <div className="div">
                <div className="div-2">
                  <div className="ellipse" />
                  <img className="vector" alt="Vector" src="" />
                </div>
                <img className="line" alt="Line" src="" />
                <div className="ellipse-2" />
                <img className="line" alt="Line" src="line-22.svg" />
                <div className="ellipse-2" />
                <img className="line" alt="Line" src="line-21.svg" />
                <div className="ellipse-2" />
              </div>
              <div className="div-3">
                <div className="div-4">
                  <div className="text-wrapper">Appointment created</div>
                  <div className="text-wrapper-2">08/09/2023, 09:30AM</div>
                </div>
                <div className="div-4">
                  <div className="text-wrapper">Technician assigned</div>
                  <div className="text-wrapper-2">08/09/2023, 09:30AM</div>
                </div>
                <div className="div-4">
                  <div className="text-wrapper">Technician on the way</div>
                </div>
                <div className="div-4">
                  <div className="text-wrapper">Completed</div>
                  <div className="text-wrapper-2">Scheduled on 08/09/2023, 09:30AM</div>
                </div>
              </div>
            </div>
          </div>
      </div>
      {/* <ul>
        <li>First Name: {data.firstName}</li>
        <li>Last Name: {data.lastName}</li>
        <li>Mobile Number: {data.mobileNumber}</li>
        <li>Dropdown: {data.dropdown}</li>
        <li>Address: {data.address}</li>
        <li>Date: {selectedDate ? selectedDate.format('YYYY-MM-DD') : 'Not selected'}</li>
        <li>Time: {selectedTime ? selectedTime : 'Not selected'}</li>
      </ul> */}
    </div>
    </Container>
  )
}

function PopupBooking() {
  const [activeStep, setActiveStep] = useState(0)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    dropdown: '',
    address: '',
  });
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const steps = ['Fill in general information', 'Choose Date & Time'];

  const handleNextStep = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleConfirm = () => {
    setBookingConfirmed(true);
    handleNextStep();
  };

  return (
    <div>
    <div style={{textAlign:'right',cursor:'pointer'}}><PopupCancelIcon /></div>
    <Container className='PopupBooking'>
      <h3
        style={{
          color:'#181C20',
          textAlign: 'center',
          fontSize: '32px',
          fontStyle: 'normal',
          fontWeight: '500',
          letterSpacing: '-0.6px'
        }}
      >Book a service</h3>
      {activeStep !== steps.length && (
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      )}
      {activeStep === 0 && (
        <Step1 data={formData} setData={setFormData} nextStep={handleNextStep} />
      )}
      {activeStep === 1 && (
        <Step2
          data={formData}
          setData={setFormData}
          nextStep={handleNextStep}
          handleConfirm={handleConfirm}
        />
      )}
      {activeStep === 2 && !bookingConfirmed && (
        <div className='PreNexButton'>
          <Button variant="outlined" onClick={handleNextStep}>
            Confirm
          </Button>
        </div>
      )}
      {activeStep === 2 && bookingConfirmed && (
        <Step3 data={formData} selectedDate={selectedDate} selectedTime={selectedTime} />
      )}
    </Container>
    </div>
  )
}

export default PopupBooking

