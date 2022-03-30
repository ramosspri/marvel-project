/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { CardHeroes, DivImg } from './styles';
import Modal from '../Modal';

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
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <CardHeroes
      onClick={(e) => {
        setIsModalVisible(true);
      }}
    >
      {isModalVisible ? (
        <Modal onClose={() => setIsModalVisible(false)}>
          <img
            src={props.thumbnail.path + '.' + props.thumbnail.extension}
            alt="Heroes pictures"
            width={290}
            height={290}
            style={{ padding: '20px' }}
          />
          <h1>{props.name}</h1>
          <p>#{props.id}</p>
        </Modal>
      ) : null}
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
