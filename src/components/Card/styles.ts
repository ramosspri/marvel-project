import styled from 'styled-components';

export const CardHeroes = styled.div`
  background: var(--gray2);
  height: 150px;
  width: 150px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 2px 2px 10px 1 rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: all 150ms ease-in-out;

  &:hover {
    transform: scale(1.15);
    z-index: 10;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  h2 {
    text-align: center;
    font-size: small;
    color: var(--gray3);
    font-family: 'Syne', sans-serif;
    /* font-weight: 500; */
  }

  p {
    text-align: center;
    font-size: x-small;
    color: var(--red-marvel);
  }
`;

export const DivImg = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;

  > img {
    border-radius: 50%;
  }
`;
