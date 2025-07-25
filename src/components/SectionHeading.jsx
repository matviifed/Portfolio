import React from 'react';

const SectionHeading = ({ title, description }) => {
  return (
    <div className="row">
        <div className="section__heading__container">
            <h2 className='section__title'>{title}</h2>
            <p className='section__description grey'>{description}</p>
        </div>
    </div>
  );
};

export default SectionHeading;