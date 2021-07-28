import {buttons} from "./buttons";
import {SAVED_WORKS_STEP, SET_CHANGE_ACTIVE_BUTTON, SET_CHANGE_PAGE_WORKS} from "./constanstsButtonGroupe";

const initialState = {
    buttons: buttons,
    pageName:'Адрес'
}

export default function ButtonsGroupeReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CHANGE_ACTIVE_BUTTON :
            return {
                ...state,
                buttons: state.buttons.map((item) => {
                    if (item.id === action.payload) {
                        return {...item, active: true}
                    } else {
                        return {...item, active: false}
                    }
                    return item
                })
            }
        case SET_CHANGE_PAGE_WORKS :
            return {
                ...state,
                pageName: action.payload
            }
        case SAVED_WORKS_STEP : {
            return {
                ...state,
                buttons: state.buttons.map((item) => {
                    if(item.id === action.payload) {
                        return {...item, success: true}
                    }
                    return item
                })
            }
        }
        default :
            return state
    }
}