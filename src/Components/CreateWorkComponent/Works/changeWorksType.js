import {setChangeWorksType} from "./WorksAction";

export const changeWorksType = (workType, dispatch) => {
    dispatch(setChangeWorksType(workType))
}