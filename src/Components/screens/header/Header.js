import React, { useState } from "react";
import Styles from "./Index.module.css";
import {ReactComponent as NotificationIcon} from "../../assets/SvgIcons/NotificationIcon.svg";
import {ReactComponent as MyTankFillIcon} from "../../assets/SvgIcons/MyTankFillIcon.svg";
import {ReactComponent as MyTankEmptyIcon} from "../../assets/SvgIcons/MyTankEmptyIcon.svg";
import {ReactComponent as MyTankOverFlowIcon} from "../../assets/SvgIcons/MyTankOverFlowIcon.svg";
import {ReactComponent as LeftArrowIcon} from "../../assets/SvgIcons/LeftArrowIcon.svg";
import { Link } from "react-router-dom";
import MenuIcon from "../../assets/images/MenuIcon.png";
import WetflixLogo from "../../assets/images/WetflixLogo.png";
import ProfileImage from "../../assets/images/ProfileImage.png";

const Header=()=>{

    const now = new Date();

  const formattedDate = now.toLocaleString("en-US", {
    month: "short",
    weekday: "long",
    day: "numeric",
  });
  const [isActive, setIsActive] = useState(false);

    return(
        <>
        <div className={Styles.HeaderMainContainer}>
            <p className={Styles.HeaderWelComeText}>Welcome Daniel</p>   
            <div className={Styles.HeaderWelComeProfileContainer}>
                <img src={ProfileImage} alt=""/>
                <p className={Styles.HeaderWelComeProfileNotification}  onClick={(e) => {setIsActive(!isActive)}}>
                    <NotificationIcon/>
                </p>
                <p className={Styles.HeaderWelComeProfileTimeAndDay}>{formattedDate}</p>
            </div>
            <div
                className={Styles.DropDownHeaderMainContainerContent}
                style={{ display: isActive ? "block" : "none" }}
            >
                    <div className={Styles.DropDownHeaderMainContainer}  onClick={(e) => {setIsActive(!isActive)}}>
                            <p className={Styles.DropDownHeaderMainContainerHeader}>Alerts & notifications</p>
                            <div className={Styles.HeaderPageNotificationCart}>
                                <div className={Styles.HeaderPageNotificationDetails}>
                                        <div className={Styles.HeaderPageNotificationDetailsHeaderContent}>
                                            <p className={Styles.HeaderPageNotificationDetailsHeaderContentMyTank}>My tank #1</p>
                                            <p className={Styles.HeaderPageNotificationDetailsHeaderContentMyTankLevel}>is 97% full</p>
                                            <MyTankFillIcon/>
                                        </div>
                                        <p className={Styles.HeaderPageNotificationDetailsDescription}>
                                        Consectetur et et ornare sagittis 
                                        iaculis a vestibulum. Adipiscing nunc 
                                        facilisis cursus gravida augue interdum.
                                        </p>
                                </div>
                                <p className={Styles.HeaderPageNotificationCartTime}>12:23 AM, 23-09-2023</p>
                            </div>
                            <div className={Styles.HeaderPageNotificationCart}>
                                <div className={Styles.HeaderPageNotificationDetails}>
                                        <div className={Styles.HeaderPageNotificationDetailsHeaderContent}>
                                            <p className={Styles.HeaderPageNotificationDetailsHeaderContentMyTank}>My tank #2</p>
                                            <p className={Styles.HeaderPageNotificationDetailsHeaderContentMyTankLevel}>has gone below 5% level</p>
                                            <MyTankEmptyIcon/>
                                        </div>
                                        <p className={Styles.HeaderPageNotificationDetailsDescription}>
                                        Consectetur et et ornare sagittis iaculis a vestibulum
                                        </p>
                                </div>
                                <p className={Styles.HeaderPageNotificationCartTime}>12:23 AM, 23-09-2023</p>
                            </div>
                            <div className={Styles.HeaderPageNotificationCart}>
                                <div className={Styles.HeaderPageNotificationDetails}>
                                        <div className={Styles.HeaderPageNotificationDetailsHeaderContent}>
                                            <p className={Styles.HeaderPageNotificationDetailsHeaderContentMyTank}>My tank #2</p>
                                            <p className={Styles.HeaderPageNotificationDetailsHeaderContentMyTankLevel}>had a water overflow</p>
                                            <MyTankOverFlowIcon/>
                                        </div>
                                        <p className={Styles.HeaderPageNotificationDetailsDescription}>
                                        Consectetur et et ornare sagittis iaculis a vestibulum. Adipiscing nunc facilisis 
                                        </p>
                                </div>
                                <p className={Styles.HeaderPageNotificationCartTime}>12:23 AM, 23-09-2023</p>
                            </div>
                            <Link to="/notification_component" className={Styles.HeaderViewLink}><button className={Styles.HeaderPageNotificationCartButton}>
                                <p className={Styles.HeaderPageNotificationCartButtonText}>View all <LeftArrowIcon/></p>
                            </button>
                            </Link>
                    </div>
               
            </div>
        </div>
        <div className={Styles.MobileResponsiveHeaderContent}>
            <div className={Styles.MobileResponsiveHeaderContainer}>
            <img src={MenuIcon} alt=""/>
            <img src={WetflixLogo} alt="" className={Styles.MobileResponsiveHeaderContainerImage}/>
            <p className={Styles.HeaderWelComeProfileNotification}  onClick={(e) => {setIsActive(!isActive)}}>
                        <NotificationIcon/>
                </p>
            </div>
            <div className={Styles.MobileResponsiveHeaderContainerUserNameContent}>
                <p className={Styles.MobileResponsiveHeaderContainerUserName}>Welcome Daniel</p>
            </div>
        </div>
        </>
    )
}
export default Header