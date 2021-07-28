import React from 'react';
import {Input} from "../../../../Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {handleChangeBoxType, handleChangeEntrance, handleChangeFloor} from "./mountBoxChangeFields";
import {addWork} from "../addRemoveWorkType";

export const MountBox = () => {

    const dispatch = useDispatch()
    const {mountBoxFields} = useSelector(({MountBoxReducer}) => MountBoxReducer)
    const {defaultWorkType} = useSelector(({WorksReducer}) => WorksReducer)

    return (
        <div className="card mt-3" style={{width: '100%'}}>
            <div className="card-body">
                <h5 className="card-title">Монтаж ящика</h5>
                <div className='row'>
                    <div className='col'>
                        <form>
                            <div className="form-group">
                                <label htmlFor="typeBox">Выберите тип ящика</label>
                                <select
                                    value={mountBoxFields.typeBox}
                                    onChange={(event) => {
                                        handleChangeBoxType(event.target.value, dispatch)
                                    }}
                                    className="form-control" id="typeBox">
                                    <option>Пк-3</option>
                                    <option>Пк-9</option>
                                    <option>Пк-3Б</option>
                                    <option>Пк-3Х</option>
                                    <option>Пк-3СТ</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div className='col'>
                        <form>
                            <div className="form-group">
                                <Input
                                    value={mountBoxFields.entranceNumber}
                                    label={'№ подъезда'}
                                    type={'number'}
                                    change={(e) => handleChangeEntrance(e, dispatch)}/>
                            </div>
                        </form>
                    </div>
                    <div className='col'>
                        <form>
                            <div className="form-group">
                                <Input
                                    value={mountBoxFields.floorNumber}
                                    label={'№ этажа'}
                                    type={'number'}
                                    change={(e) => handleChangeFloor(e, dispatch)}/>
                            </div>
                        </form>
                    </div>
                </div>
                <button
                    type="button"
                    className="btn btn-outline-primary float-right mt-3"
                    onClick={() => addWork(defaultWorkType, dispatch, mountBoxFields)}
                >
                    Добавить
                </button>
            </div>
        </div>
    )
}