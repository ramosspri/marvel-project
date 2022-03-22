import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import type { NextPage } from 'next';
import Image from 'next/image';
import { Container, CardList, Card } from '../heroes/styles';
import GlobalStyles from '../../styles/GlobalStyles';

interface ResponseData {
  id: string;
  name: string;
  stories: string;
  comics: string;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <GlobalStyles />
      <Container>
        <CardList>
          {characters.map((characters) => {
            return (
              <Card key={characters.id}>
                <div id="img" />
                <h2>{characters.name}</h2>
                <p>#{characters.id}</p>
              </Card>
            );
          })}
        </CardList>
      </Container>
    </>
  );
};

export default Heroes;
