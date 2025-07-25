import React from 'react';

const HeroTextBlock = ({ title }) => (
  <div className="row">
    <h1 className='hero__title'>{title}</h1>
    <p className='hero__description grey'>
      I'm a passionate frontend developer with a strong foundation in web technologies and computer science principles. With expertise in HTML, CSS, and JavaScript, I create engaging, responsive web experiences that combine clean code with intuitive user interfaces.
    </p>
    <p className='hero__description grey'>
      My Bachelor's degree in Computer Science has equipped me with a deep understanding of programming fundamentals, data structures, and algorithms, enabling me to approach frontend challenges with both creativity and technical rigor. This academic foundation allows me to write efficient, scalable code and tackle complex problems with confidence.
    </p>
  </div>
);

export default HeroTextBlock;
