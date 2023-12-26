import React, { useEffect, useLayoutEffect, useState } from "react";
import Styles from "./Index.module.css";
import WetflixLogo from "../../assets/images/WetflixLogo.png";
import ProfileImage from "../../assets/images/ProfileImage.png";
// import ToggleButton from '@mui/material/ToggleButton';
// import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { ToggleButtonGroup, ToggleButton,} from '@mui/material'

import WetFlixMobile from "../../assets/images/WetFlixMobile.png";
import { Link } from "react-router-dom";
import {ReactComponent as DashBoardIcon} from "../../assets/SvgIcons/DashBoardIcon.svg";
import {ReactComponent as DeviceManagement} from "../../assets/SvgIcons/DeviceManagement.svg";
import {ReactComponent as PaymentIcon} from "../../assets/SvgIcons/PaymentIcon.svg";
import {ReactComponent as BookingIcon} from "../../assets/SvgIcons/BookingIcon.svg";
import {ReactComponent as DeviceInstallationIcon} from "../../assets/SvgIcons/DeviceInstallationIcon.svg";
import {ReactComponent as SettingsIcon} from "../../assets/SvgIcons/SettingsIcon.svg";
import {ReactComponent as ToggleSideBarIcon} from "../../assets/SvgIcons/ToggleSideBarIcon.svg";
import LeftArrow from "../../assets/images/LeftArrow.png";
import RightArrow from "../../assets/images/RightArrow.png";

import { styled } from "@mui/material/styles";

const CustomToggleButton = styled(ToggleButton)({
  "&.Mui-selected, &.Mui-selected:hover": {
    color: "white",
    backgroundColor: '#4d8bff',
    textTransform: "capitalize", 
  },
});

const Sidebar = () => {


    const [alignment, setAlignment] = useState('dashboard');

    const [open,setOpen]=useState(false)

    const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
    }


    const handleOpenClose=()=>{
        if(open === false){
            setOpen(true)
        }if(open === true){
            setOpen(false)
        }
    }

   
  return (
    <div className={Styles.SidebarContanerWithDrawer}>
      <button  className={Styles.SidebarDrawerLeftArrowButton} onClick={()=> handleOpenClose()}>{open === false ?<img src={LeftArrow} alt=""/>:<img src={RightArrow} alt=""/> }</button>
    <div className={Styles.SidebarMainContainer}>
        <div className={Styles.SidebarMainLogoContainer}>
            {open === false ?<img src={WetflixLogo} alt="" className={Styles.SidebarMainLogo}/>: <img src={WetflixLogo} alt="" className={Styles.SidebarMainLogoMobile}/>}
        </div>
        <div className={Styles.SidebarProfileContainer}>
            <img src={ProfileImage} alt="" className={Styles.SidebarProfileImage}/>
           {open === false ? <div className={Styles.SidebarProfileContent}>
                    <p className={Styles.SidebarProfileContentUser}>Daniel Tulloch</p>
                    <p className={Styles.SidebarProfileContentUserProfile}>View profile
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                    <path d="M7 13.5L10 10.5L7 7.5" stroke="#86909D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </p>
            </div>:""}
        </div>
        <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                orientation="vertical"
                onChange={handleChange}
                aria-label="Platform"
                className={Styles.SidebarToggleButtonsContainer}
  
               
                >
                <CustomToggleButton  value="dashboard" className={Styles.SidebarToggleButtons}  component={Link} to="/dashboard"><DashBoardIcon/>{open === false ?<p className={Styles.SidebarToggleButtonsText}>Dashboard</p>:""}</CustomToggleButton >
                <CustomToggleButton  value="profile" className={Styles.SidebarToggleButtons}  component={Link} to="/device_management"><DeviceManagement/>{open === false ?<p className={Styles.SidebarToggleButtonsText}>Profile & Device Management</p>:""}</CustomToggleButton >
                <CustomToggleButton value="Payment" className={Styles.SidebarToggleButtons} component={Link} to="/payment"><PaymentIcon/>{open === false ?<p className={Styles.SidebarToggleButtonsText}> Payment & Subscription</p>:""}</CustomToggleButton>
                <CustomToggleButton value="bookTechnician" className={Styles.SidebarToggleButtons} component={Link} to="/book_technician"><BookingIcon/>{open === false ?<p className={Styles.SidebarToggleButtonsText}>Book a Technician</p>:""}</CustomToggleButton>
                <CustomToggleButton value="deviceInstallation" className={Styles.SidebarToggleButtons} component={Link} to="/quick_setup_guide"><DeviceInstallationIcon/>{open === false ?<p className={Styles.SidebarToggleButtonsText}>Device Installation guidance</p>:""}</CustomToggleButton>
                <CustomToggleButton value="Settings" className={Styles.SidebarToggleButtons} ><SettingsIcon/>{open === false ?<p className={Styles.SidebarToggleButtonsText}>Settings</p>:""}</CustomToggleButton>
        </ToggleButtonGroup>
        <div className={Styles.SidebarOpenCloseButtonContainer}>
            <button className={Styles.SidebarOpenCloseButton} onClick={()=> handleOpenClose()}><ToggleSideBarIcon />{open === false ? "Toggle sidebar":""}</button>
        </div>
    </div>
    </div>
  );
};
export default Sidebar;
