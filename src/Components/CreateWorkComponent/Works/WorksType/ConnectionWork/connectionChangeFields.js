import {
    setCableFlag,
    setCableType,
    setInRoom,
    setInstallationMethod, setMaterial, setMaterialCount, setMaterials,
    setMoving,
    setObjectType,
    setOutRoom
} from "./ConnectionWorkAction";

export const handleMoving = (value, dispatch) => {
    dispatch(setMoving(value))
}
export const handleObjectType = (objectType, dispatch) => {
    dispatch(setObjectType(objectType))
}
export const handleCableType = (cableType, dispatch) => {
    dispatch(setCableType(cableType))
}
export const handleCableFlag = (cableFlag, dispatch) => {
    dispatch(setCableFlag(cableFlag))
}
export const handleOutRoom = (value, dispatch) => {
    dispatch(setOutRoom(Number(value)))
}
export const handleInRoom = (value, dispatch) => {
    dispatch(setInRoom(Number(value)))
}
export const handleInstallationMethod = (value, dispatch) => {
    dispatch(setInstallationMethod(value))
}
export const handleMaterial = (material, dispatch) => {
    dispatch(setMaterial(material))
}
export const handleMaterialCount = (value, dispatch) => {
    dispatch(setMaterialCount(value))
}
export const handleAddMaterial = (material, count, dispatch) => {
    const materialObj = {
        id: Math.floor(Math.random() * 1000),
        material,
        count,
    }
    dispatch(setMaterials(materialObj))
}