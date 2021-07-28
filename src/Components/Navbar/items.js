import {PlusCircle, CardChecklist, PersonLinesFill, Gear} from "react-bootstrap-icons";
import React from "react";

export const items = [
    {
        id: '1',
        title:'Создать запись',
        componentName:'createWork',
        icon: <PlusCircle/>
    },
    {
        id: '2',
        title:'Список заявок',
        componentName:'listWorks',
        icon: <CardChecklist/>
    },
    {
        id: '3',
        title:'Отчеты',
        componentName:'reports',
        icon: <PersonLinesFill/>
    },
    {
        id: '4',
        title:'Управление',
        componentName:'settings',
        icon: <Gear/>
    },
]

