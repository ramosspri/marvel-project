import React from 'react';
import { ContainerModal, Container, Content, ButtonClose } from './styles';
import { Icon } from '@iconify/react';

const Modal = ({ id = 'modal', onClose = () => {}, children }) => {
  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose();
  };
  return (
    <>
      <ContainerModal id={id} onClick={onClose}>
        <Container>
          <ButtonClose onClick={onClose}>
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
    </>
  );
};

export default Modal;
