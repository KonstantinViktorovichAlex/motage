import {SET_CHANGE_FIELD_CAR, SET_CHANGE_FIELD_TYPE} from "./mountBannerConstants";

const initialState = {
    mountBannerFields: {
        typeWork: 'Подвес на люверсы',
        car: 'Нужна'
    },
}

export default function MountBannerReducer (state = initialState, action) {
    switch (action.type) {
        case SET_CHANGE_FIELD_TYPE :
            return {
                ...state,
                mountBannerFields: {...state.mountBannerFields, typeWork: action.payload}
            }
        case SET_CHANGE_FIELD_CAR :
            return {
                ...state,
                mountBannerFields:{...state.mountBannerFields, car: action.payload}
            }
        default :
            return state
    }
}