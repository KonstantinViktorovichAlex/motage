import {ADD_NEW_EMPLOYEE, REMOVE_EMPLOYEE} from "./employeesConstants";

const initialState = {
    employees:[],
}

export default function EmployeesReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_NEW_EMPLOYEE :
            return {
                ...state,
                employees: [...state.employees, action.payload]
            }
        case REMOVE_EMPLOYEE :
                return {
                    ...state,
                    employees: state.employees.filter(employee => employee.id !== action.payload)
                }
        default :
            return state
    }
}