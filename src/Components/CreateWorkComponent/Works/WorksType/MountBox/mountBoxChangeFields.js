import {setBoxType, setEntrance, setFloor} from "./MountBoxAction";

export const handleChangeBoxType = (boxType, dispatch) => {
        dispatch(setBoxType(boxType))
}
export const handleChangeEntrance = (entranceNumber, dispatch) => {
    dispatch(setEntrance(entranceNumber))
}
export const handleChangeFloor = (floorNumber, dispatch) => {
    dispatch(setFloor(floorNumber))
}