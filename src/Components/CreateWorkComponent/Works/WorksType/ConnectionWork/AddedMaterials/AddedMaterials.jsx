import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Trash} from "react-bootstrap-icons";
import {handleDeleteMaterial} from "./deleteMaterial";

export const AddedMaterials = () => {

    const dispatch = useDispatch()
    const {materials} = useSelector(({ConnectionWorkReducer})=>ConnectionWorkReducer)

    return (
        <div className="modal fade" id="addedMaterials" tabIndex="-1" aria-labelledby="addedMaterials"
             aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Добавленные материалы</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <ul className="list-group">
                            {materials.length !== 0 ? materials.map((item) => {
                                return (
                                    <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                                        {item.material}
                                        <span>
                                            <span className="badge badge-primary badge-pill mr-3">{item.count}</span>
                                            <span className='deleteMaterialModal'
                                                  onClick={() => handleDeleteMaterial(item.id, dispatch)}
                                            >
                                                <Trash size={20}/>
                                            </span>
                                        </span>
                                    </li>
                                )
                            }): <strong>Ничего не добавлено</strong>}
                        </ul>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">Закрыть</button>
                    </div>
                </div>
            </div>
        </div>
    )
}