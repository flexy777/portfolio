import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
    Agba Programmer <br />
    Welcomes you.
    </SectionTitle>
    <SectionText>
      I'm a Fullstack Web Developer and a Dfinity developer who is driven by the passion to be smartly different and unique professionally and aims at bringing ideas to life. 
    </SectionText>
    <Button onclick = {() => window.location = ""}>Learn More</Button>
  </LeftSection>
 </Section>
);

export default Hero;