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

export const setMoving = (movingValue) => {
    return {
        type: SET_MOVING,
        payload: movingValue
    }
}
export const setObjectType = (objectType) => {
    return {
        type: SET_OBJECT_TYPE,
        payload: objectType
    }
}
export const setCableType = (cableType) => {
    return {
        type: SET_CABLE_TYPE,
        payload: cableType
    }
}
export const setCableFlag = (cableFlag) => {
    return {
        type: SET_CABLE_FLAG,
        payload: cableFlag
    }
}
export const setOutRoom = (value) => {
    return {
        type: SET_OUT_ROOM,
        payload: value
    }
}
export const setInRoom = (value) => {
    return {
        type: SET_IN_ROOM,
        payload: value
    }
}
export const setInstallationMethod = (method) => {
    return {
        type: SET_INSTALLATION_METHOD,
        payload: method
    }
}
export const setMaterial = (material) => {
    return {
        type: SET_MATERIAL,
        payload: material
    }
}
export const setMaterialCount = (count) => {
    return {
        type: SET_MATERIAL_COUNT,
        payload: count
    }
}
export const setMaterials = (material) => {
    return {
        type: SET_MATERIALS,
        payload: material
    }
}
export const deleteMaterial = (id) => {
    return {
        type: DELETE_MATERIAL,
        payload: id
    }
}