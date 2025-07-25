import React from 'react';

const TextBlock = ({ description }) => (
  <div className="row">
    <p className='hero__description grey'>
        {description}
    </p>
  </div>
);

export default TextBlock;
