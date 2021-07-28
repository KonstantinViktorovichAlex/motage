import React from 'react';
import {Input} from "../../../../Input/Input";
import {PlusSquare, Eyeglasses} from "react-bootstrap-icons";
import './connection.css'
import {addWork} from "../addRemoveWorkType";
import {useDispatch, useSelector} from "react-redux";
import {
    handleAddMaterial,
    handleCableFlag,
    handleCableType, handleInRoom, handleInstallationMethod, handleMaterial, handleMaterialCount,
    handleMoving,
    handleObjectType,
    handleOutRoom
} from "./connectionChangeFields";
import {AddedMaterials} from "./AddedMaterials/AddedMaterials";

export const ConnectionWork = () => {

    const dispatch = useDispatch()
    const {connectionFields} = useSelector(({ConnectionWorkReducer}) => ConnectionWorkReducer)
    const {defaultWorkType} = useSelector(({WorksReducer}) => WorksReducer)

    return (
        <>
            <AddedMaterials/>
            <div className="card mt-3" style={{width: '100%'}}>
                <div className="card-body">
                    <h5 className="card-title">Подключение</h5>
                    <div className='row'>
                        <div className='col'>
                            <label htmlFor="moving">Переезд</label>
                            <select
                                value={connectionFields.moving}
                                onChange={(event) => {
                                    handleMoving(event.target.value, dispatch)
                                }}
                                className="form-control" id="moving">
                                <option>Да</option>
                                <option>Нет</option>
                            </select>
                        </div>
                        <div className='col'>
                            <label htmlFor="objectType">Тип объекта</label>
                            <select
                                value={connectionFields.objectType}
                                onChange={(event) => {
                                    handleObjectType(event.target.value, dispatch)
                                }}
                                className="form-control" id="objectType">
                                <option>Квартира</option>
                                <option>Частный дом</option>
                                <option>Офис</option>
                                <option>Другое</option>
                            </select>
                        </div>
                        <div className='col'>
                            <label htmlFor="cable">Тип кабеля</label>
                            <select
                                value={connectionFields.cableType}
                                onChange={(event) => {
                                    handleCableType(event.target.value, dispatch)
                                }}
                                className="form-control" id="cable">
                                <option>Оптический</option>
                                <option>Медный</option>
                                <option>Электрический</option>
                            </select>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col'>
                            <Input type={'text'}
                                   label={'Метки кабеля'}
                                   change={(cableFlag) => {
                                       handleCableFlag(cableFlag, dispatch)
                                   }}
                            />
                        </div>
                    </div>
                    <h5 className="card-title">Расход кабеля</h5>
                    <div className='row'>
                        <div className='col'>
                            <Input
                                type={'number'}
                                label={'До помещения'}
                                change={(value) => {
                                    handleOutRoom(value, dispatch)
                                }}
                            />
                        </div>
                        <div className='col'>
                            <Input
                                type={'number'}
                                label={'По помещению'}
                                change={(value) => {
                                    handleInRoom(value, dispatch)
                                }}
                            />
                        </div>
                        <div className='col'>
                            <p>Общая длина</p>
                            {connectionFields.inRoom || connectionFields.outRoom ? <span>
                           {connectionFields.inRoom + connectionFields.outRoom}
                        </span> : <span>0</span>} м.
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <label htmlFor="mountCable">Способ монтажа кабеля</label>
                            <select
                                value={connectionFields.installationMethod}
                                onChange={(event) => {
                                    handleInstallationMethod(event.target.value, dispatch)
                                }}
                                className="form-control" id="mountCable">
                                <option>Укладка в плинтус</option>
                                <option>Укладка в короб</option>
                                <option>На скобы</option>
                            </select>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col'>
                            <label htmlFor="material">Материалы</label>
                            <select
                                value={connectionFields.material}
                                onChange={(event) => {
                                    handleMaterial(event.target.value, dispatch)
                                }}
                                className="form-control" id="material">
                                <option>Патчкорд</option>
                                <option>Розетка</option>
                                <option>RJ45</option>
                            </select>
                        </div>
                        <div className='col'>
                            <Input
                                value={connectionFields.materialCount}
                                type={'number'}
                                label={'Количество'}
                                change={(value) => {
                                    handleMaterialCount(value, dispatch)
                                }}
                            />
                        </div>
                        <div className='col-1 d-flex align-items-center justify-content-center pt-3 '>
                        <span className='addMaterial'
                              onClick={() =>
                                  handleAddMaterial(connectionFields.material, connectionFields.materialCount, dispatch)}
                        >
                            <PlusSquare size={30}/>
                        </span>
                        </div>
                        <div className='col text-center'>
                            <label>Просмотр добавленных</label>
                            <div className='text-center addMaterial' data-toggle="modal" data-target="#addedMaterials">
                                <Eyeglasses size={30}/></div>
                        </div>
                    </div>
                    <button
                        type="button"
                        className="btn btn-outline-primary float-right mt-3"
                        onClick={() => addWork(defaultWorkType, dispatch)}
                    >
                        Добавить
                    </button>
                </div>
            </div>
        </>
    )
}