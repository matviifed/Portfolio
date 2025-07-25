import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

const SocialIcons = () => (
  <div className="row" style={{ marginTop: 30 }}>
    <div className="icons__container">
      <a href="https://github.com/matviifed" target="_blank" rel="noopener noreferrer" className='icon-link'>
        <FontAwesomeIcon icon={faGithub} size="2x" className='icon' />
      </a>
      <a href="https://www.linkedin.com/in/matvii-fedoruk-268337254/" target="_blank" rel="noopener noreferrer" className='icon-link'>
        <FontAwesomeIcon icon={faLinkedin} size="2x" className='icon' />
      </a>
      <a href="mailto:mfedorukk@gmail.com" target="_blank" rel="noopener noreferrer" className='icon-link'>
        <FontAwesomeIcon icon={faEnvelope} size="2x" className='icon' />
      </a>
    </div>
  </div>
);

export default SocialIcons;