import { combineReducers } from "redux";
import Login from "./Login/Reducers";
import DeviceList from "./Device/Reducers";



const reducers = combineReducers({
    Login,
    DeviceList,
});
export default reducers;
