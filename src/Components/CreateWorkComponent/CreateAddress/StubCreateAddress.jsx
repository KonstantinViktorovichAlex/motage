import React from 'react';

export const StubCreateAddress = () => {
    return(
        <form>
            <div className='row'>
                <div className='col'>
                    <div className="form-group">
                        <label htmlFor="city">Город</label>
                        <select className="form-control" id="city">
                            <option>г.Великие Луки</option>
                            <option>г.Новосокольники</option>
                            <option>г.Невель</option>
                            <option>г.Себеж</option>
                            <option>д.Переслегино</option>
                            <option>п.Дородный</option>
                        </select>
                    </div>
                </div>
                <div className='col'>
                    <div className="form-group">
                        <label htmlFor="street">Улица</label>
                        <input type="text" className="form-control" id="street"
                               placeholder="Введите название улицы"/>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <div className="form-group">
                        <label htmlFor="house">Дом</label>
                        <input type="text" className="form-control" id="house"
                               placeholder="Введите номер дома"/>
                    </div>
                </div>
                <div className='col'>
                    <div className="form-group">
                        <label htmlFor="building">Здание</label>
                        <input type="text" className="form-control" id="building"
                               placeholder="Введите корпус или номер здания"/>
                    </div>
                </div>
                <div className='col'>
                    <div className="form-group">
                        <label htmlFor="apartment">Квартира</label>
                        <input type="text" className="form-control" id="apartment"
                               placeholder="Введите номер квартиры"/>
                    </div>
                </div>
            </div>

        </form>
    )
}