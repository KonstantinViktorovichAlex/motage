import React from 'react';
import {CustomDatePicker} from "../../DatePicker/DatePicker";

export const General = () => {
    return (
        <div className="card mt-3" style={{width: '100%'}}>
            <div className="card-body">
                <h5 className="card-title">Общая информация</h5>
                <div className='row mb-3'>
                    <div className='col'>
                        <label htmlFor="time">Время проведения работ</label>
                        <CustomDatePicker/>
                    </div>
                    <div className='col'>
                        <label htmlFor="client">Тип заказчика</label>
                        <select className="form-control" id="client">
                            <option>Физ. лицо</option>
                            <option>Юр. лицо</option>
                        </select>
                    </div>
                </div>
                <div className='row mb-3'>
                    <div className="col">
                        <div className="form-floating">
                            <label htmlFor="floatingTextarea2">Комментарий</label>
                            <textarea className="form-control" placeholder="Дополнительная информация"
                                      id="floatingTextarea2"
                                      style={{height: '100px'}}>
                            </textarea>
                        </div>
                    </div>
                </div>
                <button type="button" className="btn btn-outline-primary float-right">Сохранить</button>
            </div>
        </div>
    )
}