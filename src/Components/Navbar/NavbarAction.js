import {SET_COMPONENT, SET_FULL_MENU} from "./navbarConstants";

export const setFullMenu = (value) => {
    return {
        type: SET_FULL_MENU,
        payload: value
    }
}
export const setComponentName = (name) => {
    return {
        type: SET_COMPONENT,
        payload: name
    }
}