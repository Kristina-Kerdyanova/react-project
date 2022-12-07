import React from 'react'
import { ButtonNavigation, ButtonTabNavigation, ContainerNavigation, ContainerTabNavigation, StyledNavigationBar, TabItem } from './style';
import './style.css';


export const NavigationBar = () => {
  const tabs = [
    { title: 'Горячие предложения', content: 'Тут будут горячие предложения' },
    { title: 'Акции', content: 'Тут могла бы быть Ваша акция' },
    { title: 'Новинки', content: 'Новинки' },
  ];

  const TabContent = ({ title, content }) => (
    <div className="tabcontent">
      <p>{content}</p>
    </div>
  );

  const [active, setActive] = React.useState(null);

  const openTab = event => setActive(+event.target.dataset.index);

  return (
    <ContainerNavigation>
      <ContainerTabNavigation>
        <StyledNavigationBar>
        <ButtonNavigation>Все категории</ButtonNavigation>
          <TabItem className="tab">
            {tabs.map((item, index) => (
              <ButtonTabNavigation
                className={`tablinks ${index === active ? 'active' : ''}`}
                onClick={openTab}
                data-index={index}>
                {item.title}
              </ButtonTabNavigation>
            ))}
          </TabItem>
        </StyledNavigationBar>
      </ContainerTabNavigation>
      {tabs[active] && <TabContent {...tabs[active]} />}
    </ContainerNavigation>
  )
}

