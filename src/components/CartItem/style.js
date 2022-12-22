import styled from "styled-components";

const StyledCartItem = styled.div`
  max-width: 564px;
  width: 100%;
  min-height: 86px;
  margin: auto;
`;

const ContainerCartItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContainerDetailsCardItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
`;

const TitleDetailCardItem = styled.p`
  color: #7721c1;
`;

const ContentDetailCardItem = styled.p`
  color: #000000;
`;

const ContainerContentCartItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 351px;
  margin-right: 54px;
`;

const TitleCardItem = styled.h3`
  text-align: center;
  margin-bottom: 20px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
`;

const ImageCartItem = styled.img``;

const ImageButton = styled.img``;

const LineCartItem = styled.div`
  max-width: 564px;
  width: 100%;
  margin: 18px auto;
  height: 4.8px;
  background: #ffffff;
  box-shadow: inset 0px 4px 17px rgba(119, 33, 193, 0.62);
  border-radius: 7px;
`;

export {
  TitleDetailCardItem,
  ContentDetailCardItem,
  ContainerDetailsCardItem,
  ContainerContentCartItem,
  TitleCardItem,
  ContainerCartItem,
  ImageCartItem,
  ImageButton,
  LineCartItem,
  StyledCartItem,
};
