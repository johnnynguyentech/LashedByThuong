import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
 
import "react-datepicker/dist/react-datepicker.css";
import './Calander.css';

function Calander () {
    const [startDate, setStartDate] = useState(
        setHours(setMinutes(new Date(), 0), 8)
    );
    return (
        <div className="calander">
            <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
                showTimeSelect
                minTime={setHours(setMinutes(new Date(), 0), 8)}
                maxTime={setHours(setMinutes(new Date(), 0), 17)}
                minDate={new Date()}
                dateFormat="MMMM d, yyyy h:mm aa"
                id="calanderStyle"
            />
        </div>
    );
}

export default Calander;