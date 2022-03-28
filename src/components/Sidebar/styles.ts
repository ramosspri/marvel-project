import styled from 'styled-components';

export const ContainerMain = styled.div`
  background-color: var(--gray2);
  width: 130px;
  height: 90vh;
  position: fixed;
  left: 0;
  box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.5);
  border-radius: 0 1.25rem 1.25rem 0;

  p {
    font-size: small;
    color: var(--gray3);
    padding-bottom: 1.25rem;
  }
`;

export const MarvelLogo = styled.img`
  width: 4.375rem;
  height: 3.125rem;
`;

export const DivAlign = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0.625rem;
`;

export const DivMenu = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.625rem;
  justify-content: flex-start;
  align-items: center;
  padding: 0.625rem 0.3125rem;

  a {
    text-decoration: none;
    color: var(--gray3);
    font-size: small;
    font-family: Syne;

    &:hover {
      color: var(--red-marvel);
    }
  }
`;

export const DivIcons = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.9375rem 0.625rem;
  /* cursor: pointer; */

  a {
    text-decoration: none;
    color: var(--gray3);
    font-size: small;
    font-family: Syne;

    &:hover {
      color: var(--red-marvel);
    }
  }
`;
