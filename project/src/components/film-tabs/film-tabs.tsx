import {useState} from 'react';
import TabTitle from 'components/film-tab-title/film-tab-title';

interface FilmTabsTabsProps {
  children: JSX.Element[];
}

function FilmTabs({children}: FilmTabsTabsProps): JSX.Element {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {children.map((tab, tabIndex) => (
            <TabTitle
              key={tab.props.title}
              title={tab.props.title}
              tabIndex={tabIndex}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
          ))}
        </ul>
      </nav>
      {children[selectedTab]}
    </div>
  );
}

export default FilmTabs;
