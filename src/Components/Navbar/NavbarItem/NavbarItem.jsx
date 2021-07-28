import React from 'react';
import '../navbar.css';
import {useSelector} from "react-redux";

export const NavbarItem = ({itemTitle, itemIcon}) => {
    const {fullMenu} = useSelector(({NavbarReducer}) => NavbarReducer)
    return (
        <div className="pl-3 pb-2 pt-2 text navbarHoverText navbarHoverItem text-muted d-flex align-items-center">
            <h6 className='d-flex align-items-center m-0'><h4
                className='mr-3'>{itemIcon}</h4> {fullMenu ? itemTitle : null}</h6>
        </div>
    )
}