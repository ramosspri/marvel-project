/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { CardHeroes, DivImg } from '../Card/styles';

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
      <DivImg>
        <img
          src={props.thumbnail.path + '.' + props.thumbnail.extension}
          alt="Heroes pictures"
          width={80}
          height={80}
        />
      </DivImg>
      <h2>{props.name}</h2>
      <p>#{props.id}</p>
    </CardHeroes>
  );
};

export default Card;
