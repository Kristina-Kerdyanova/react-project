import React from 'react';
import wds from "../../assets/images/wds.svg";
import rehau from "../../assets/images/rehau.svg";
import veka from "../../assets/images/veka.svg";
import { StyledBodyNavBorder, StyledBodyNavEllements, StyledBodyNavHead, StyledBodyNavHover, StyledBodyNavSell, StyledBodyNavText, StyledBodyNavWrapper } from '../BodyNavSelect/style'
import { StyledCatalog, StyledCatalogCard, StyledCatalogWrapper } from './style';
import {BodyLine} from '../BodyLine/BodyLine'
export const Catalog = () =>{

    return(
        // <CatalogContainer>
        //     <CatalogWrapper>
        //         <CatalogCard><img src={wds} alt="wds" /></CatalogCard>
        //         <CatalogCard><img src={rehau} alt="" /></CatalogCard>
        //         <CatalogCard><img src={veka} alt="" /></CatalogCard>
        //     </CatalogWrapper>
        // </CatalogContainer>
        <StyledCatalog>

<StyledBodyNavWrapper>
            <StyledBodyNavText>
            <StyledBodyNavHead>
            Каталог брендов
            </StyledBodyNavHead>
            <StyledBodyNavEllements>
                <StyledBodyNavSell>Диваны </StyledBodyNavSell>
                <StyledBodyNavSell>Кровати</StyledBodyNavSell>
                <StyledBodyNavSell>Двери</StyledBodyNavSell>
                <StyledBodyNavSell>Окна</StyledBodyNavSell>
                <StyledBodyNavSell>Натяжные потолки</StyledBodyNavSell>
            </StyledBodyNavEllements>
            </StyledBodyNavText>
            {/* <StyledBodyNavBorder></StyledBodyNavBorder> */}
            <BodyLine></BodyLine>

        </StyledBodyNavWrapper>

            <StyledCatalogWrapper>
                <StyledCatalogCard src={wds} alt=""></StyledCatalogCard>
                <StyledCatalogCard src={rehau} alt=""></StyledCatalogCard>
                <StyledCatalogCard src={veka} alt=""></StyledCatalogCard>
            </StyledCatalogWrapper>
            <StyledCatalogWrapper>
                <StyledCatalogCard src={wds} alt=""></StyledCatalogCard>
                <StyledCatalogCard src={rehau} alt=""></StyledCatalogCard>
                <StyledCatalogCard src={veka} alt=""></StyledCatalogCard>
            </StyledCatalogWrapper>
            <StyledCatalogWrapper>
                <StyledCatalogCard src={wds} alt=""></StyledCatalogCard>
                <StyledCatalogCard src={rehau} alt=""></StyledCatalogCard>
                <StyledCatalogCard src={veka} alt=""></StyledCatalogCard>
            </StyledCatalogWrapper>
        </StyledCatalog>
    );
};