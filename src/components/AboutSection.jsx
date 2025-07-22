import React from 'react'
import heroImage from '../imgs/hero_img.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCircle} from '@fortawesome/free-solid-svg-icons'
    const AboutSection = ({ title, children }) => {
        title = "Hi, I'm Matvii"

      return (
        <section className='section'>
            <div className="section__container">
                <div className="section__container__inner">
                        <div className="left__block">
                            <div className="row">
                                <h1 className='hero__title'>{title}</h1>
                                <p className='hero__description grey'>With over 2 years of experience in HTML and CSS, I have developed a keen eye for detail and a passion for creating visually appealing and user-friendly websites. My expertise in web development has allowed me to create websites that are not only aesthetically pleasing but also optimized for search engines and user experience.</p>
                            </div>
                        
                            <div className="row" style={{marginTop: 30}}>
                                <p className='hero__location grey'>
                                    <FontAwesomeIcon 
                                    icon={faLocationDot} 
                                    className="icon" style={{marginRight: 4}} /> 
                                    Poltava, Ukraine</p>
                                <p className='hero__availability grey'>
                                    <FontAwesomeIcon icon={faCircle} 
                                    style={{color: "#63E6BE", 
                                    width: "8px"}} /> Avaliable for new projects</p>
                            </div>
                        </div>
                        <div className="right__block">
                            <div className="row">
                                <img 
                                    src={heroImage} 
                                    alt="Hero Image" 
                                    className="hero__image"
                                />
                            </div>
                        </div>
                </div>
            </div>
        </section>
      );
    };

    export default AboutSection;