import React from 'react';
import {CreateAddress} from "../../Components/CreateWorkComponent/CreateAddress/CreateAddress";
import {ButtonsGroupeStep} from "../../Components/CreateWorkComponent/ButtonsGroupeStep/ButtonsGroupeStep";
import {toggleStep} from "../../Components/CreateWorkComponent/ButtonsGroupeStep/step";
import {useSelector} from "react-redux";
import {Employees} from "../../Components/CreateWorkComponent/Employees/Employees";
import {General} from "../../Components/CreateWorkComponent/General/General";
import {Works} from "../../Components/CreateWorkComponent/Works/Works";

export const CreateWorkPage = () => {
    const {buttons, pageName} = useSelector(({ButtonsGroupeReducer}) => ButtonsGroupeReducer)
    return (
        <div className='min-vh-100'>
            <div className='row mt-3'>
                <div className='col d-flex justify-content-center'>
                    <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
                        <ButtonsGroupeStep buttons={buttons} buttonClick={toggleStep}/>
                    </div>
                </div>
            </div>
            {pageName === 'Адрес' && <CreateAddress/>}
            {pageName === 'Сотрудники' && <Employees/>}
            {pageName === 'Работа' && <Works/>}
            {pageName === 'Общее' && <General/>}
        </div>
    )
}