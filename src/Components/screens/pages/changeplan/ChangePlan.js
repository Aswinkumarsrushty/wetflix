import React from "react";
import Styles from "./Index.module.css"
import PaymentWaySuccess from "../../../assets/images/PaymentWaySuccess.png";
import TricleImage from "../../../assets/images/TricleImage.png";
import SplashImage from "../../../assets/images/SplashImage.png";
import { Link } from "react-router-dom";
const ChangePlan=()=>{
    return(
        <div className={Styles.ChangePlanContainer}>
            <div className={Styles.ChangePlan}>
                <p className={Styles.ChangePlanText}>Change plan</p>
                <div className={Styles.ChangePlanContent}>
                    <div  className={Styles.ChangePlanContentDripContainer}>
                        <div className={Styles.ChangePlanContentDripHeaderContainer}>
                            <p className={Styles.ChangePlanContentDripHeaderContainerTitle}>Drip</p>
                            <p className={Styles.ChangePlanContentDripHeaderContainerText}>Lectus dapibus odio velit</p>
                        </div>
                        <div className={Styles.ChangePlanContentDripHeaderContainer}>
                            <div className={Styles.ChangePlanContentDripHeaderContent}>
                                <p className={Styles.ChangePlanContentDripHeaderContentAmount}>$9.00</p>
                                <p className={Styles.ChangePlanContentDripHeaderContentTTD}>TTD</p>
                            </div>
                            <p className={Styles.ChangePlanContentDripHeaderContainerText}>monthly + installation</p>
                        </div>
                        <button className={Styles.ChangePlanContentDripChoosePlanButton}>Choose this plan</button>
                        <div className={Styles.ChangePlanContentDripListContainer}>
                            <div className={Styles.ChangePlanContentDripListContent}>
                                <img src={PaymentWaySuccess} alt=""/>
                                <p className={Styles.ChangePlanContentDripListContentText}>Real-time water level indication</p>
                            </div>
                            <div className={Styles.ChangePlanContentDripListContent}>
                                <img src={PaymentWaySuccess} alt=""/>
                                <p className={Styles.ChangePlanContentDripListContentText}>Mobile alerts - leaks & overflow</p>
                            </div>
                            <div className={Styles.ChangePlanContentDripListContent}>
                                <img src={PaymentWaySuccess} alt=""/>
                                <p className={Styles.ChangePlanContentDripListContentText}>Annual tank cleaning alert</p>
                            </div>
                            <div className={Styles.ChangePlanContentDripListContent}>
                                <img src={PaymentWaySuccess} alt=""/>
                                <p className={Styles.ChangePlanContentDripListContentText}>order truck borne water</p>
                            </div>
                        </div>
                    </div>
                    <div  className={Styles.ChangePlanContentTrickleContainer}>
                        <div className={Styles.ChangePlanContentDripHeaderContainer}>
                            <p className={Styles.ChangePlanContentDripHeaderContainerTitle}>Trickle</p>
                            <p className={Styles.ChangePlanContentDripHeaderContainerText}>Lectus dapibus odio velit</p>
                        </div>
                        <div className={Styles.ChangePlanContentDripHeaderContainer}>
                            <div className={Styles.ChangePlanContentDripHeaderContent}>
                                <p className={Styles.ChangePlanContentDripHeaderContentAmount}>$12.00</p>
                                <p className={Styles.ChangePlanContentDripHeaderContentTTD}>TTD</p>
                            </div>
                            <p className={Styles.ChangePlanContentDripHeaderContainerText}>monthly + installation</p>
                        </div>
                        <button className={Styles.ChangePlanContentDripChoosePlanButton}>Choose this plan</button>
                        <div className={Styles.ChangePlanContentDripListContainer}>
                            <div className={Styles.ChangePlanContentDripListContent}>
                                <img src={TricleImage} alt=""/>
                                <p className={Styles.ChangePlanContentDripListContentText}>Real-time water level indication</p>
                            </div>
                            <div className={Styles.ChangePlanContentDripListContent}>
                                <img src={TricleImage} alt=""/>
                                <p className={Styles.ChangePlanContentDripListContentText}>Mobile alerts - leaks & overflow</p>
                            </div>
                            <div className={Styles.ChangePlanContentDripListContent}>
                                <img src={TricleImage} alt=""/>
                                <p className={Styles.ChangePlanContentDripListContentText}>Annual tank cleaning alert</p>
                            </div>
                            <div className={Styles.ChangePlanContentDripListContent}>
                                <img src={TricleImage} alt=""/>
                                <p className={Styles.ChangePlanContentDripListContentText}>order truck borne water</p>
                            </div>
                            <div className={Styles.ChangePlanContentDripListContent}>
                                <img src={TricleImage} alt=""/>
                                <p className={Styles.ChangePlanContentDripListContentText}>Monthly usage report and analysis</p>
                            </div>
                        </div>
                    </div>
                    <div  className={Styles.ChangePlanContentSplashContainer}>
                        <div className={Styles.ChangePlanContentDripHeaderContainer}>
                            <p className={Styles.ChangePlanContentDripHeaderContainerTitle}>Splash</p>
                            <p className={Styles.ChangePlanContentDripHeaderContainerText}>Lectus dapibus odio velit</p>
                        </div>
                        <div className={Styles.ChangePlanContentDripHeaderContainer}>
                            <div className={Styles.ChangePlanContentDripHeaderContent}>
                                <p className={Styles.ChangePlanContentDripHeaderContentAmount}>$15.00</p>
                                <p className={Styles.ChangePlanContentDripHeaderContentTTD}>TTD</p>
                            </div>
                            <p className={Styles.ChangePlanContentDripHeaderContainerText}>monthly + installation</p>
                        </div>
                        <button className={Styles.ChangePlanContentSplashChoosePlanButton}>Choose this plan</button>
                        <div className={Styles.ChangePlanContentSplashChoosePlanButtonActive}>
                            <hr className={Styles.ChangePlanContentSplashChoosePlanButtonLine}/>
                            <div className={Styles.ChangePlanContentSplashChoosePlanButtonActiveContainer}>
                                <p className={Styles.ChangePlanContentSplashChoosePlanButtonActiveContainerText}> Active upto</p>
                                <p className={Styles.ChangePlanContentSplashChoosePlanButtonActiveContainerDate}> 02-12-2023</p>
                            </div>
                        </div>
                        <div className={Styles.ChangePlanContentDripListContainer}>
                            <div className={Styles.ChangePlanContentDripListContent}>
                                <img src={SplashImage} alt=""/>
                                <p className={Styles.ChangePlanContentDripListContentText}>Real-time water level indication</p>
                            </div>
                            <div className={Styles.ChangePlanContentDripListContent}>
                                <img src={SplashImage} alt=""/>
                                <p className={Styles.ChangePlanContentDripListContentText}>Mobile alerts - leaks & overflow</p>
                            </div>
                            <div className={Styles.ChangePlanContentDripListContent}>
                                <img src={SplashImage} alt=""/>
                                <p className={Styles.ChangePlanContentDripListContentText}>Annual tank cleaning alert</p>
                            </div>
                            <div className={Styles.ChangePlanContentDripListContent}>
                                <img src={SplashImage} alt=""/>
                                <p className={Styles.ChangePlanContentDripListContentText}>order truck borne water</p>
                            </div>
                            <div className={Styles.ChangePlanContentDripListContent}>
                                <img src={SplashImage} alt=""/>
                                <p className={Styles.ChangePlanContentDripListContentText}>Monthly usage report and analysis</p>
                            </div>
                            <div className={Styles.ChangePlanContentDripListContent}>
                                <img src={SplashImage} alt=""/>
                                <p className={Styles.ChangePlanContentDripListContentText}>Annual system check up</p>
                            </div>
                            <div className={Styles.ChangePlanContentDripListContent}>
                                <img src={SplashImage} alt=""/>
                                <p className={Styles.ChangePlanContentDripListContentText}>Free derelict tank disposal</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ChangePlan