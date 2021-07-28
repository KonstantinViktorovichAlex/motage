import React from 'react';
import {useSelector} from "react-redux";
import {Header} from "../../Layout/Header/Header";
import {Footer} from "../../Layout/Footer/Footer";
import {Navbar} from "../../Components/Navbar/Navbar";
import {WorkListComponent} from "../../Components/WorkListComponent/WorkListComponent";

import cls from 'classnames';
import '../../Components/Navbar/navbar.css';
import {CreateWorkPage} from "../CreateWorkPage/CreateWorkPage";
import {ReportsPage} from "../ReportsPage/ReportsPage";
import {SettingsPage} from "../SettingsPage/SettingsPage";

export const MainPage = () => {

    const {fullMenu, componentName} = useSelector(({NavbarReducer}) => NavbarReducer)

    return (
        <div className='container-fluid p-0'>
            <Header />
            <div className='row min-vh-100'>
                <div className={
                    cls(
                        {'col-2 border border-top-0 border-bottom-0 border-left-0 bg-light pr-0' : fullMenu===true},
                        {'closeMenu border border-top-0 border-bottom-0 border-left-0 bg-light pr-0' : fullMenu===false})}>
                    <Navbar/>
                </div>
                <div className='col'>
                    <div className='container'>
                        {
                            componentName === 'listWorks' ? <WorkListComponent/> :
                            componentName === 'createWork' ? <CreateWorkPage/> :
                            componentName === 'reports' ? <ReportsPage/> :
                            componentName === 'settings' ? <SettingsPage/> :
                                null}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}