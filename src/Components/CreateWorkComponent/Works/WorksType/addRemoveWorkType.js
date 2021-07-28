import {setAddWorkType, setRemoveWork} from "../WorksAction";

export const addWork = (work, dispatch, data) => {
    const workObj = {
        id: Math.floor(Math.random() * 1000),
        work,
        data
    }
    dispatch(setAddWorkType(workObj))
}
export const removeWork = (id, dispatch) => {
    dispatch(setRemoveWork(id))
}
