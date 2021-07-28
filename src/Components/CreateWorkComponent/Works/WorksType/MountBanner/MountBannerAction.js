import {SET_CHANGE_FIELD_CAR, SET_CHANGE_FIELD_TYPE} from "./mountBannerConstants";

export const setChangeFieldType = (typeWork) => {
    return {
        type:SET_CHANGE_FIELD_TYPE,
        payload: typeWork
    }
}
export const setChangeFieldCar = (car) => {
    return {
        type:SET_CHANGE_FIELD_CAR,
        payload: car
    }
}