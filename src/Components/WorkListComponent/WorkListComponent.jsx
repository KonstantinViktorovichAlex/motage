import React from 'react';
import {WorkListItem} from "./WorkListItem/WorkListItem";
import {worksItems} from "./worksItems";
import {FilterComponent} from "../FilterComponent/FilterComponent";

export const WorkListComponent = () => {
    return (
        <div>
            <FilterComponent/>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Дата</th>
                    <th scope="col">Адрес</th>
                    <th scope="col">Сотрудники</th>
                    <th scope="col">Тип</th>
                    <th scope="col">Просмотр</th>
                </tr>
                </thead>
                <tbody>
                    <WorkListItem worksItems={worksItems}/>
                </tbody>
            </table>
        </div>
    )
}