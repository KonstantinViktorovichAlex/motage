import {SET_ADD_WORK_TYPE, SET_CHANGE_WORK_TYPE, SET_REMOVE_WORK} from "./worksConstants";

export const setChangeWorksType = (workType) => {
    return {
        type: SET_CHANGE_WORK_TYPE,
        payload: workType
    }
}
export const setAddWorkType = (work) => {
    return {
        type: SET_ADD_WORK_TYPE,
        payload: work
    }
}
export const setRemoveWork = (id) => {
    return {
        type: SET_REMOVE_WORK,
        payload: id
    }
}