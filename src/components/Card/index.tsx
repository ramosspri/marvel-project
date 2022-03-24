import React from 'react';
import { CardHeroes } from '../Card/styles';
import Image from 'next/image';

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
      <img
        id="img"
        src="/images/Marvel_Logo.svg"
        alt="Heroe picture"
        width={40}
        height={40}
      />
      <h2>{props.name}</h2>
      <p>#{props.id}</p>
    </CardHeroes>
  );
};

export default Card;
