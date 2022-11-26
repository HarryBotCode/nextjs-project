import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
       
        I'm Haris Javed <br />
        Software Engineer <br /> 
        Web Developer  <br />

      </SectionTitle>
      <SectionText>
      A Front-end web developer with 2 years of experience in building user interfaces for web applications. Highly skilled in using HTML5/CSS, JavaScript, React.js and a decent knowledge of Bootstrap and Material-UI to create responsive user interfaces. A strong ability to translate business requirements into technical specifications.
      </SectionText>
      <Button onClick={() => window.location = 'https://www.linkedin.com/in/HAR1SJAVED'}>Contact me!</Button>
    </LeftSection>

  </Section>
);

export default Hero;