import {deleteMaterial} from "../ConnectionWorkAction";

export const handleDeleteMaterial = (id, dispatch) => {
    dispatch(deleteMaterial(id))
}