import styled from 'styled-components';

export const Container = styled.div`
  max-height: 100vh;
  background-image: -webkit-linear-gradient(
    210deg,
    var(--gray1) 65%,
    var(--red) 35%
  );
  color: var(--red);
`;
export const MarvelLogo = styled.img`
  position: absolute;
  float: right;
`;

export const Title = styled.p`
  color: var(--white);
  font-size: 5rem;
  font-family: Marvel;
  float: right;
`;
export const Subtitle = styled.p`
  color: var(--white);
  font-size: 2.5rem;
  font-family: Syne;
  float: right;
`;

export const HomeButton = styled.button`
  position: absolute;
  width: 10rem;
  background-color: var(--red);
  border-radius: 0.5rem;
  float: right;
  font-family: Marvel;
`;

export const SvgWrapper = styled.img`
  float: left;
  position: absolute;
`;
