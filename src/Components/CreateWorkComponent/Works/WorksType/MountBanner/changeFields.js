import {setChangeFieldCar, setChangeFieldType} from "./MountBannerAction";

export const changeTypeField = (typeWork, dispatch) => {
    dispatch(setChangeFieldType(typeWork))
}
export const changeCarField = (car, dispatch) => {
    dispatch(setChangeFieldCar(car))
}