import {setComponentName, setFullMenu} from "./NavbarAction";

export const toggleMenu = (value, dispatch) => {
    dispatch(setFullMenu(value))
}

export const toggleComponents = (name, dispatch) => {
    dispatch(setComponentName(name))
}