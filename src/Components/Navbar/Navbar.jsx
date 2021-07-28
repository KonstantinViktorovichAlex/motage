import React from 'react';
import {NavbarItem} from "./NavbarItem/NavbarItem";
import {ArrowLeftCircle, ArrowRightCircle} from "react-bootstrap-icons";
import {items} from './items'
import {useDispatch, useSelector} from "react-redux";
import './navbar.css';
import {toggleComponents, toggleMenu} from "./navbarLogic";

export const Navbar = () => {

    const dispatch = useDispatch()
    const {fullMenu} = useSelector(({NavbarReducer}) => NavbarReducer)

    return (
        <div className="">
            <div className="d-flex align-items-center text-muted pt-2 mb-2">
                {fullMenu ? <h6 className='ml-3 navbarHoverText'
                                onClick={() => {
                                    toggleMenu(false, dispatch)
                                }}
                    >
                        <ArrowLeftCircle size={25}/>
                        <span className='ml-3'>Свернуть</span></h6> :
                    <h6
                        onClick={() => {
                            toggleMenu(true, dispatch)
                        }}
                        className='ml-3 navbarHoverText'
                    >
                        <ArrowRightCircle size={25}/>
                    </h6>
                }
            </div>
            {items.map(item => {
                return (
                    <div key={item.id} onClick={() => {toggleComponents(item.componentName, dispatch)}}>
                        <NavbarItem itemTitle={item.title} itemIcon={item.icon}/>
                    </div>

                )
            })}
        </div>
    )
}