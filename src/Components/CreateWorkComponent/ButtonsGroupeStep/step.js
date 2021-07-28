import {setButtons, setChangePageWorks, setSavedWorksStep} from "./ButtonsGroupeAction";

export const toggleStep = (id, index, dispatch, buttonName) => {
   dispatch(setButtons(id))
   dispatch(setChangePageWorks(buttonName))
}
export const saveStep = (id, dispatch) => {
   dispatch(setSavedWorksStep(id))
}