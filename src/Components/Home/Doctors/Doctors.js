import React from 'react';
import img from '../../../images/doctor-sm.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Doctors = ({doctor}) => {
    return (
        <div>
            {
                doctor.image ? <img style={{height: '200px'}} src={`data:image/jpeg;base64,${doctor.image.img}`} /> : <img style={{height: '200px'}} className="img-fluid mb-2" src={`http://localhost:5000/${doctor.img}`} alt=""/>
            }
            <h4>Dr. Cudi</h4>
            <p><FontAwesomeIcon className="text-primary" icon={faPhone}/>+8801779988728</p>
        </div>
    );
};

export default Doctors;