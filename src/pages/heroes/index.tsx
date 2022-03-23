import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import type { NextPage } from 'next';
import { Container } from '../heroes/styles';
import Card from '../../components/Card';
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
  }, []);

  return (
    <>
      <GlobalStyles />
      <Container>
        {characters.map((characters) => {
          return <Card key={characters.id} {...characters} />;
        })}
      </Container>
    </>
  );
};

export default Heroes;
