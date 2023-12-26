import React, { useEffect, useState } from "react";
import Wave from "react-wavify";
import Styles from "./Index.module.css";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import DataTable from "./DataTable";
import { Link } from "react-router-dom";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import TooltpWaterLevel from "../../../assets/images/TooltpWaterLevel.png";
import { styled } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { getAllDeviceListById } from "../../../Redux/Actions";
import DownArrow from "../../../assets/images/DownArrow.png";


const CustomToggleButton = styled(ToggleButton)({
  "&.Mui-selected, &.Mui-selected:hover": {
    color: "white",
    backgroundColor: "#4d8bff",
    textTransform: "capitalize",
  },
});
const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    border: "1px solid var(--neutrals-100, #ECF0F4)",
    background: "var(--neutral-white, #FFF)",
    boxShadow:
      "0px 11px 15px -4px rgba(16, 26, 40, 0.03), 0px 7px 6px -3px rgba(16, 26, 40, 0.04)",
    borderRadius: "8px",
  },
}));
const HomePage = () => {
  const dispatch = useDispatch();
  const [alignment, setAlignment] = useState("Level");
  const [deviceId, setDeviceId] = useState(19);
  const authUser = sessionStorage.getItem("auth");
  useEffect(() => {
    if (!deviceId == 0) {
      dispatch(getAllDeviceListById(deviceId));
    }
  }, [deviceId]);
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const averageDailyUse = Math.floor(Math.random() * 100) + 1;
  const waterLevelAutoGenerate = Math.floor(Math.random() * 100) + 1;
  const [currentWaterLevelBasedOnTank, setCurrentWaterLevelBasedOnTank] = useState()
  const [tankWaterMesurement, setTankWaterMesument] = useState();
  const [currenteaterLevel, SetCurrenteaterLevel] = useState();
  const tankWaterLevel = () => {
    if (waterLevelAutoGenerate > 0 && waterLevelAutoGenerate < 10) {
      setTankWaterMesument(340);
      SetCurrenteaterLevel(7);
      setCurrentWaterLevelBasedOnTank(0.7)
    } else if (waterLevelAutoGenerate > 10 && waterLevelAutoGenerate < 20) {
      setTankWaterMesument(270);
      SetCurrenteaterLevel(15);
      setCurrentWaterLevelBasedOnTank(1.3)
    } else if (waterLevelAutoGenerate > 20 && waterLevelAutoGenerate < 40) {
      setTankWaterMesument(200);
      SetCurrenteaterLevel(36);
      setCurrentWaterLevelBasedOnTank(2.1)
    } else if (waterLevelAutoGenerate > 40 && waterLevelAutoGenerate < 60) {
      setTankWaterMesument(150);
      SetCurrenteaterLevel(55);
      setCurrentWaterLevelBasedOnTank(2.9)
    } else if (waterLevelAutoGenerate > 60 && waterLevelAutoGenerate < 80) {
      setTankWaterMesument(60);
      SetCurrenteaterLevel(74);
      setCurrentWaterLevelBasedOnTank(3.4)
    } else if (waterLevelAutoGenerate > 80 && waterLevelAutoGenerate < 100) {
      setTankWaterMesument(30);
      SetCurrenteaterLevel(82);
      setCurrentWaterLevelBasedOnTank(4.2)
    }
  };
  console.log(tankWaterMesurement);
  useEffect(() => {
    tankWaterLevel();
  });

  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();

  return (
    <div>
      <div className={Styles.HomePageContainer}>
        <div className={Styles.HomePageMyTankContainer}>
          <div className={Styles.HomePageMyTankContainerHeader}>
            <p className={Styles.HomePageMyTankContainerHeaderText}>
              My Water Tank
              <img src={DownArrow} alt="" />
            </p>
            <ToggleButtonGroup
              color="primary"
              value={alignment}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
              className={Styles.HomePageToggleButtonsContainer}
            >
              <CustomToggleButton
                value="Level"
                className={Styles.HomePageToggleButtons}
              >
                Level
              </CustomToggleButton>
              <CustomToggleButton
                value="Usage"
                className={Styles.HomePageToggleButtons}
              >
                Usage
              </CustomToggleButton>
              <CustomToggleButton
                value="Forecast"
                className={Styles.HomePageToggleButtons}
              >
                Forecast
              </CustomToggleButton>
            </ToggleButtonGroup>
          </div>
          <div className={Styles.HomePageHeaderTankAndQuickDetails}>
            <LightTooltip
              title={
                <div className={Styles.homepageTankContainerTooltipContent}>
                  <img src={TooltpWaterLevel} alt="" />
                  <div
                    className={
                      Styles.homepageTankContainerTooltipWaterlevelTextContent
                    }
                  >
                    <p
                      className={
                        Styles.homepageTankContainerTooltipWaterlevelTextContentText
                      }
                    >
                      Current level
                    </p>
                    <p
                      className={
                        Styles.homepageTankContainerTooltipWaterlevelTextContentTextStatus
                      }
                    >
                      Low
                    </p>
                  </div>
                  <div
                    className={
                      Styles.homepageTankContainerTooltipWaterlevelNumberContainer
                    }
                  >
                    <p
                      className={
                        Styles.homepageTankContainerTooltipWaterlevelNumberContainerText
                      }
                    >
                      {Math.floor(Math.random() * 100) + 1}M
                    </p>
                    <p
                      className={
                        Styles.homepageTankContainerTooltipWaterlevelNumberContainerPercentage
                      }
                    >
                      {currenteaterLevel}%
                    </p>
                  </div>
                </div>
              }
              arrow
              followCursor
            >
              <div className={Styles.HomePageTankContainer}>
                <div className={Styles.HomePageChartLines}>
                  <p className={Styles.HomePageChartLinesLine}>100% </p>
                  <p className={Styles.HomePageChartLinesLine}>
                    80%{" "}
                    <span
                      className={Styles.HomePageChartLinesLineMesurementMinimum}
                    />
                  </p>
                  <p className={Styles.HomePageChartLinesLine}>
                    60%{" "}
                    <span className={Styles.HomePageChartLinesLineMesurement} />
                  </p>
                  <p className={Styles.HomePageChartLinesLine}>
                    40%{" "}
                    <span className={Styles.HomePageChartLinesLineMesurement} />
                  </p>
                  <p className={Styles.HomePageChartLinesLine}>
                    20%{" "}
                    <span className={Styles.HomePageChartLinesLineMesurement} />
                  </p>
                  <p className={Styles.HomePageChartLinesLine}>
                    10%{" "}
                    <span className={Styles.HomePageChartLinesLineMesurement} />
                  </p>
                  <p className={Styles.HomePageChartLinesLine}>
                    0%{" "}
                    <span className={Styles.HomePageChartLinesLineMesurement} />
                  </p>
                </div>

                <div className={Styles.TankModelContent}>
                  <p class={Styles.HomePageTankCloser}></p>
                  <p class={Styles.HomePageTankBody}>
                    <Wave
                      mask="url(#mask)"
                      fill="#4D8BFF"
                      options={{
                        points: 10,
                        speed: 0.2,
                        amplitude: 15,
                        height: tankWaterMesurement,
                      }}
                      className={Styles.TankWaves}
                    >
                      <defs>
                        <linearGradient
                          id="gradient"
                          gradientTransform="rotate(90)"
                        >
                          <stop offset="0" stopColor="black" />
                          <stop offset="0.8" stopColor="white" />
                        </linearGradient>
                        <mask id="mask">
                          <rect
                            x="0"
                            y="0"
                            width="2000"
                            height="450"
                            fill="url(#gradient)"
                          />
                        </mask>
                      </defs>
                    </Wave>
                  </p>
                </div>
              </div>
            </LightTooltip>
            <div className={Styles.HomePageQuickStats}>
              <p className={Styles.HomePageQuickStatsText}>Quick stats:</p>
              <div className={Styles.HomePageAverageDailyUsageOfWaterContainer}>
                <p
                  className={
                    Styles.HomePageAverageDailyUsageOfWaterContainerIcon
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="18"
                    viewBox="0 0 14 18"
                    fill="none"
                  >
                    <path
                      d="M7 17C10.3136 17 13 14.3136 13 11C13 5.4 7 1 7 1C7 1 1 5.4 1 11C1 14.3136 3.6864 17 7 17Z"
                      stroke="#4D8BFF"
                      stroke-width="1.59995"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M1 11.0001C1 14.3137 3.6864 17.0001 7 17.0001C10.3136 17.0001 13 14.3137 13 11.0001C13 11.0001 9.4 12.2001 7 11.0001C4.6 9.80013 1 11.0001 1 11.0001Z"
                      stroke="#4D8BFF"
                      stroke-width="1.59995"
                      stroke-linejoin="round"
                    />
                  </svg>
                </p>
                <div className={Styles.HomePageAverageBox}>
                  <p className={Styles.HomePageAverageBoxText}>
                    Average Daily Use
                  </p>
                  <p className={Styles.HomePageAverageBoxAveragePercentage}>
                    {averageDailyUse}%
                    <span
                      className={
                        Styles.HomePageAverageBoxAveragePercentageAdvance
                      }
                    >
                      {averageDailyUse}%
                    </span>
                  </p>
                </div>
              </div>
              <div className={Styles.HomePageAverageDailyUsageOfWaterContainer}>
                <p
                  className={
                    Styles.HomePageAverageDailyUsageOfWaterContainerIcon
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="18"
                    viewBox="0 0 14 18"
                    fill="none"
                  >
                    <path
                      d="M7 17C10.3136 17 13 14.3136 13 11C13 5.4 7 1 7 1C7 1 1 5.4 1 11C1 14.3136 3.6864 17 7 17Z"
                      stroke="#4D8BFF"
                      stroke-width="1.59995"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M1 11.0001C1 14.3137 3.6864 17.0001 7 17.0001C10.3136 17.0001 13 14.3137 13 11.0001C13 11.0001 9.4 12.2001 7 11.0001C4.6 9.80013 1 11.0001 1 11.0001Z"
                      stroke="#4D8BFF"
                      stroke-width="1.59995"
                      stroke-linejoin="round"
                    />
                  </svg>
                </p>
                <div className={Styles.HomePageAverageBox}>
                  <p className={Styles.HomePageAverageBoxText}>
                    Current Water Level
                  </p>
                  <p className={Styles.HomePageAverageBoxAveragePercentage}>
                    {currenteaterLevel}%
                    <span
                      className={Styles.HomePageAverageBoxCurrentWaterLevel}
                    >
                      ({currentWaterLevelBasedOnTank}/5M)
                    </span>
                  </p>
                </div>
              </div>
              <div className={Styles.HomePageAverageDailyUsageOfWaterContainer}>
                <p
                  className={
                    Styles.HomePageAverageDailyUsageOfWaterContainerIcon
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="18"
                    viewBox="0 0 14 18"
                    fill="none"
                  >
                    <path
                      d="M7 17C10.3136 17 13 14.3136 13 11C13 5.4 7 1 7 1C7 1 1 5.4 1 11C1 14.3136 3.6864 17 7 17Z"
                      stroke="#4D8BFF"
                      stroke-width="1.59995"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M1 11.0001C1 14.3137 3.6864 17.0001 7 17.0001C10.3136 17.0001 13 14.3137 13 11.0001C13 11.0001 9.4 12.2001 7 11.0001C4.6 9.80013 1 11.0001 1 11.0001Z"
                      stroke="#4D8BFF"
                      stroke-width="1.59995"
                      stroke-linejoin="round"
                    />
                  </svg>
                </p>
                <div className={Styles.HomePageAverageBox}>
                  <p className={Styles.HomePageAverageBoxText}>
                    Estimated Usage
                  </p>
                  <p className={Styles.HomePageAverageBoxAveragePercentage}>
                    {Math.floor(Math.random() * 50) + 1}
                    <span className={Styles.HomePageAverageBoxEstimatedUsage}>
                      days left
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={Styles.HomePageMyTankSignalAndBatteryContainer}>
            <div className={Styles.HomePageMyTankSignalAndBatteryCart}>
              <div
                className={Styles.HomePageMyTankSignalAndBatteryCartIconContent}
              >
                <p
                  className={Styles.HomePageMyTankSignalAndBatteryCartIconTitle}
                >
                  Signal Strength
                </p>
                <p
                  className={Styles.HomePageMyTankSignalAndBatteryCartIconText}
                >
                  Weak
                </p>
              </div>
              <p className={Styles.HomePageMyTankSignalAndBatteryCartIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 6C15.537 6 18.837 7.353 21.293 9.809L22.707 8.395C19.874 5.561 16.071 4 12 4C7.92897 4.001 4.12597 5.561 1.29297 8.395L2.70697 9.809C5.16297 7.353 8.46297 6 12 6Z"
                    fill="#EBEDF0"
                  />
                  <path
                    d="M6.3291 14.3075C9.4031 11.2335 14.5971 11.2335 17.6711 14.3075L16.2571 15.7215C13.9501 13.4145 10.0501 13.4145 7.7431 15.7215L6.3291 14.3075Z"
                    fill="#F48B35"
                  />
                  <path
                    d="M20.437 11.2938C15.865 6.71978 8.13596 6.71978 3.56396 11.2938L4.97797 12.7078C8.78497 8.90078 15.216 8.90078 19.023 12.7078L20.437 11.2938Z"
                    fill="#EBEDF0"
                  />
                  <path
                    d="M12 20C13.1046 20 14 19.1046 14 18C14 16.8954 13.1046 16 12 16C10.8954 16 10 16.8954 10 18C10 19.1046 10.8954 20 12 20Z"
                    fill="#F48B35"
                  />
                </svg>
              </p>
            </div>
            <div className={Styles.HomePageMyTankSignalAndBatteryCart}>
              <div
                className={Styles.HomePageMyTankSignalAndBatteryCartIconContent}
              >
                <p
                  className={Styles.HomePageMyTankSignalAndBatteryCartIconTitle}
                >
                  Battery Status
                </p>
                <p
                  className={Styles.HomePageMyTankSignalAndBatteryCartIconText}
                >
                  {Math.floor(Math.random() * 100) + 1}%
                </p>
              </div>
              <p className={Styles.HomePageMyTankSignalAndBatteryCartIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M17 6C17.7956 6 18.5587 6.31607 19.1213 6.87868C19.6839 7.44129 20 8.20435 20 9V10H21C21.2652 10 21.5196 10.1054 21.7071 10.2929C21.8946 10.4804 22 10.7348 22 11V13C22 13.2652 21.8946 13.5196 21.7071 13.7071C21.5196 13.8946 21.2652 14 21 14H20V15C20 15.7956 19.6839 16.5587 19.1213 17.1213C18.5587 17.6839 17.7956 18 17 18H5C4.20435 18 3.44129 17.6839 2.87868 17.1213C2.31607 16.5587 2 15.7956 2 15V9C2 8.20435 2.31607 7.44129 2.87868 6.87868C3.44129 6.31607 4.20435 6 5 6H17ZM16.998 7.5H5C4.62712 7.50002 4.26761 7.63892 3.99158 7.88962C3.71555 8.14032 3.5428 8.48484 3.507 8.856L3.5 9V15C3.49999 15.3727 3.63876 15.7321 3.88925 16.0081C4.13974 16.2841 4.48402 16.457 4.855 16.493L5 16.5H16.998C17.3707 16.5 17.7301 16.3612 18.0061 16.1108C18.2821 15.8603 18.455 15.516 18.491 15.145L18.498 15V9C18.498 8.62727 18.3592 8.2679 18.1088 7.99189C17.8583 7.71589 17.514 7.54303 17.143 7.507L16.998 7.5ZM6.003 8.999H7C7.24493 8.99903 7.48134 9.08896 7.66437 9.25172C7.84741 9.41447 7.96434 9.63875 7.993 9.882L8 10V14C7.99997 14.2449 7.91004 14.4813 7.74728 14.6644C7.58453 14.8474 7.36025 14.9643 7.117 14.993L7 14.999H6.003C5.75791 14.9989 5.52138 14.9089 5.33833 14.7459C5.15527 14.5829 5.03843 14.3584 5.01 14.115L5.003 14V10C5.00279 9.75489 5.0926 9.51825 5.25538 9.335C5.41817 9.15176 5.64258 9.03468 5.886 9.006L6.003 9V8.999Z"
                    fill="#D74525"
                  />
                </svg>
              </p>
            </div>
          </div>
        </div>
        <div
          className={
            Styles.HomePageDeviceManagementAndHardwareInformationContainer
          }
        >
          <div className={Styles.HomePageDeviceManagement}>
            <p className={Styles.HomePageDeviceManagementText}>
              Device Maintenance
            </p>
            <div className={Styles.HomePageDeviceManagementTextContent}>
              <div className={Styles.HomePageDeviceManagementContentData}>
                <p
                  className={Styles.HomePageDeviceManagementContentDataCircle}
                ></p>
                <p className={Styles.HomePageDeviceManagementContentDataText}>
                  Replace filter
                </p>
                <p
                  className={Styles.HomePageDeviceManagementContentDataTextWork}
                >
                  in
                </p>
              </div>
              <p
                className={
                  Styles.HomePageDeviceManagementContentDataTextWorkDays
                }
              >
                {Math.floor(Math.random() * 50) + 1} Days
              </p>
            </div>
            <div className={Styles.HomePageDeviceManagementTextContent}>
              <div className={Styles.HomePageDeviceManagementContentData}>
                <p
                  className={Styles.HomePageDeviceManagementContentDataCircle}
                ></p>
                <p className={Styles.HomePageDeviceManagementContentDataText}>
                  Tank cleanup
                </p>
                <p
                  className={Styles.HomePageDeviceManagementContentDataTextWork}
                >
                  in
                </p>
              </div>
              <p
                className={
                  Styles.HomePageDeviceManagementContentDataTextWorkDays
                }
              >
                {Math.floor(Math.random() * 50) + 1} Days
              </p>
            </div>
            <div className={Styles.HomePageDeviceManagementTextContentLine}>
              <div className={Styles.HomePageDeviceManagementContentData}>
                <p
                  className={Styles.HomePageDeviceManagementContentDataCircle}
                ></p>
                <p className={Styles.HomePageDeviceManagementContentDataText}>
                  Lorem ipsum dolor sit amet consectetur. Id placerat libero at
                  venenatis congue nascetur elementum.
                </p>
              </div>
            </div>
          </div>
          <div className={Styles.HomePageHardwareInformation}>

            <div className={Styles.HomePageHardwareInformationContainer}>
              <div className={Styles.HomePageHardwareInformationContent}>
                <div className={Styles.HomePageHardwareInformationTextContent}>
                  <p
                    className={
                      Styles.HomePageHardwareInformationTextContentText
                    }
                  >
                    Device Voltage
                  </p>
                  <p
                    className={
                      Styles.HomePageHardwareInformationTextContentVersion
                    }
                  >
                    4.2V
                  </p>
                </div>
                <p
                  className={
                    Styles.HomePageHardwareInformationTextContentLineBorder
                  }
                ></p>
              </div>
              <div className={Styles.HomePageHardwareInformationContent}>
                <div className={Styles.HomePageHardwareInformationTextContent}>
                  <p
                    className={
                      Styles.HomePageHardwareInformationTextContentText
                    }
                  >
                    Auxiliary Power
                  </p>
                  <p
                    className={
                      Styles.HomePageHardwareInformationTextContentVersion
                    }
                  >
                    ON
                  </p>
                </div>
                <p
                  className={
                    Styles.HomePageHardwareInformationTextContentLineBorder
                  }
                ></p>
              </div>

              <div className={Styles.HomePageHardwareInformationContent}>
                <div className={Styles.HomePageHardwareInformationTextContent}>
                  <p
                    className={
                      Styles.HomePageHardwareInformationTextContentText
                    }
                  >
                    Sensor Status
                  </p>
                  <p
                    className={
                      Styles.HomePageHardwareInformationTextContentVersion
                    }
                  >
                    {Math.floor(Math.random() * 100) + 1}%
                  </p>

                </div>
                <p
                  className={
                    Styles.HomePageHardwareInformationTextContentLineBorder
                  }></p>
              </div>
            </div>
            <div className={Styles.HomePageHardwareInformationContainerFooter}>
              <p
                className={
                  Styles.HomePageHardwareInformationContainerFooterText
                }
              >
                Last updated: {time} ,{date}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.homePageTableData}>
        <div className={Styles.homePageTableDataNav}>
          <p className={Styles.homePageTableDataNavText}>Device list</p>
          <Link to="/device_management" className={Styles.LinkDeviceManagement}>
            <button className={Styles.homePageTableDataNavTextViewAll}>
              View all
            </button>
          </Link>
        </div>
        <DataTable />
      </div>
    </div>
  );
};
export default HomePage;