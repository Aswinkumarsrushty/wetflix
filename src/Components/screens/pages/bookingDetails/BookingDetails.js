import React from "react";
import Styles from "./Index.module.css"
import BookingDetailsImage from "../../../assets/images/BookingDetailsImage.png";
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import PaymentWaySuccess from "../../../assets/images/PaymentWaySuccess.png";
import PaymentWayProgress from "../../../assets/images/PaymentWayProgress.png"

const BookingDetails=()=>{
    return(
        <div className={Styles.BookingDetailsContainer}>
            <p className={Styles.BookingDetailsContainerTitle}>Booking details</p>
            <div className={Styles.BookingDetailsContent}>
                <div className={Styles.BookingDetailsConformationNumberAndServiceContent}>
                    <div className={Styles.BookingDetailsConformationNumberContent}>
                        <p className={Styles.BookingDetailsConformationNumberContentHeader}>Confirmation number</p>
                        <p className={Styles.BookingDetailsConformationNumberContentValue}>#818912</p>
                    </div>
                    <div className={Styles.BookingDetailsConformationNumberContent}>
                        <p className={Styles.BookingDetailsConformationNumberContentHeader}>Service</p>
                        <p className={Styles.BookingDetailsConformationNumberContentValue}>Tank cleaning</p>
                    </div>
                </div>
                <div className={Styles.BookingDetailsConformationNumberAndServiceContent}>
                    <div className={Styles.BookingDetailsConformationNumberContent}>
                        <p className={Styles.BookingDetailsConformationNumberContentHeader}>Appointment address</p>
                        <p className={Styles.BookingDetailsConformationNumberContentValue}>Urna urna sem, sodales nibh laoreet aliquam adipiscing  pulvinar arcu, CA 94310</p>
                    </div>
                    <div className={Styles.BookingDetailsConformationNumberContent}>
                        <p className={Styles.BookingDetailsConformationNumberContentHeader}>Date & Time:</p>
                        <p className={Styles.BookingDetailsConformationNumberContentValue}>Sep 10, 2023 / 09:00 AM </p>
                    </div>
                </div>
                <img src={BookingDetailsImage} alt=""/>
                <div className={Styles.BookingDetailsTimeLineAndCancelContainer}>
                    <Timeline sx={{
                            [`& .${timelineItemClasses.root}:before`]: {
                            flex: 0,
                            padding: 0,
                            },
                        }}>
                        <TimelineItem sx={{width: 400}}>
                            <TimelineSeparator>
                            <img src={PaymentWaySuccess} alt=""/>
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{width: 350}}>
                            <div className={Styles.BookingDetailsTimeLineContent}>
                                <p className={Styles.BookingDetailsTimeLineContentText}>
                                Appointment created
                                </p>
                                <p className={Styles.BookingDetailsTimeLineContentTimeAndDate}>
                                08/09/2023, 09:30AM
                                </p>
                            </div>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem sx={{width: 400}}>
                            <TimelineSeparator>
                            <img src={PaymentWaySuccess} alt=""/>
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{width: 350}}>
                            <div className={Styles.BookingDetailsTimeLineContent}>
                                <p className={Styles.BookingDetailsTimeLineContentText}>
                                Technician assigned
                                </p>
                                <p className={Styles.BookingDetailsTimeLineContentTimeAndDate}>
                                08/09/2023, 09:30AM
                                </p>
                            </div>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem sx={{width: 400}}>
                            <TimelineSeparator>
                            <img src={PaymentWayProgress} alt=""/>
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{width: 350}}>
                            <div className={Styles.BookingDetailsTimeLineContent}>
                                <p className={Styles.BookingDetailsTimeLineContentText}>
                                Technician on the way
                                </p>
                                {/* <p className={Styles.BookingDetailsTimeLineContentTimeAndDate}>08/09/2023, 09:30AM</p> */}
                            </div>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem sx={{width: 400}}>
                            <TimelineSeparator>
                            <img src={PaymentWayProgress} alt=""/>
                            </TimelineSeparator>
                            <TimelineContent sx={{width: 350}}>
                            <div className={Styles.BookingDetailsTimeLineContent}>
                                <p className={Styles.BookingDetailsTimeLineContentText}>
                                Completed
                                </p>
                                <p className={Styles.BookingDetailsTimeLineContentTimeAndDate}>
                                Scheduled on 08/09/2023, 09:30AM
                                </p>
                            </div>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                    <div className={Styles.BookingDetailsCancelContainer}>
                        <p className={Styles.BookingDetailsCancelContainerText}>Cancellation policy</p>
                        <p className={Styles.BookingDetailsCancelContainerTextContent}>If you cancel less than 24 hours before your booking, Vulputate condimentum lacus venenatis sem imperdiet accumsan eleifend sem eu.</p>
                        <button className={Styles.BookingDetailsCancelContainerButton}>Cancel booking</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BookingDetails