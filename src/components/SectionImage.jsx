import React from 'react';

const SectionImage = ({ path }) => {
  return (
    <div className="row">
      <img src={path} alt="Hero" className="hero__image" />
    </div>
  );
};

export default SectionImage;