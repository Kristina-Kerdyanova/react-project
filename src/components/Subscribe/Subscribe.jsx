import React from "react"
import Facebook from "../../assets/icons/facebook_subscribe.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Viber from "../../assets/icons/viber.svg";
import Telegram from "../../assets/icons/telegram.svg";
import Youtube from "../../assets/icons/youtube.svg";
import "./style.css";
import { ContainerSocial, StyledForm, StyledInput, StyledLink, StyledSubcribe, SubscribeButton, SubscribeContainer, SubscribeText } from "./style";

export const Subscribe = () => {
  return (
    <StyledSubcribe>
      <SubscribeContainer>
        <ContainerSocial>
          <StyledLink href="https://www.facebook.com/"><img src={Facebook} alt="facebook" /></StyledLink>
          <StyledLink href="https://www.viber.com/"><img src={Viber} alt="viber" /></StyledLink>
          <StyledLink href="https://web.telegram.org/"><img src={Telegram} alt="telegram" /></StyledLink>
          <StyledLink href="https://www.youtube.com"><img src={Youtube} alt="youtube" /></StyledLink>
          <StyledLink href="https://www.instagram.com"><img src={Instagram} alt="instagram" /></StyledLink>
        </ContainerSocial>
        <SubscribeText>
          Подпишитесь и будьте в курсе! Акции, скидки, распродажи ждут!
        </SubscribeText>
        <StyledForm>
          <StyledInput className="placeholder" type="email" placeholder="Ведите e-mail адрес" />
          <SubscribeButton>Подписаться</SubscribeButton>
        </StyledForm>
      </SubscribeContainer>
    </StyledSubcribe>
  )
}
