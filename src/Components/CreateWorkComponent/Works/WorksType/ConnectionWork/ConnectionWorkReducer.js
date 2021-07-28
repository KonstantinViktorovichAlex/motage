import {
    DELETE_MATERIAL,
    SET_CABLE_FLAG,
    SET_CABLE_TYPE,
    SET_IN_ROOM,
    SET_INSTALLATION_METHOD, SET_MATERIAL, SET_MATERIAL_COUNT, SET_MATERIALS,
    SET_MOVING,
    SET_OBJECT_TYPE,
    SET_OUT_ROOM
} from "./connectionWorkConstants";

const initialState = {
    connectionFields: {
        moving: 'Нет',
        objectType: 'Квартира',
        cableType: 'Оптический',
        cableFlag: '',
        outRoom:'',
        inRoom:'',
        installationMethod:'Укладка в плинтус',
        material:'Патчкорд',
        materialCount:1
    },
    materials:[]
}

export default function ConnectionWorkReducer (state = initialState, action) {
    switch (action.type) {
        case SET_MOVING :
            return {
                ...state,
                connectionFields: {...state.connectionFields, moving: action.payload}
            }
        case SET_OBJECT_TYPE :
            return {
                ...state,
                connectionFields: {...state.connectionFields, objectType: action.payload}
            }
        case SET_CABLE_TYPE :
            return {
                ...state,
                connectionFields: {...state.connectionFields, cableType: action.payload}
            }
        case SET_CABLE_FLAG :
            return {
                ...state,
                connectionFields: {...state.connectionFields, cableFlag: action.payload}
            }
        case SET_OUT_ROOM :
            return {
                ...state,
                connectionFields: {...state.connectionFields, outRoom: action.payload}
            }
        case SET_IN_ROOM :
            return {
                ...state,
                connectionFields: {...state.connectionFields, inRoom: action.payload}
            }
        case SET_INSTALLATION_METHOD :
            return {
                ...state,
                connectionFields: {...state.connectionFields, installationMethod: action.payload}
            }
        case SET_MATERIAL :
            return {
                ...state,
                connectionFields: {...state.connectionFields, material: action.payload}
            }
        case SET_MATERIAL_COUNT :
            return {
                ...state,
                connectionFields: {...state.connectionFields, materialCount: action.payload}
            }
        case SET_MATERIALS :
            return {
                ...state,
                materials: [...state.materials, action.payload]
            }
        case DELETE_MATERIAL :
            return {
                ...state,
                materials: state.materials.filter(material => material.id !== action.payload)
            }
        default :
            return state

    }
}