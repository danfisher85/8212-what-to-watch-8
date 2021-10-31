import clsx from 'clsx';
import {useCallback} from 'react';

interface FilmTabTitleProps {
  title: string;
  tabIndex: number;
  selectedTab: number;
  setSelectedTab: (tabIndex: number) => void;
}

function FilmTabTitle({title, tabIndex, selectedTab, setSelectedTab}: FilmTabTitleProps): JSX.Element {
  const onClick = useCallback(() => {
    setSelectedTab(tabIndex);
  }, [setSelectedTab, tabIndex]);

  return (
    <li
      onClick={onClick}
      className={clsx(['film-nav__item', {'film-nav__item--active': selectedTab === tabIndex}])}
    >
      <span className="film-nav__link">
        {title}
      </span>
    </li>
  );
}

export default FilmTabTitle;
