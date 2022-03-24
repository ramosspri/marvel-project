import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  /* justify-content: center; */
  /* margin: 10px 0; */
`;

export const ButtonMore = styled.button`
  background: var(--gray2);
  height: 30px;
  width: 100px;
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.4);
  color: var(--gray3);
  font-size: small;
  font-family: Syne;
  border-radius: 7px;
  transition: all 0.4s;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  :hover {
    background: var(--red);
  }
`;

export const HeaderTest = styled.div`
  width: 260px;
  height: 100vh;
  background: yellow;
`;

export const ContainerMain = styled.main`
  max-width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;

  .paodequeijo {
    display: flex;
    flex-direction: column;
    max-width: 90%;
  }
`;
