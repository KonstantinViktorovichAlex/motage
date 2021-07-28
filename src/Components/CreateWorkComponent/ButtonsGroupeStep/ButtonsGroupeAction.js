import {SAVED_WORKS_STEP, SET_CHANGE_ACTIVE_BUTTON, SET_CHANGE_PAGE_WORKS} from "./constanstsButtonGroupe";

export const setButtons = (id) => {
    return {
        type: SET_CHANGE_ACTIVE_BUTTON,
        payload: id
    }
}
export const setChangePageWorks = (pageName) => {
    return {
        type: SET_CHANGE_PAGE_WORKS,
        payload: pageName
    }
}
export const setSavedWorksStep = (id) => {
    return {
        type: SAVED_WORKS_STEP,
        payload: id
    }
}