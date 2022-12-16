import styled from "styled-components";

const OrderBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
const OrderAddCard = styled.button`
  display: flex;
  position: relative;
  width: 82px;
  align-items: center;
  border: none;
  background: none;
`;
const OrderPlus = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 18px rgba(119, 33, 193, 0.51);
  border-radius: 9px;
  position: absolute;
  height: 90%;
  width: 41px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OrderCart = styled.div`
  background: #7721c1;
  border-radius: 38px;
  width: 82px;
  display: flex;
  justify-content: flex-end;
  padding-right: 12px;
  min-height: 90%;
`;
const OrderBtn = styled.button`
  border: none;
  background: none;
`;
export { OrderBox, OrderAddCard, OrderPlus, OrderCart, OrderBtn };
