import react from 'react';

import { DataMarvel, DivFooter, MarvelCopyright } from './styles';
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <DivFooter>
      <DataMarvel>Data provided by Marvel</DataMarvel>
      <MarvelCopyright>
        <Icon icon="ri:copyright-line" color="white" height="16" /> 2014 Marvel
      </MarvelCopyright>
    </DivFooter>
  );
};

export default Footer;
