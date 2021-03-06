/* eslint-disable @next/next/no-img-element */
import { Box, Modal } from '@material-ui/core';
import React, { useState } from 'react';
import { CardHeroes, Details, DivImg, Line, MyDiv } from './styles';
import { Icon } from '@iconify/react';

interface ResponseData {
  id: string;
  name: string;
  comics: {
    id?: string;
    items: Array<{ name: string; resourceURI: string }>;
  };
  events: {
    items: Array<{ name: string; resourceURI: string }>;
  };
  stories: {
    items: Array<{ name: string; resourceURI: string }>;
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
            justifyContent: 'space-around',
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
            width="40%"
            height="80%"
            style={{
              borderRadius: '50%',
            }}
          />
          <Line />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              justifyContent: 'flex-start',
              height: '100%',
              maxWidth: '50%',
            }}
          >
            <h1
              style={{
                color: '#F5F5F5',
                fontSize: '22px',
                padding: '15px 0',
                fontFamily: 'Syne',
                alignSelf: 'center',
              }}
            >
              {props.name}
            </h1>
            <Details>
              <summary
                style={{
                  color: '#F5F5F5',
                  fontFamily: 'Syne',
                  fontSize: '16px',
                  padding: '0 0 6px 0',
                }}
              >
                Comics
              </summary>
              <MyDiv>
                {props.comics.items.map((data) => {
                  return (
                    <p
                      key={data.name}
                      style={{
                        color: '#F5F5F5',
                        fontFamily: 'Syne',
                        fontSize: '14px',
                      }}
                    >
                      <Icon
                        icon="fluent:heart-12-filled"
                        color="#bf0615"
                        width="15"
                        inline={true}
                        style={{ padding: '0 2px', opacity: '70%' }}
                      />
                      {data.name}
                    </p>
                  );
                })}
              </MyDiv>
            </Details>
            <Details>
              <summary
                style={{
                  color: '#F5F5F5',
                  fontFamily: 'Syne',
                  fontSize: '16px',
                  padding: '0 0 6px 0',
                }}
              >
                Stories
              </summary>
              <MyDiv>
                {props.stories.items.map((data) => {
                  return (
                    <p
                      key={data.name}
                      style={{
                        color: '#F5F5F5',
                        fontFamily: 'Syne',
                        fontSize: '14px',
                      }}
                    >
                      <Icon
                        icon="fluent:heart-12-filled"
                        color="#bf0615"
                        width="15"
                        inline={true}
                        style={{ padding: '0 2px', opacity: '70%' }}
                      />
                      {data.name}
                    </p>
                  );
                })}
              </MyDiv>
            </Details>
            <Details>
              <summary
                style={{
                  color: '#F5F5F5',
                  fontFamily: 'Syne',
                  fontSize: '16px',
                  padding: '0 0 6px 0',
                }}
              >
                Events
              </summary>
              <MyDiv>
                {props.events.items.map((data) => {
                  return (
                    <p
                      key={data.name}
                      style={{
                        color: '#F5F5F5',
                        fontFamily: 'Syne',
                        fontSize: '14px',
                      }}
                    >
                      <Icon
                        icon="fluent:heart-12-filled"
                        color="#bf0615"
                        width="15"
                        inline={true}
                        style={{ padding: '0 2px', opacity: '70%' }}
                      />
                      {data.name}
                    </p>
                  );
                })}
              </MyDiv>
            </Details>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default Card;
