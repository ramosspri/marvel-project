import styled from 'styled-components';

export const CardHeroes = styled.div`
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

  div#img {
    background: url(${''}) no-repeat center;
    height: 40%;
    width: 40%;
    background-size: cover;
  }
`;
