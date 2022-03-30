import React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
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
} from './stylesHome';

const Home: NextPage = () => {
  return (
    <Container>
      <DivImg>
        <SvgWrapper src="/images/ironMan.svg" alt="Image of Iron Man" />
      </DivImg>
      <DivInfos>
        <DivAlign>
          <MarvelLogo src="/images/Marvel_Logo.svg" alt="Logo Marvel" />
          <Title>HEROES LIST</Title>
          <Subtitle>Welcome to our Multiverse of Madness</Subtitle>
          <HomeButton>
            <Link href="/heroes">ASSEMBLE</Link>
          </HomeButton>
        </DivAlign>
      </DivInfos>
    </Container>
  );
};

export default Home;
