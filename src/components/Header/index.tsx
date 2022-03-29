import react from 'react';
import { Bar, DivHeader, Info } from './styles';

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps): JSX.Element => {
  return (
    <DivHeader>
      <Info>{title}</Info>
      <Bar />
    </DivHeader>
  );
};

export default Header;
