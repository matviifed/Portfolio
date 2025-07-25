import React from 'react'
import heroImage from '../imgs/hero_img.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons' // ← правильний імпорт

const AboutSection = ({ title, children }) => {
  title = "Hi, I'm Matvii"


  return (
    <section className='section'>
      <div className="section__container">
        <div className="section__container__inner">
          <div className="left__block">
            <div className="row">
              <h1 className='hero__title'>{title}</h1>
              <p className='hero__description grey'>
                I'm a passionate frontend developer with a strong foundation in web technologies and computer science principles. With expertise in HTML, CSS, and JavaScript, I create engaging, responsive web experiences that combine clean code with intuitive user interfaces.<br />
                <br />
                My Bachelor's degree in Computer Science has equipped me with a deep understanding of programming fundamentals, data structures, and algorithms, enabling me to approach frontend challenges with both creativity and technical rigor. This academic foundation allows me to write efficient, scalable code and tackle complex problems with confidence.
              </p>
            </div>
            <div className="row" style={{ marginTop: 30 }}>
              <p className='hero__location grey'>
                <FontAwesomeIcon icon={faLocationDot} className="icon" style={{ marginRight: 4 }} />
                Poltava, Ukraine
              </p>
              <p className='hero__availability grey'>
                <FontAwesomeIcon icon={faCircle} style={{ color: "#63E6BE", width: "8px" , marginRight: 4}} className='icon' />
                Available for new projects
              </p>
            </div>

            <div className="row" style={{ marginTop: 30 }}>
                <div className="icons__container">
                    <a href="https://github.com/matviifed" target="_blank" rel="noopener noreferrer" className='icon-link'>
                        <FontAwesomeIcon icon={faGithub} size="2x" className='icon'/>
                    </a>
                    <a href="https://www.linkedin.com/in/matvii-fedoruk-268337254/" target="_blank" rel="noopener noreferrer" className='icon-link'>
                        <FontAwesomeIcon icon={faLinkedin} size="2x" className='icon' />
                    </a>
                    <a href="mailto:mfedorukk@gmail.com" target="_blank" rel="noopener noreferrer" className='icon-link'>
                        <FontAwesomeIcon icon={faEnvelope} size="2x" className='icon' />
                    </a>
                </div>
            </div>
          </div>

          <div className="right__block">
            <div className="row">
              <img src={heroImage} alt="Hero Image" className="hero__image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
