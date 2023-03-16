import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper>
    <LinkList>
      <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href='tel:+234-81-697-982-09'>+234-81-697-982-09</LinkItem>
      </LinkColumn>

      <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href='mailto:samuelomoyele777@gmail.com'>contact@agba_programemer.com</LinkItem>
      </LinkColumn>
    </LinkList>

    <SocialIconsContainer>
    <CompanyContainer>
      <Slogan>Bringing Ideas to Life</Slogan>
    </CompanyContainer>
    <SocialContainer>
    <SocialIcons href='https://github.com/flexy777'>
  <AiFillGithub size="3rem" />
  </SocialIcons>
  <SocialIcons href='https://www.linkedin.com/in/omoyele-samuel-770244199'>
  <AiFillLinkedin size="3rem" />
  </SocialIcons>
  <SocialIcons href='https://instagram.com/agba_programmer'>
  <AiFillInstagram size="3rem" />
  </SocialIcons>
  <SocialIcons href='https://twitter.com/Agba_Programmer'>
  <AiFillTwitterSquare size="3rem" />
  </SocialIcons>
  </SocialContainer>
    </SocialIconsContainer>
   </FooterWrapper>
  );
};

export default Footer;
