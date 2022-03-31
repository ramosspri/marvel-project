/* eslint-disable @next/next/no-img-element */
import { Box, Modal } from '@material-ui/core';
import { yellow } from '@material-ui/core/colors';
import React, { useState } from 'react';
import { CardHeroes, DivImg, Line } from './styles';

interface ResponseData {
  id: string;
  name: string;
  stories: {
    id: string;
    title: string;
  };
  comics: {
    id: string;
    title: string;
  };
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

const Card = (props: ResponseData) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <CardHeroes onClick={handleOpen}>
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
      <Modal
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
      >
        <Box
          css={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            bgcolor: '#262626',
            width: '60%',
            height: '60%',
            borderRadius: '30px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.8)',
          }}
          sx={{}}
        >
          <img
            src={props.thumbnail.path + '.' + props.thumbnail.extension}
            alt="Heroes pictures"
            width={270}
            height={270}
            style={{
              borderRadius: '50%',
            }}
          />
          <Line />
          <div
            style={{
              backgroundColor: 'yellow',
              display: 'flex',
              alignItems: 'start',
              justifyContent: 'center',
              height: '100%',
            }}
          >
            <h1
              style={{
                color: '#262626',
                fontSize: '22px',
                fontFamily: 'Syne',
              }}
            >
              {props.name}
            </h1>
            <p>{props.comics.id}</p>
            <p>{props.comics.title}</p>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default Card;
