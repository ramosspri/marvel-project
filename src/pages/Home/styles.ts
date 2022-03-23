import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  background-image: -webkit-linear-gradient(
    210deg,
    var(--gray1) 65%,
    var(--red) 35%
  );
  color: var(--gray3);
`;

export const DivImg = styled.div`
  display: flex;
  height: 100%;
  min-width: 30%;
`;

export const DivInfos = styled.div`
  width: 70%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DivAlign = styled.div`
  width: 80%;
  height: 80%;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  gap: 30px;
`;

export const MarvelLogo = styled.img`
  width: 70%;
`;

export const Title = styled.p`
  color: var(--gray3);
  font-size: 5rem;
  font-family: Marvel;
`;

export const Subtitle = styled.p`
  color: var(--gray3);
  font-size: 2.5rem;
  font-family: 'Syne';
`;

export const HomeButton = styled.button`
  padding: 1rem 0.5rem 0.5rem 0.5rem;
  background-color: var(--red-marvel);
  border-radius: 0.5rem;
  font-family: 'Marvel';
  border: 0px;

  font-size: 3rem;

  transition: 0.6s;

  :hover {
    background-color: var(--red);
    color: var(--gray3);
  }
`;

export const SvgWrapper = styled.img`
  width: 69%;
  transition: 0.4s;
  :hover {
    width: 73%;
  }
`;
