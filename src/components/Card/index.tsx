/* eslint-disable @next/next/no-img-element */
import { Box, Modal } from '@material-ui/core';
import React, { useState } from 'react';
import { CardHeroes, DivImg } from './styles';

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
        open={open}
        onClose={handleClose}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
      >
        <Box
          css={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          sx={{ width: '100vw', height: '100vh', color: 'white' }}
        >
          <img
            src={props.thumbnail.path + '.' + props.thumbnail.extension}
            alt="Heroes pictures"
            width={290}
            height={290}
            style={{ padding: '20px' }}
          />
          <h1>{props.name}</h1>
          <p>#{props.id}</p>
        </Box>
      </Modal>
    </>
  );
};

export default Card;
