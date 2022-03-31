import styled from 'styled-components';

export const DivHeader = styled.div`
  display: flex;
  background-color: var(--gray1);
  font-family: 'Syne';
  color: var(--white1);
  max-height: 10vh;
  width: 100%;
  margin-bottom: 0;
  padding: 20px;
  align-items: center;
`;

export const Info = styled.div`
  font-family: 'Syne';
  color: var(--white1);
  font-size: 2.5rem;
  padding-left: 130px;
  width: max-content;
`;

export const Bar = styled.div`
  position: absolute;
  width: 300px;
  height: 0px;
  left: 150px;
  top: 70px;
  border-radius: 2rem;

  border: 3px solid #bf0615;
`;
