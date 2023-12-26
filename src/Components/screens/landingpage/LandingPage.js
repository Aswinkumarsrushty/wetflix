import React, { useEffect, useState } from "react";
import HomePage from "../pages/homePage/HomePage.js";
import Sidebar from "../sideBar/SideBar";
import Styles from "./Index.module.css";
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Header from "../header/Header";
import DeviceManagement from '../pages/DeviceManagement/DeviceManagement'
import NotificationComponent from "../pages/notification/Notification";
import BookTechnician from "../pages/BookTechnician/BookTechnician.jsx"
import PaymentPage from "../pages/Payment/PaymentPage.js";
import BookingDetails from "../pages/bookingDetails/BookingDetails.js";
import ChangePlan from "../pages/changeplan/ChangePlan.js";
import QuickSetupGuide from "../pages/QuickSetupGuide/QuickSetupGuide.js";
import Login from "../Authendication/Login/Login.js";
import store from "../../Redux/Store.js";
import { Provider } from "react-redux";
import AppProvider from "../AppProvider/AppProvider.js";


const LandingPage = () => {



    return (
        <div className={Styles.LandingPageMainContainer}>
            <AppProvider>
                <BrowserRouter>
                    <Provider store={store}>
                     <Sidebar />
                        <div className={Styles.LandingPageBodyContainerContainer}>
                        <Header />                      
                            <div className='screens-section-container'>
                                <Routes>
                                    <Route path='/dashboard' element={<HomePage />} />
                                    <Route path='/device_management' element={<DeviceManagement />} />
                                    <Route path='/book_technician' element={<BookTechnician />} />
                                    <Route path='/notification_component' element={<NotificationComponent />} />
                                    <Route path='/payment' element={<PaymentPage />} />
                                    <Route path='/booking_details' element={<BookingDetails />} />
                                    <Route path='/change_plan' element={<ChangePlan />} />
                                    <Route path='/quick_setup_guide' element={<QuickSetupGuide />} />
                                </Routes>
                            </div>
                        </div>
                    </Provider>

                </BrowserRouter>
            </AppProvider>
        </div>
    );
};
export default LandingPage;
