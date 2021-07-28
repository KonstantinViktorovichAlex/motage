import React from 'react';
import {useDispatch} from "react-redux";
import cls from 'classnames';

export const ButtonsGroupeStep = ({buttons, buttonClick}) => {
    const dispatch = useDispatch()
    return (
        <>
            {buttons && buttons.map((item, index) => {
                return (
                    <button
                        key={item.id}
                        type="button"
                        className={cls("btn ", {'btn-primary': item.active === true},
                            {'btn-secondary' : item.active === false},
                            {'btn-success' : item.success === true})}
                        onClick={() => buttonClick(item.id, index, dispatch, item.buttonName)}
                    >
                        {item.buttonName}
                    </button>
                )
            })}
        </>
    )
}