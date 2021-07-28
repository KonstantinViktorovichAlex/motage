import {combineReducers} from "redux";
import LoginReducer from "../Components/LoginForm/LoginReducer";
import NavbarReducer from "../Components/Navbar/NavbarReducer";
import ButtonsGroupeReducer from "../Components/CreateWorkComponent/ButtonsGroupeStep/ButtonsGroupeReducer";
import EmployeesReducer from "../Components/CreateWorkComponent/Employees/EmployeesReducer";
import WorksReducer from "../Components/CreateWorkComponent/Works/WorksReducer";
import MountBannerReducer from "../Components/CreateWorkComponent/Works/WorksType/MountBanner/MountBannerReducer";
import MountBoxReducer from "../Components/CreateWorkComponent/Works/WorksType/MountBox/MountBoxReducer";
import ConnectionWorkReducer
    from "../Components/CreateWorkComponent/Works/WorksType/ConnectionWork/ConnectionWorkReducer";

export default combineReducers({
    LoginReducer,
    NavbarReducer,
    ButtonsGroupeReducer,
    EmployeesReducer,
    WorksReducer,
    MountBannerReducer,
    MountBoxReducer,
    ConnectionWorkReducer,
})