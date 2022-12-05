import React from 'react'
import Facebook from "../../assets/icons/facebook_subscribe.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Viber from "../../assets/icons/viber.svg";
import Telegram from "../../assets/icons/telegram.svg";
import Youtube from "../../assets/icons/youtube.svg";
import './style.css';
import { ContainerSocial, StyledForm, StyledInput, StyledSubcribe, SubscribeButton, SubscribeContainer, SubscribeText } from './style';

export const Subscribe = () => {
  return (
    <StyledSubcribe>
      <SubscribeContainer>
        <ContainerSocial>
          <img src={Facebook} alt="facebook" />
          <img src={Viber} alt="viber" />
          <img src={Telegram} alt="telegram" />
          <img src={Youtube} alt="youtube" />
          <img src={Instagram} alt="instagram" />
        </ContainerSocial>
        <SubscribeText>
          Подпишитесь и будьте в курсе! Акции, скидки, распродажи ждут!
        </SubscribeText>
        <StyledForm>
          <StyledInput className='placeholder' type="email" placeholder="Ведите e-mail адрес" />
          <SubscribeButton>Подписаться</SubscribeButton>
        </StyledForm>
      </SubscribeContainer>
    </StyledSubcribe>
  )
}
