import React from 'react';
import { CardHeroes } from '../Card/styles';

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

const Card = (props: ResponseData) => {
  return (
    <CardHeroes>
      <div id="img" />
      <h2>{props.name}</h2>
      <p>#{props.id}</p>
    </CardHeroes>
  );
};

export default Card;
