import React from 'react';
import doctor from '../../../images/doctor.png';
import './MakeAppointment.css'

const MakeAppointment = () => {
    return (
        <section className='make-appointment'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-5 d-none d-md-block'>
                        <img src={doctor} alt=""/>
                    </div>
                    <div className='col-md-7 text-white py-5'>
                        <h5 className='text-secondary'>APPOINTMENT</h5>
                        <h3 className='my-4'>Make an appointment Tody</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, facere?</p>
                        <button className="btn btn-primary">Learn more</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;