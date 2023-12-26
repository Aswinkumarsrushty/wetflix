import React, { useState } from 'react';
import './GeneralInformation.scss';
import MuiPhoneNumber from 'material-ui-phone-number';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { ReactComponent as AccountHumanIcon } from '../../../assets/SvgIcons/AccountHumanIcon.svg';
import { ReactComponent as DropdownIcon } from '../../../assets/SvgIcons/DropdownIcon.svg';
import { ReactComponent as LocationIcon } from '../../../assets/SvgIcons/LocationIcon.svg';
import { ReactComponent as HomeIcon } from '../../../assets/SvgIcons/HomeIcon.svg'
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';


export default function GeneralInformationStep({ onNext }) {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    phone: '',
    TechnicalVisit: 'Technical visit', // Default value
    ServiceVisit: '',
    address: '',
  });

  const Dropdowns = [
    {
      value: 'Technical visit',
      label: 'Technical visit',
    },
    {
      value: 'Service visit',
      label: 'Service visit',
    },
  ];

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNextClick = () => {
    onNext();
  };

  const shouldDisplayInputFields = formData.TechnicalVisit === 'Technical visit';

  return (
    <div className="Form">
      <form>
        <div className="FirstNameLastName">
          {shouldDisplayInputFields && (
            <div>
              <label>First Name:</label>
              <div className="FirstName">
              <FormControl sx={{ width: '44ch' }}>
                  <OutlinedInput
                    startAdornment={
                      <InputAdornment position="start">
                        <AccountHumanIcon />
                      </InputAdornment>
                    }
                    name="fname"
                    value={formData.fname}
                    onChange={(e) => handleChange('fname', e.target.value)}
                  />
                </FormControl>
              </div>
            </div>
          )}
          {shouldDisplayInputFields && (
            <div>
              <label>Last Name:</label>
              <div className="LastName">
                <FormControl sx={{ width: '44ch' }}>
                  <OutlinedInput
                    startAdornment={
                      <InputAdornment position="start">
                        <AccountHumanIcon />
                      </InputAdornment>
                    }
                    name="lname"
                    value={formData.lname}
                    onChange={(e) => handleChange('lname', e.target.value)}
                  />
                </FormControl>
              </div>
            </div>
          )}
        </div>
        <div className="PhoneDropdown">
          <div>
            <label>Phone:</label>
            <div className="PhoneNumber">
              <MuiPhoneNumber
                defaultCountry={'in'}
                name="phone"
                value={formData.phone}
                onChange={(value) => handleChange('phone', value)}
                placeholder="Mobile Number"
                required
              />
            </div>
          </div>
          <div>
            <label>Booking type:</label> <br />
            <div className="Dropdown">
              <TextField
                id="filled-select-currency"
                select
                defaultValue="Technical visit"
                variant="filled"
                IconComponent={DropdownIcon}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <HomeIcon />
                    </InputAdornment>
                  ),
                }}
                name="TechnicalVisit"
                value={formData.TechnicalVisit}
                onChange={(e) => handleChange('TechnicalVisit', e.target.value)}
              >
                {Dropdowns.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </div>
        </div>
        <div className="Address">
          <label>Address:</label>
          <br />
          <div className="AddressInput">
          <FormControl sx={{ width: '89ch' }}>
                  <OutlinedInput
                    startAdornment={
                      <InputAdornment position="start">
                        <LocationIcon />
                      </InputAdornment>
                    }
                    name="address"
                    value={formData.address}
                    onChange={(e) => handleChange('lname', e.target.value)}
                  />
                </FormControl>
          </div>
        </div>
        <button onClick={handleNextClick}>Next</button>
      </form>
    </div>
  );
}
