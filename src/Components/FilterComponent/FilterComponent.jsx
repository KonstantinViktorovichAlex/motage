import React from 'react';

export const FilterComponent = () => {
    return(
        <div className='row mb-3 mt-3'>
            <div className='col'>
                <div className="input-group">
                    <input type="text" className="form-control" aria-label="Text input with dropdown button"/>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary dropdown-toggle" type="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Фильтр
                            </button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Номер</a>
                                <a className="dropdown-item" href="#">Дата</a>
                                <a className="dropdown-item" href="#">Адрес</a>
                                <a className="dropdown-item" href="#">Вид работ</a>
                                <a className="dropdown-item" href="#">Сотрудники</a>
                                <a className="dropdown-item" href="#">Тип</a>
                                <div role="separator" className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Сбросить фильтр</a>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}