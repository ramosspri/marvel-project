import React, { useState, useEffect } from 'react';
import GlobalStyles from '../../styles/GlobalStyles';
import { CardHeroes } from '../Card/styles';
import api from '../../services/api';

const Card: React.FC = (name: any, id: any) => {
  return (
    <>
      <CardHeroes>
        <div id="img" />
        <h2>{name}</h2>
        <p>#{id}</p>
      </CardHeroes>
    </>
  );
};

export default Card;
