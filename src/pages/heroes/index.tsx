import React, { useCallback, useEffect, useState } from 'react';
import api from '../../services/api';
import type { NextPage } from 'next';
import Card from '../../components/Card';
import { ContainerMain, Container, ButtonMore } from './styles';
import Sidebar from '../../components/Sidebar';
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
    <ContainerMain>
      <Sidebar />
      <div className="paodequeijo">
        <Container>
          {characters.map((characters) => {
            return <Card key={characters.id} {...characters} />;
          })}
          <ButtonMore onClick={handleMore}>Load</ButtonMore>
        </Container>
      </div>
    </ContainerMain>
  );
};

export default Heroes;
