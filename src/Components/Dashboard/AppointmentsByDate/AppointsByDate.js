import React from 'react';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';

const AppointsByDate = ({appointments}) => {
    return (
        <div>
            <h2 className='text-brand text-center'>
                {
                    appointments.length ?
                    <AppointmentShortList appointments={appointments}></AppointmentShortList> : <div className='p-5'>
                        <h4 className='lead text-center'>No Appointments for this Date</h4>
                    </div>
                }
            </h2>
        </div>
    );
};

export default AppointsByDate;