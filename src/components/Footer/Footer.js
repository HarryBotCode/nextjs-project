import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { MdPhone, MdEmail } from 'react-icons/md';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle><MdPhone size="3rem"/></LinkTitle>
          
          <LinkItem href="tel:+92-312-5983628">+92-312-5983628</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle><MdEmail size="3rem"/></LinkTitle>
          <LinkItem href="mailto:harisjavedawan123@gmail.com">harisjavedawan123@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        
        <CompanyContainer>
          <Slogan>Copyrights &copy; 2022 - All rights reserved</Slogan>
        </CompanyContainer>
        
        <SocialContainer>
        <SocialIcons href="https://github.com/HarryBotCode">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/HAR1SJAVED">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/harriskhanfitness/">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
        </SocialContainer>

      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
