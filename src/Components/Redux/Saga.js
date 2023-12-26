import { all } from "redux-saga/effects";
import login from "./Login/Saga.js";
import deviceList from "./Device/Saga.js";



export default function* rootSaga() {
    yield all([
        login(),
        deviceList()
    ])
}
