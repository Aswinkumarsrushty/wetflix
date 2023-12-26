import React, { useState } from "react";
import Styles from "./Index.module.css";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ReactComponent as ExportIcon } from "../../../assets/SvgIcons/ExportIcon.svg";
// import {ReactComponent as MyTankOverFlowIcon} from "../../assets/SvgIcons/MyTankOverFlowIcon.svg";
import {ReactComponent as MyTankFillIcon} from "../../../assets/SvgIcons/MyTankFillIcon.svg";

const NotificationComponent=()=>{

    const [age, setAge] = useState(10);

    const handleChange = (event) => {
      setAge(event.target.value);
    };
    
    return(
        <div className={Styles.NotificationComponentMainContainer}>
                <div className={Styles.NotificationComponentHeaderContent}>
                    <p className={Styles.NotificationComponentHeaderContentText}>My alerts and notifications</p>
                    <div className={Styles.NotificationComponentHeaderExportContainer}>
                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small" >
                            <Select
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                value={age}
                                onChange={handleChange}
                                className={Styles.NotificationComponentHeaderExportContainerSelect}
                            >
                                <MenuItem value={10}>last 30 days</MenuItem>
                                <MenuItem value={20}>last month</MenuItem>
                                <MenuItem value={30}>last 6months</MenuItem>
                            </Select>
                        </FormControl>
                        <button className={Styles.NotificationComponentExportButton}>
                            <ExportIcon/>Export events
                        </button>
                    </div>
                </div>
                <div className={Styles.NotificationComponentCartContainer}>
                        <p className={Styles.NotificationComponentCartContainerDate}>Friday, 20 Sep 2023</p>
                            <div className={Styles.NotificationComponentNotificationCart}>
                                <div className={Styles.NotificationComponentNotificationDetails}>
                                        <div className={Styles.NotificationComponentNotificationDetailsHeaderContent}>
                                            <p className={Styles.NotificationComponentNotificationDetailsHeaderContentMyTank}>My tank #2</p>
                                            <p className={Styles.NotificationComponentNotificationDetailsHeaderContentMyTankLevel}>is 97% full</p>
                                            <MyTankFillIcon/>
                                        </div>
                                        <p className={Styles.NotificationComponentNotificationDetailsDescription}>
                                        Consectetur et et ornare sagittis iaculis a vestibulum. Adipiscing nunc facilisis cursus gravida augue interdum.                                        </p>
                                </div>
                                <p className={Styles.NotificationComponentNotificationCartTime}>12:23 AM, 23-09-2023</p>
                            </div>
                            <div className={Styles.NotificationComponentNotificationCart}>
                                <div className={Styles.NotificationComponentNotificationDetails}>
                                        <div className={Styles.NotificationComponentNotificationDetailsHeaderContent}>
                                            <p className={Styles.NotificationComponentNotificationDetailsHeaderContentMyTank}>My tank #2</p>
                                            <p className={Styles.NotificationComponentNotificationDetailsHeaderContentMyTankLevel}>is 97% full</p>
                                            <MyTankFillIcon/>
                                        </div>
                                        <p className={Styles.NotificationComponentNotificationDetailsDescription}>
                                        Consectetur et et ornare sagittis iaculis a vestibulum. Adipiscing nunc facilisis cursus gravida augue interdum.                                        </p>
                                </div>
                                <p className={Styles.NotificationComponentNotificationCartTime}>12:23 AM, 23-09-2023</p>
                            </div>
                            <div className={Styles.NotificationComponentNotificationCart}>
                                <div className={Styles.NotificationComponentNotificationDetails}>
                                        <div className={Styles.NotificationComponentNotificationDetailsHeaderContent}>
                                            <p className={Styles.NotificationComponentNotificationDetailsHeaderContentMyTank}>My tank #2</p>
                                            <p className={Styles.NotificationComponentNotificationDetailsHeaderContentMyTankLevel}>is 97% full</p>
                                            <MyTankFillIcon/>
                                        </div>
                                        <p className={Styles.NotificationComponentNotificationDetailsDescription}>
                                        Consectetur et et ornare sagittis iaculis a vestibulum. Adipiscing nunc facilisis cursus gravida augue interdum.                                        </p>
                                </div>
                                <p className={Styles.NotificationComponentNotificationCartTime}>12:23 AM, 23-09-2023</p>
                            </div>
                            <div className={Styles.NotificationComponentNotificationCart}>
                                <div className={Styles.NotificationComponentNotificationDetails}>
                                        <div className={Styles.NotificationComponentNotificationDetailsHeaderContent}>
                                            <p className={Styles.NotificationComponentNotificationDetailsHeaderContentMyTank}>My tank #2</p>
                                            <p className={Styles.NotificationComponentNotificationDetailsHeaderContentMyTankLevel}>is 97% full</p>
                                            <MyTankFillIcon/>
                                        </div>
                                        <p className={Styles.NotificationComponentNotificationDetailsDescription}>
                                        Consectetur et et ornare sagittis iaculis a vestibulum. Adipiscing nunc facilisis cursus gravida augue interdum.                                        </p>
                                </div>
                                <p className={Styles.NotificationComponentNotificationCartTime}>12:23 AM, 23-09-2023</p>
                            </div>
                    </div>
                    <div className={Styles.NotificationComponentCartContainer}>
                        <p className={Styles.NotificationComponentCartContainerDate}>Friday, 20 Sep 2023</p>
                            <div className={Styles.NotificationComponentNotificationCart}>
                                <div className={Styles.NotificationComponentNotificationDetails}>
                                        <div className={Styles.NotificationComponentNotificationDetailsHeaderContent}>
                                            <p className={Styles.NotificationComponentNotificationDetailsHeaderContentMyTank}>My tank #2</p>
                                            <p className={Styles.NotificationComponentNotificationDetailsHeaderContentMyTankLevel}>is 97% full</p>
                                            <MyTankFillIcon/>
                                        </div>
                                        <p className={Styles.NotificationComponentNotificationDetailsDescription}>
                                        Consectetur et et ornare sagittis iaculis a vestibulum. Adipiscing nunc facilisis cursus gravida augue interdum.                                        </p>
                                </div>
                                <p className={Styles.NotificationComponentNotificationCartTime}>12:23 AM, 23-09-2023</p>
                            </div>
                            <div className={Styles.NotificationComponentNotificationCart}>
                                <div className={Styles.NotificationComponentNotificationDetails}>
                                        <div className={Styles.NotificationComponentNotificationDetailsHeaderContent}>
                                            <p className={Styles.NotificationComponentNotificationDetailsHeaderContentMyTank}>My tank #2</p>
                                            <p className={Styles.NotificationComponentNotificationDetailsHeaderContentMyTankLevel}>is 97% full</p>
                                            <MyTankFillIcon/>
                                        </div>
                                        <p className={Styles.NotificationComponentNotificationDetailsDescription}>
                                        Consectetur et et ornare sagittis iaculis a vestibulum. Adipiscing nunc facilisis cursus gravida augue interdum.                                        </p>
                                </div>
                                <p className={Styles.NotificationComponentNotificationCartTime}>12:23 AM, 23-09-2023</p>
                            </div>
                    </div>
        </div>
    )
}
export default NotificationComponent