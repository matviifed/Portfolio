import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCircle } from '@fortawesome/free-solid-svg-icons';

const LocationStatus = () => (
  <div className="row" style={{ marginTop: 30 }}>
    <p className='hero__location grey'>
      <FontAwesomeIcon icon={faLocationDot} className="icon" style={{ marginRight: 4 }} />
      Poltava, Ukraine
    </p>
    <p className='hero__availability grey'>
      <FontAwesomeIcon icon={faCircle} style={{ color: "#63E6BE", width: "8px", marginRight: 4 }} className='icon' />
      Available for new projects
    </p>
  </div>
);

export default LocationStatus;