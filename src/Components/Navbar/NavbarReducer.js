import {SET_COMPONENT, SET_FULL_MENU} from "./navbarConstants";

const initialState = {
    fullMenu: true,
    componentName:'listWorks',
}

export default function NavbarReducer (state = initialState, action) {
    switch (action.type) {
        case SET_FULL_MENU:
            return {
                ...state,
                fullMenu: action.payload
            }
        case SET_COMPONENT :
            return {
                ...state,
                componentName: action.payload
            }
        default:
            return state
    }
}