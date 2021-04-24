import React from 'react';
import Doctors from '../Doctors/Doctors';

const Doctor = () => {
    return (
        <section className="doctor">
            <div className="container">
                <h5 className="text-color text-primary mb-5">Our Doctors</h5> 
                <div className="row">
                    <Doctors/>
                    <Doctors/>
                    <Doctors/> 
                </div>
            </div>
            
        </section>
    );
};

export default Doctor;