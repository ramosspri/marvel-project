import React, { useCallback, useEffect, useState } from 'react';
import api from '../../services/api';
import type { NextPage } from 'next';
import Card from '../../components/Card';
import {
  ContainerHeight,
  ContainerWidth,
  Container,
  DivCards,
  ButtonMore,
  DivAlignButton,
} from './styles';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styled from 'styled-components';
interface ResponseData {
  id: string;
  name: string;
  comics: {
    id?: string;
    items: Array<{ name: string; resourceURI: string }>;
  };
  events: {
    items: Array<{ name: string; resourceURI: string }>;
  };
  stories: {
    items: Array<{ name: string; resourceURI: string }>;
  };
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

const Heroes: NextPage = () => {
  const [characters, setCharacters] = useState<ResponseData[]>([]);

  useEffect(() => {
    api
      .get('/characters')
      .then((response) => {
        setCharacters(response.data.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleMore = useCallback(async () => {
    try {
      const offset = characters.length;
      const response = await api.get(`characters`, {
        params: {
          offset,
        },
      });

      setCharacters([...characters, ...response.data.data.results]);
    } catch (err) {
      console.log(err);
    }
  }, [characters]);

  return (
    <>
      <ContainerHeight>
        <ContainerWidth>
          <HeaderWidth>
            <Sidebar />
            <Header title="Super Heroes" />

            <DivCards>
              <LockContainer>
                <Container>
                  {characters.map((characters) => {
                    return <Card key={characters.id} {...characters} />;
                  })}
                </Container>
              </LockContainer>
            </DivCards>
          </HeaderWidth>
        </ContainerWidth>
        <DivAlignButton>
          <ButtonMore onClick={handleMore}>Load</ButtonMore>
        </DivAlignButton>
        <Footer />
      </ContainerHeight>
    </>
  );
};
const LockContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  width: 200vh;
`;
const HeaderWidth = styled.div`
  width: 100vw;
`;
export default Heroes;
