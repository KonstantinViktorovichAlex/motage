import React from 'react';
import './header.css';
import logo from '../../Assets/Image/logoSun_sm.png';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {toggleComponents} from "../../Components/Navbar/navbarLogic";

export const Header = () => {
    const dispatch = useDispatch()
    return (
        <nav className="navbar header text-light pt-0 pb-0">
            <div className='row vw-100'>
                <div className='col d-flex align-items-center'>
                    <Link to='/' className="navbar-brand" onClick={()=>{toggleComponents('listWorks', dispatch)}} >
                        <img src={logo} width="30" height="30" alt="martLogo" />
                    </Link>
                    <h5 className='font-weight-bolder'>Журнал монтажников</h5>
                </div>
                <div className='col d-flex align-items-center justify-content-end'>
                    <h6 className='mb-0 mr-4'>Имя пользователя</h6>
                    <button type="button" className="btn btn-sm btn-outline-danger">Выход</button>
                </div>
            </div>
        </nav>
    )
}