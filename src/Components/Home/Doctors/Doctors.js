import React from 'react';
import img from '../../../images/doctor-sm.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Doctors = () => {
    return (
        <div>
            <img className="img-fluid mb-2" src={img} alt=""/>
            <h4>Dr. Cudi</h4>
            <p><FontAwesomeIcon className="text-primary" icon={faPhone}/>+8801779988728</p>
        </div>
    );
};

export default Doctors;