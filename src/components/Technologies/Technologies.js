import React from 'react';
import { DiFirebase, DiReact, DiBootstrap } from 'react-icons/di';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
   
    <Section id="tech">
      <br />
      <SectionDivider />
      
      <SectionTitle><br />Technical Skills</SectionTitle>
      <SectionText>
        I've worked with a range of technologies in the web development world.
        From Back-end to Designs.
      </SectionText>
      <List>
        <ListItem>
          <DiReact size="3rem" />
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              React.js and Next.js
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiFirebase size="3rem" />
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              Node.js and MongoDB
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          {/* for custom icon visit react icon website for any type of logo you want */}
          <DiBootstrap size="3rem" />
          <ListContainer>
            <ListTitle>UI/UX Designs</ListTitle>
            <ListParagraph>
              Experience with <br />
              Bootstrap, Material-UI & Tailwind
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
    
);

export default Technologies;
