import React from 'react';
import cls from 'classnames';

export const Input = ({type, isvalid, label, change, value}) => {
    return(
        <div className="form-group">
            <label htmlFor={label}>{label}</label>
            <input
                value={value}
                type={type}
                className={cls('form-control', {'is-invalid': isvalid})}
                id={label}
                aria-describedby="emailHelp"
                onChange={(e)=> change(e.target.value)}
            />
        </div>
    )
}