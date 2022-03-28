import React from 'react';
import {
  ContainerMain,
  DivAlign,
  DivIcons,
  DivMenu,
  MarvelLogo,
} from './styles';
import { Icon } from '@iconify/react';
import Link from 'next/link';

function Sidebar() {
  return (
    <>
      <ContainerMain>
        <DivAlign>
          <MarvelLogo src="/images/Marvel_Logo.svg" alt="Logo Marvel" />
          <p>HEROES LIST</p>
        </DivAlign>
        <DivMenu>
          <DivIcons>
            <Icon icon="bx:home-alt-2" color="var(--gray3)" height="17" />
          </DivIcons>
          <Link href="/home">HOME</Link>
        </DivMenu>
        <DivMenu>
          <DivIcons>
            <Icon icon="fa:superpowers" color="var(--gray3)" height="17" />
          </DivIcons>
          <Link href="/heroes">HEROES</Link>
        </DivMenu>
        <DivMenu>
          <DivIcons>
            <Icon icon="charm:info" color="var(--gray3)" height="17" />
          </DivIcons>
          <Link href="/aboutUs">ABOUT US</Link>
        </DivMenu>
      </ContainerMain>
    </>
  );
}

export default Sidebar;
