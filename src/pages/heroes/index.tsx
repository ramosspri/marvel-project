import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import type { NextPage } from 'next';

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
        console.log('Segundo log', characters);
      })
      .catch((err) => console.log(err));
  }, []);

  return <div>Heroes here!</div>;
};

export default Heroes;
