import React from 'react';
import heroImage from '../imgs/hero_img.jpg';

const HeroImage = (image) => (
  <div className="row">
    <img src={heroImage} alt="Hero" className="hero__image" />
  </div>
);

export default HeroImage;