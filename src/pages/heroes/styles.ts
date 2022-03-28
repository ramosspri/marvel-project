import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  max-width: 98%;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(250px, auto));
  padding: 20px 0;
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
  border: outset 1px var(--gray3);

  &:hover {
    background: var(--red);
    border: outset 1px var(--red-marvel);
  }
`;

export const ContainerMain = styled.main`
  max-width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;

  .paodequeijo {
    display: flex;
    flex-direction: column;
    width: 96vw;
  }
`;
