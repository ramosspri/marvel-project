import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  max-width: 98%;
  max-height: 95%;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, auto));
  padding: 20px 0 0 0;
  padding-left: 150px;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
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

export const ContainerWidth = styled.div`
  max-width: 100vw;
  max-height: 90vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const DivCards = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
`;

export const ContainerHeight = styled.div`
  background-color: red;
  max-width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
