import { call, put, takeEvery, takeLatest } from "redux-saga/effects"
import {
    GET_DEVICE_BY_ID,
} from "./ActionType"
import { Service } from "../../screens/Services/Healper";
import { getAllDeviceListByIdResponse } from "./Action";






function* getDeviceListById({ payload: deviceId  }) {

    
    try {
        const response = yield call(Service.commonFetch, `/device/getDeviceDataByDeviceId?deviceid=${deviceId}`, 'GET', null, true)

        yield put(getAllDeviceListByIdResponse(response))
        console.error(response)

    }
    catch (error) {
        console.log(error)
    }
}

function* deviceList() {
    yield takeEvery(GET_DEVICE_BY_ID, getDeviceListById)
}

export default deviceList