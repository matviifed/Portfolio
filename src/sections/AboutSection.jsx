import React from 'react';
import SectionHeading from '../components/SectionHeading';
import SectionImage from '../components/SectionImage';

const AboutSection = () => {
  const title = "About Me";
  const description = "Here is some info about me:";
  const path = "/about-image.jpg"; 

  return (
    <section className="section">
      <div className="section__container">
        <SectionHeading title={title} description={description} />
        <div className="left__block">
          <SectionImage path={path} />
        </div>
        <div className="right__block">
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
