import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import LandingPage from "./Components/screens/landingpage/LandingPage"
import reportWebVitals from './reportWebVitals';
import "./Components/assets/Global.css";
import Login from "./Components/screens/Authendication/Login/Login.js";
import AppProvider from './Components/screens/AppProvider/AppProvider.js';
import { Provider } from 'react-redux';
import store from "./Components/Redux/Store.js";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <AppProvider>
          <Provider store={store}>
              <Login />
           </Provider>
         </AppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
