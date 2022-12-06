import React from 'react'
import './style.css';


export const TabNavigation = () => {
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
    <div>
      <div className="tab">
        {tabs.map((item, index) => (
          <button
            className={`tablinks ${index === active ? 'active' : ''}`}
            onClick={openTab}
            data-index={index}
          >{item.title}</button>
        ))}
      </div>
      {tabs[active] && <TabContent {...tabs[active]} />}
    </div>
  )
}

