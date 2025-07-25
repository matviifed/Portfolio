import React from 'react';
import HeroTextBlock from '../components/HeroTextBlock';
import LocationStatus from '../components/LocationStatus';
import SocialIcons from '../components/SocialIcons';
import HeroImage from '../components/HeroImage';

const AboutSection = ({ title}) => {
  title = "Hello, I'm Matvii"
  return (
    <section className="section">
      <div className="section__container">
        <div className="section__container__inner">
          <div className="left__block">
            <HeroTextBlock title={title} />
            <LocationStatus />
            <SocialIcons />
          </div>
          <div className="right__block">
            <HeroImage />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
