import {SET_CHANGE_BOX_TYPE, SET_CHANGE_ENTRANCE, SET_CHANGE_FLOOR} from "./mountBoxConstants";

export const setBoxType = (boxType) => {
    return {
        type: SET_CHANGE_BOX_TYPE,
        payload: boxType
    }
}
export const setEntrance = (entranceNumber) => {
    return {
        type: SET_CHANGE_ENTRANCE,
        payload: entranceNumber
    }
}
export const setFloor = (floorNumber) => {
    return {
        type: SET_CHANGE_FLOOR,
        payload: floorNumber
    }
}