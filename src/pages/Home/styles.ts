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
  color: var(--red);
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
  color: var(--white);
  font-size: 5rem;
  font-family: Marvel;
`;

export const Subtitle = styled.p`
  color: var(--white);
  font-size: 2.5rem;
  font-family: Syne;
`;

export const HomeButton = styled.button`
  width: 10rem;
  padding: 2.5rem 0;
  background-color: var(--red);
  border-radius: 0.5rem;
  font-family: Marvel;

  font-size: 3rem;

  transition: 0.4s;

  :hover {
    background-color: cyan;
  }
`;

export const SvgWrapper = styled.img`
  width: 70%;
`;
