import React, { useState } from "react";
import "./MyBookings.scss";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MyBookingsTable from "./MyBookingsTable";

const CustomTabPanel = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const BasicTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="MyBookings">
      <div className="HeadText">My Bookings</div>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", width: "480px" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="All" {...a11yProps(0)} className="MyBookingTabs" />
            <Tab label="Upcoming" {...a11yProps(1)} className="MyBookingTabs" />
            <Tab
              label="Cancelled"
              {...a11yProps(2)}
              className="MyBookingTabs"
            />
            <Tab
              label="Successful"
              {...a11yProps(3)}
              className="MyBookingTabs"
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <MyBookingsTable />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Upcoming
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Cancelled
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          Successful
        </CustomTabPanel>
      </Box>
    </div>
  );
};

export default BasicTabs;
