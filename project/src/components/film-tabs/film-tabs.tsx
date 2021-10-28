import {Tabs} from 'types/tab';

interface FilmTabsProps {
  tabs: Tabs;
  children: JSX.Element;
  handleOnClick: (activeTab: string) => void;
}

function FilmTabs({tabs, children, handleOnClick}: FilmTabsProps): JSX.Element {
  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {tabs.map((tab) => (
            <li key={tab.id} className="film-nav__item">
              <a href={`#${tab.id}`} data-id={tab.id} className="film-nav__link" onClick={() => handleOnClick(tab.id)}>
                {tab.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {children}
    </div>
  );
}

export default FilmTabs;
