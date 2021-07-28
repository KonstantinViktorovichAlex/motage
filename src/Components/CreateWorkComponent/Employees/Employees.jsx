import React from 'react';
import './employee.css';
import {AddedEmployees} from "./AddedEmployees/AddedEmployees";
import {useDispatch} from "react-redux";
import {addNewEmployee} from "./addRemoveEmployee";

export const Employees = () => {
    const dispatch = useDispatch()
    return (
        <>
            <div className="card mt-3" style={{width: '100%'}}>
                <div className="card-body">
                    <h5 className="card-title">Сотрудники</h5>
                    <div className='row'>
                        <div className='col'>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="city">Выберите сотрудника</label>
                                    <select onChange={(event) => addNewEmployee(event.target.value, dispatch)} className="form-control" id="city">
                                        <option>Артемий Татьянович</option>
                                        <option>Вин Дизель</option>
                                        <option>Дин Визель</option>
                                        <option>Вин Дроссель</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <AddedEmployees/>
        </>
    )
}