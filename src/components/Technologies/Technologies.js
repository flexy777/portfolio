import React from 'react';
import { DiDatabase, DiReact} from 'react-icons/di';
import {SiHiveBlockchain} from "react-icons/si";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id='text'>
<SectionDivider/>
<br />
<SectionTitle>Technologies</SectionTitle>
<SectionText>I've worked with a range of technologies in the web development world.
From Design to Front-end to Back-end</SectionText>
<List>
  <ListItem>
    <DiReact size="3rem" />
    <ListContainer>
      <ListTitle>Front-End</ListTitle>
      <ListParagraph>
        Experience with <br />
        React.js
      </ListParagraph>
    </ListContainer>
  </ListItem>

  <ListItem>
    <DiDatabase size="3rem" />
    <ListContainer>
      <ListTitle>Back-End</ListTitle>
      <ListParagraph>
        Experience with <br />
        Node.js, Django and Databases
      </ListParagraph>
    </ListContainer>
  </ListItem>

  <ListItem>
    <SiHiveBlockchain size="3rem" />
    <ListContainer>
      <ListTitle>Blockchain</ListTitle>
      <ListParagraph>
        Experience with <br />
       Motoko and the ICP
      </ListParagraph>
    </ListContainer>
  </ListItem>
  
</List>
 </Section>
);

export default Technologies;
