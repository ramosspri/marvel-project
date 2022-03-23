import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import type { NextPage } from 'next';
import { Container, CardList } from '../heroes/styles';
import Card from '../../components/Card';

interface ResponseData {
  id: string | any;
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
      <Container>
        {characters.map((characters) => {
          return (
            <Card
              key={characters.id}
              id={characters?.id}
              name={characters?.name}
            />
          );
        })}
      </Container>
    </>
  );
};

export default Heroes;
