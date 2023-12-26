import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersLogin, userLoginResponse, getAllDeviceListByIdResponse } from "../../../Redux/Actions";
import { useState } from "react";
import Styles from "./Index.module.css";
import LoginImage from "../../../assets/images/LoginImage.png"
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import  {ReactComponent as  MailIcon} from "../../../assets/SvgIcons/MailIcon.svg";
import Checkbox from '@mui/material/Checkbox';



const Login = () => {

  let dispatch = useDispatch();

  let loginResponse = useSelector((state) => state.Login.loginSuccessfull);

  const [login, setLogin] = useState({ email: "aswinkumar@srushty.com", password: "password123" });


  const initialErrorMessage = { email: "aswinkumar@srushty.com", password: "password123" };


  const [error, setError] = useState(initialErrorMessage);
  const [auth, setAuth] = useState()


  const Validation = () => {

    let a = { email: "", password: "" };
    setError(a);

    if (Object.values(a).every((el) => el === "")) {
      console.log(Object.values(a).every((el) => el === ""));
      dispatch(usersLogin(login));
    }
    if (loginResponse?.statusCode === 400) {
      dispatch(userLoginResponse(""));
    } else if (loginResponse?.statusCode === 500) {
      dispatch(userLoginResponse(""));
    } else if (loginResponse?.statusCode === 200) {
      dispatch(userLoginResponse(""));
    } else {
      setError(a);
    }
  }

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };




  return (
    <div className={Styles.LoginMainContainer}>
      <img src={LoginImage} alt="" />
      <div className={Styles.LoginMainContent}>
        <p className={Styles.LoginMainContentLoginText}>Login</p>
        <div className={Styles.LoginEmailOrMobileContent}>
          <p className={Styles.LoginEmailOrMobileLable}> Email address / Phone number </p>
          <TextField
            className={Styles.LoginPageEmailTextField}
            id="outlined-start-adornment"
            sx={{  width: '35ch', background:"#F8FAFC",border:"1px solid #E9EDF2",borderRadius:"8px"}}
            InputProps={{
              startAdornment: <InputAdornment position="start"><MailIcon/></InputAdornment>,
            }}
          />
        </div>
        <div className={Styles.LoginEmailOrMobileContent}>
          <p className={Styles.LoginEmailOrMobileLable}> Password </p>
          <FormControl sx={{  width: '35ch', background:"#F8FAFC",border:"1px solid #E9EDF2",borderRadius:"8px"}} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </div>
        <div className={Styles.LoginPageRememberAndForgetPasswordContent}>
            <div className={Styles.LoginPageRememberContent}>
            <Checkbox /><p className={Styles.LoginPageRememberContentText}>Remember me</p>
            </div>
            <p className={Styles.LoginPageForgotPasswordContent}>Forgot Password?</p>
        </div>
        <button className={Styles.LoginPageSubmitButton} onClick={()=>{Validation()}}> Continue</button>
        <div className={Styles.LoginPageSignUpLinkContainer}>
            <p className={Styles.LoginPageSignUpLinkContainerText}>New here?</p>
            <p className={Styles.LoginPageSignUpLinkContainerTextLink}>Sign up</p>
        </div>
      </div>
    </div>
  )
}

export default Login