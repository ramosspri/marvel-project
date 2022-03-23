import styled from 'styled-components';

/* 
interface ThumbnailData {
  thumbnail: {
    path: string;
    extension: string;
  };
}

const urlImg = (props: ThumbnailData) =>
  `${props.thumbnail.path}.${props.thumbnail.extension}`; */

export const Container = styled.main`
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  height: 100%;
  justify-content: center;
  background-color: yellow;

  h2 {
    padding: 5px;
    text-align: center;
    font-size: medium;
    color: var(--red-marvel);
    font-family: 'Marvel', sans-serif;
    font-style: normal;
    font-weight: 800;
  }

  p {
    padding: 5px;
    text-align: center;
    font-size: small;
    color: var(--black1);
  }
`;

export const CardList = styled.div``;
