import {ADD_NEW_EMPLOYEE, REMOVE_EMPLOYEE} from "./employeesConstants";

export const setAddNewEmployee = (employee) => {
    return {
        type: ADD_NEW_EMPLOYEE,
        payload:employee,
    }
}
export const setRemoveEmployee = (employee) => {
    return {
        type: REMOVE_EMPLOYEE,
        payload:employee
    }
}