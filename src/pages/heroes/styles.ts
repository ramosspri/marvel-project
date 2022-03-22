import styled from 'styled-components';

interface ThumbnailData {
  thumbnail: {
    path: string;
    extension: string;
  };
}

export const Container = styled.main`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;

export const CardList = styled.div``;

export const Card = styled.div`
  background: var(--gray2);
  height: 150px;
  width: 150px;
  margin: 10px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 2px 2px 10px 1 rgba(0, 0, 0, 0.3);

  h2 {
    padding: 5px;
    text-align: center;
    font-size: medium;
    color: var(--white2);
  }

  p {
    padding: 5px;
    text-align: center;
    font-size: small;
    color: var(--white2);
  }
`;
