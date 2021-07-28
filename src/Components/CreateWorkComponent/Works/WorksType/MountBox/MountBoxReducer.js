import {SET_CHANGE_BOX_TYPE, SET_CHANGE_ENTRANCE, SET_CHANGE_FLOOR} from "./mountBoxConstants";

const initialState = {
    mountBoxFields: {
        typeBox: 'Пк-3',
        entranceNumber: null,
        floorNumber: null
    }
}

export default function MountBoxReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CHANGE_BOX_TYPE :
            return {
                ...state,
                mountBoxFields: {...state.mountBoxFields, typeBox: action.payload}
            }
        case SET_CHANGE_ENTRANCE :
            return {
                ...state,
                mountBoxFields: {...state.mountBoxFields, entranceNumber: action.payload}
            }
        case SET_CHANGE_FLOOR :
            return {
                ...state,
                mountBoxFields: {...state.mountBoxFields, floorNumber: action.payload}
            }
        default :
            return state
    }
}
