import {setAddNewEmployee, setRemoveEmployee} from "./EmployeesAction";

export const addNewEmployee = (employee, dispatch) => {
    const employeeObj = {
        id: Math.floor(Math.random() * 1000),
        employee
    }
    dispatch(setAddNewEmployee(employeeObj))
}

export const removeEmployee = (id, dispatch) => {
    dispatch(setRemoveEmployee(id))
}