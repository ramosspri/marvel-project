import styled from 'styled-components';

export const ContainerModal = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.5);
  background-color: var(--gray2);
  border-radius: 1.25rem;
  width: 60%;
  height: 70%;
  color: var(--gray3);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonClose = styled.button`
  background: none;
  border: none;
  padding: 10px;
  position: absolute;
`;
