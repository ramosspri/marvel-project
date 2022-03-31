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
  }

  p {
    text-align: center;
    font-size: x-small;
    color: var(--red-marvel);
  }

  h1 {
    text-align: center;
    font-size: x-large;
    color: var(--gray3);
    font-family: 'Syne', sans-serif;
    font-weight: 800;
  }

  & img {
    border-radius: 40px;
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

export const Line = styled.hr`
  background-color: var(--red-marvel);
  border: none;
  border-radius: 20px;
  opacity: 50%;
  height: 80%;
  width: 2px;
  transform: 0px;
  -webkit-transform: rotate(180deg);
`;
