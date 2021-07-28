import React from 'react';
import {changeCarField, changeTypeField} from "./changeFields";
import {useDispatch, useSelector} from "react-redux";
import {addWork} from "../addRemoveWorkType";


export const MountBanner = () => {

    const dispatch = useDispatch()
    const {mountBannerFields} = useSelector(({MountBannerReducer}) => MountBannerReducer)
    const {defaultWorkType} = useSelector(({WorksReducer}) => WorksReducer)

    return(
        <div className="card mt-3" style={{width: '100%'}}>
            <div className="card-body">
                <h5 className="card-title">Можтаж баннера</h5>
                <div className='row'>
                    <div className='col'>
                        <form>
                            <div className="form-group">
                                <label htmlFor="mountBanner">Выберите способ размещения</label>
                                <select value={mountBannerFields.typeWork} onChange={(event) => {changeTypeField(event.target.value, dispatch)}} className="form-control" id="mountBanner">
                                    <option>Подвес на люверсы</option>
                                    <option>Установка в лайтбокс</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div className='col'>
                        <form>
                            <div className="form-group">
                                <label htmlFor="car">Вышка</label>
                                <select value={mountBannerFields.car} className="form-control" id="car" onChange={(event) => {changeCarField(event.target.value, dispatch)}}>
                                    <option>Нужна</option>
                                    <option>Не нужна</option>
                                </select>
                            </div>
                        </form>
                    </div>
                </div>
                <button
                    type="button"
                    className="btn btn-outline-primary float-right mt-3"
                    onClick={() => addWork(defaultWorkType, dispatch, mountBannerFields)}
                >
                    Добавить
                </button>
            </div>
        </div>
    )
}