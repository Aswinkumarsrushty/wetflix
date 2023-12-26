import {GET_DEVICE_BY_ID_RESPONSE,} from "./ActionType"

const initialState = {
    deviceList: null,
    deviceDetails: null,
}

const DeviceList = (device = initialState, action) => {

    switch (action.type) {
        case GET_DEVICE_BY_ID_RESPONSE:
            device = {
                ...device,
                deviceInfo: action.payload
            }                           
            break;

        default:
            device = { ...device }
            break

    }
    return device

}

export default DeviceList