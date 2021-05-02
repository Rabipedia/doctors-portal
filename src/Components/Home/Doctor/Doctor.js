import React, { useEffect, useState } from 'react';
import Doctors from '../Doctors/Doctors';

const Doctor = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:5000/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])
    return (
        <section className="doctor">
            <div className="container">
                <h5 className="text-color text-primary mb-5">Our Doctors</h5> 
                <div className="row">
                    {
                     doctors.map(doctor =><Doctors key={doctor._id} dortor={doctor}></Doctors>)   
                    }
                </div>
            </div>
            
        </section>
    );
};

export default Doctor;