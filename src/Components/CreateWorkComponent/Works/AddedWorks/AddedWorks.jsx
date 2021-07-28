import React from 'react';
import {Trash} from "react-bootstrap-icons";
import {useDispatch, useSelector} from "react-redux";
import {removeWork} from "../WorksType/addRemoveWorkType";

export const AddedWorks = () => {
    const {addedWorks} = useSelector(({WorksReducer}) => WorksReducer)
    const dispatch = useDispatch()
    return (
        <>
            <ul className="list-group list-group-flush mt-3 border rounded border-bottom-0 border-top-0">
                {addedWorks && addedWorks.map((item) => {
                    return (
                        <li className="list-group-item d-flex justify-content-between">
                            {item.work}
                            <span
                                onClick={() => removeWork(item.id, dispatch)}
                                className='text-primary trashEmployee'>
                            <Trash size={20}/>
                        </span>
                        </li>
                    )
                })}
            </ul>
            {addedWorks.length !== 0 ? <button type="button" className="btn btn-outline-primary float-right mt-3">Сохранить</button> : null}
        </>
    )
}