import styled from "styled-components";

const ListCardItem = styled.ul`
  margin: 0 auto;
  width: 100%;
`;

const ModalWindowFooter = styled.footer`
  max-width: 564px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const ModalWindowFooterContent = styled.div`
  display: flex;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 30px;
  text-align: center;
  color: #000000;
`;

const FooterContentTitle = styled.h3`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 30px;
  text-align: center;
  color: #7721c1;
`;

const FooterContentText = styled.p`
  margin-left: 5px;
`;

const ContainerContentTitle = styled.div`
  display: flex;
`;

const ImageModalWindow = styled.img`
  margin-right: 19px;
`;

const StyledAddCard = styled.button`
  display: flex;
  position: relative;
  width: 242px;
  align-items: center;
  border: none;
  background: none;
`;

const AddCartText = styled.p`
  min-height: 50px;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.11);
  border-radius: 9px;
  position: absolute;
  height: 90%;
  width: 186px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 25px;
  color: #7721c1;
`;

const AddCartImage = styled.div`
  background: #7721c1;
  border-radius: 38px;
  width: 242px;
  display: flex;
  justify-content: flex-end;
  padding-right: 14px;
  min-height: 50px;
`;

const ModalWindowContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 585px;
  width: 100%;
  min-height: 341px;
  margin: auto;
`;

export {
  ListCardItem,
  ModalWindowFooter,
  ModalWindowFooterContent,
  FooterContentText,
  AddCartImage,
  AddCartText,
  StyledAddCard,
  ImageModalWindow,
  ContainerContentTitle,
  FooterContentTitle,
  ModalWindowContainerContent
};
