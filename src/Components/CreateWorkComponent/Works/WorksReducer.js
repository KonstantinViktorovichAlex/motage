import {SET_ADD_WORK_TYPE, SET_CHANGE_WORK_TYPE, SET_REMOVE_WORK} from "./worksConstants";

const initialState = {
    defaultWorkType: 'Можтаж баннера',
    addedWorks:[],
}

export default function WorksReducer (state = initialState, action) {
    switch(action.type) {
        case SET_CHANGE_WORK_TYPE :
            return {
                ...state,
                defaultWorkType: action.payload
            }
        case SET_ADD_WORK_TYPE :
                return {
                    ...state,
                    addedWorks: [...state.addedWorks, action.payload]
                }
        case SET_REMOVE_WORK :
            return {
                ...state,
                addedWorks: state.addedWorks.filter(work => work.id !== action.payload)
            }
            default :
                return state
    }
}