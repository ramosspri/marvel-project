import React from 'react';
import type { NextPage } from 'next';
import {
  Container,
  HomeButton,
  SvgWrapper,
  MarvelLogo,
  Title,
  Subtitle,
  DivImg,
  DivInfos,
  DivAlign,
} from './styles';
import iron from '../../../public/images/iron.svg';
import Marvel_Logo from '../../../public/images/Marvel_Logo.svg';

const Home: NextPage = () => {
  return (
    <Container>
      <DivImg>
        <SvgWrapper src="/images/ironMen.svg" alt="Image of Iron Man" />
      </DivImg>
      <DivInfos>
        <DivAlign>
          <MarvelLogo src="/images/Marvel_Logo.svg" alt="Logo Marvel" />
          <Title>HEROES LIST</Title>
          <Subtitle>Welcome to our Multiverse of Madness</Subtitle>
          <HomeButton>HEROES</HomeButton>
        </DivAlign>
      </DivInfos>
    </Container>
  );
};

export default Home;
