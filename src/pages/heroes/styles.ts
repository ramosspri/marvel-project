import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  max-width: 98%;
  max-height: 95%;
  gap: 1.25rem;
  grid-template-columns: repeat(auto-fit, minmax(12.5rem, auto));
  padding: 1.25rem 0 0 0;
  padding-left: 9.375rem;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ButtonMore = styled.button`
  background: var(--gray2);
  height: 1.875rem;
  width: 6.25rem;
  box-shadow: 0.125rem 0.125rem 0.625rem 0.0625rem rgba(0, 0, 0, 0.4);
  color: var(--gray3);
  font-size: small;
  font-family: Syne;
  border-radius: 0.4375rem;
  transition: all 0.4s;
  border: outset 0.0625rem var(--gray3);

  &:hover {
    background: var(--red);
    border: outset 0.0625rem var(--red-marvel);
  }
`;

export const DivAlignButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px 0;
`;

export const ContainerWidth = styled.div`
  max-width: 100vw;
  max-height: 85vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const DivCards = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
  justify-content: center;
`;

export const ContainerHeight = styled.div`
  max-width: 100vw;
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
