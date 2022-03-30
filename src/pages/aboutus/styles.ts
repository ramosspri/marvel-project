import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

export const DivInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 4rem;
`;
export const Img = styled.img`
  display: flex;
  height: 100%;
  min-width: 30%;
  border: 2px solid;
  border-color: var(--red);
  border-radius: 50%;
  width: 250px;
`;

export const DivLinks = styled.div`
  display: row;
  list-style: none;
  font-size: 2rem;
`;

export const Name = styled.p`
  color: white;
  font-size: 2rem;
  font-family: 'Syne';
  display: flex;
  text-decoration: underline var(--red);

  transition: 0.6s;

  :hover {
    color: var(--red);
  }
`;
export const Link = styled.a`
  padding: 0.5rem;
  color: var(--white1);
`;
