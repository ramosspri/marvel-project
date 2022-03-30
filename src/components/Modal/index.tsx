import React from 'react';
import { ContainerModal, Container, Content, ButtonClose } from './styles';
import { Icon } from '@iconify/react';

interface Props {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

const Modal = ({ children, open, onClose }: Props) => {
  return (
    <ContainerModal className={open ? '' : 'noShow'}>
      <Container>
        <ButtonClose>
          <Icon
            icon="akar-icons:circle-x-fill"
            color="var(--red-marvel)"
            height="20"
            width="20"
          />
        </ButtonClose>
        <Content>{children}</Content>
      </Container>
    </ContainerModal>
  );
};

export default Modal;
