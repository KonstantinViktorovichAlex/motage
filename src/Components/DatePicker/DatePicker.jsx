import React from "react";
import DatePicker, {registerLocale} from "react-datepicker";
import ru from 'date-fns/locale/ru';
import './datepicker.css';
import "react-datepicker/dist/react-datepicker.css";

registerLocale("ru", ru);

export const CustomDatePicker = ({change, startDate, endDate, range, changeStart, changeEnd}) => {

    const customInput = (<input type="text" className="form-control"/>)

    return (
        <div className='w-100'>
            <DatePicker
                timeCaption="time"
                dateFormat="Pp"
                timeFormat="p"
                customInput={customInput}
                timeIntervals={1}
                showTimeSelect
                selected={new Date()}
                //onChange={(date) => change(date)}
                locale='ru'
            />
        </div>
    )
}

