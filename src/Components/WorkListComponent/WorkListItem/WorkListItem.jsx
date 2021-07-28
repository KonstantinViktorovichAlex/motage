import React from 'react';
import {Eye} from 'react-bootstrap-icons';
import '../workList.css';

export const WorkListItem = ({worksItems}) => {
    return (
        <>
            {worksItems && worksItems.map((item) => {
                return (
                    <tr key={item.id}>
                        <th scope="row">{item.id}</th>
                        <td>{item.date}</td>
                        <td>{item.address}</td>
                        <td>{item.userName}</td>
                        <td>{item.workType}</td>
                        <td>
                            <div className='d-flex justify-content-center eye'>
                                <Eye size={20}/>
                            </div>
                        </td>
                    </tr>
                )
            })}
            </>

    )
}