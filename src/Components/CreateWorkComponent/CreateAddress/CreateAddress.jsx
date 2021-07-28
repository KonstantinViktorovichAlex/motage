import React from 'react';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';
import {saveStep} from "../ButtonsGroupeStep/step";
import {useDispatch} from "react-redux";

export const CreateAddress = () => {
    const dispatch = useDispatch()
    return (
        <div className="card mt-3" style={{width: '100%'}}>
            <div className="card-body">
                <h5 className="card-title">Адрес</h5>
                <div className='row'>
                    <div className='col'>
                        <form>
                            <div className="form-group">
                                <label htmlFor="city">Введите адрес</label>
                                <AddressSuggestions count={15} token={`6405b7d8404daef051f2779cbe40d5c55cb149d4`} defaultQuery={`Псковская обл`} />
                            </div>
                        </form>
                    </div>
                </div>
                <button type="button" className="btn btn-outline-primary float-right" onClick={() => saveStep('0', dispatch)}>Сохранить</button>
            </div>
        </div>
    )
}