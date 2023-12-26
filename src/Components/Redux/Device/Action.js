import {
    GET_DEVICE_BY_ID,
    GET_DEVICE_BY_ID_RESPONSE,
} from "./ActionType.js";

export const getAllDeviceListById = (deviceId) => ({
    type: GET_DEVICE_BY_ID,
    payload: deviceId,
});

export const getAllDeviceListByIdResponse = (deviceInfo) => ({
    type: GET_DEVICE_BY_ID_RESPONSE,
    payload: deviceInfo,
});

