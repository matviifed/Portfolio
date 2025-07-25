import React from 'react';
import SectionHeading from '../components/SectionHeading';
import SectionImage from '../components/SectionImage';
import TextBlock from '../components/TextBlock'
const AboutSection = () => {
  const title = "About Me";
  const description = "Here are some facts about me:";
  const path = "/about-image.jpg"; 

  return (
    <section className="section">
      <div className="section__container">
        <SectionHeading title={title} description={description} />
          <div className="section__container__inner" style={{ marginTop: 30, alignItems: 'center' }} >
            <div className="left__block">
              <SectionImage path={path} />
            </div>
            <div className="right__block">
              <TextBlock description={
                <>
                  <p style={{marginTop: '0'}}>I'm a passionate web developer transitioning into front-end development, with a strong foundation in both technical implementation and creative problem-solving. Currently working as a website content manager, I bring hands-on experience from my freelance WordPress development background and a deep understanding of web technologies including HTML, CSS, and JavaScript.</p>
                  <p>My journey began at 18 when I started freelancing as a WordPress developer, which taught me the importance of balancing functionality with user experience. Now, armed with a Computer Science bachelor's degree, I'm expanding my expertise toward modern full-stack technologies, eager to build comprehensive web applications from concept to deployment.</p>
                  <p>What sets me apart is my unique blend of web development skills and specialized knowledge in AI and machine learning. Through my thesis work, I've gained extensive experience creating neural models for image analysis, giving me insight into cutting-edge technologies that are reshaping how we interact with digital products. This combination of traditional web development and AI expertise positions me to work on innovative projects that merge established web technologies with emerging AI capabilities.</p>
                  <p>I'm always interested in learning new technologies, so my main goal in programming is to improve my skills everyday.</p>
                  <p>One last thing: I'm avaliable for freelance or full-time Frontend-Developer work, so feel free to reach me out, will be happy to answer :)</p>
                </>
              } />
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
