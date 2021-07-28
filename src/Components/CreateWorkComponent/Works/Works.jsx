import React from 'react';
import {MountBanner} from "./WorksType/MountBanner/MountBanner";
import {useDispatch, useSelector} from "react-redux";
import {changeWorksType} from "./changeWorksType";
import {MountBox} from "./WorksType/MountBox/MountBox";
import {ConnectionWork} from "./WorksType/ConnectionWork/ConnectionWork";
import {AddedWorks} from "./AddedWorks/AddedWorks";

export const Works = () => {
    const dispatch = useDispatch()
    const {defaultWorkType} = useSelector(({WorksReducer}) => WorksReducer)

    return (
        <>
            <div className="card mt-3" style={{width: '100%'}}>
                <div className="card-body">
                    <h5 className="card-title">Работа</h5>
                    <div className='row'>
                        <div className='col'>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="workType">Выберите тип работы</label>
                                    <select onChange={(event)=> {changeWorksType(event.target.value, dispatch)}} className="form-control" id="workType">
                                        <option>Можтаж баннера</option>
                                        <option>Монтаж ящика</option>
                                        <option>Подключение</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {defaultWorkType === 'Можтаж баннера' && <MountBanner/>}
            {defaultWorkType === 'Монтаж ящика' && <MountBox/>}
            {defaultWorkType === 'Подключение' && <ConnectionWork/>}
            <AddedWorks/>
        </>
    )
}