import React from 'react';
import type { NextPage } from 'next';
import {
  Container,
  HomeButton,
  SvgWrapper,
  MarvelLogo,
  Title,
  Subtitle,
} from './styles';
import iron from '../../../public/images/iron.svg';
import Marvel_Logo from '../../../public/images/Marvel_Logo.svg';

const Home: NextPage = () => {
  return (
    <Container>
      <img src="/images/ironMen.svg" alt="" />
      <MarvelLogo src={Marvel_Logo} />
      <Title>HEROES LIST</Title>
      <Subtitle>Welcome to our Multiverse of Madness</Subtitle>
      <HomeButton>HEROES</HomeButton>
    </Container>
  );
};

export default Home;
