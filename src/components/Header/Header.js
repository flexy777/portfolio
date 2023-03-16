import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
  <Div1>
  <Link href="/" legacyBehavior>
    <a style={{display : "flex", alignItems:"center", color:"white", marginBottom:"20px"}}>
      <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
    </a>
  </Link>
  </Div1>
 <Div2>
  <li>
    <Link href="#projects">
    <NavLink>Projects</NavLink>
    </Link>
  </li>
  <li>
    <Link href="#tech">
    <NavLink>Technologies</NavLink>
    </Link>
  </li>
  <li>
    <Link href="#about">
    <NavLink>About</NavLink>
    </Link>
  </li>
 </Div2>
<Div3>
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
</Div3>

  </Container>
);

export default Header;
