import React from 'react'
import Close from "../../assets/icons/close.svg";
import { ButtonClose, ModalWinwowContainer, ModalWinwowHeader, ModalWinwowTitleHeader } from './style'


export const ModalWindow = () => {
  return (
    <ModalWinwowContainer>
      <ModalWinwowHeader>
        <ModalWinwowTitleHeader></ModalWinwowTitleHeader>
        <ButtonClose>
          <img src={Close} alt="close" />
        </ButtonClose>
      </ModalWinwowHeader>
    </ModalWinwowContainer>
  )
}
