import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { LOGIN } from "./ActionTypes";
import { userLoginResponse } from "./Action";
import { Service } from "../../screens/Services/Healper.js"
import { useDispatch } from "react-redux";

function* userLogin({ payload: loginCredentials }) {
  try {
    const response = yield call(
        Service.commonFetch,
      "/user/login",
      "POST",
      loginCredentials,
      null
    );
    yield put(userLoginResponse(response));
    console.log(response)

    if (response?.statusCode == 200) {
      const authInfo = JSON.stringify({
        userId: response?.data.userId,
        accessToken: response?.data.authToken,
        refreshToken: response?.data.refreshToken
       
      })
      sessionStorage.setItem("auth", authInfo)
      yield put(userLoginResponse(response));
    } else if (response?.statusCode == 400) {
      yield put(userLoginResponse(response));
    } else if (response?.statusCode == 500) {
      yield put(userLoginResponse(response));
    }
    
  } catch (error) {

  }
}
function* login() {
  yield takeEvery(LOGIN, userLogin);
}

export default login;
