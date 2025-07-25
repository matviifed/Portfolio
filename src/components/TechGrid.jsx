import React from 'react';

const TechGrid = ({ technologies = [] }) => {
  return (
    <div className='grid__container'>
      {technologies.map((tech, index) => (
        <div key={index} className='grid__container__item'>
          <div className='item__image__box'>
            <img 
              src={tech.image} 
              alt={tech.name}
              className='item__image__box-image'
            />
          </div>
          <span className='item__image__box-text grey'>
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TechGrid;
