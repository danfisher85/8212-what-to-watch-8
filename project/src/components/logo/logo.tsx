import {Link} from 'react-router-dom';
import clsx from 'clsx';
import {AppRoute} from 'configs/routes';

type LogoProps = {
  isInFooter?: boolean;
};

function Logo(props: LogoProps): JSX.Element {
  const {isInFooter} = props;

  return (
    <div className="logo">
      <Link to={AppRoute.Root} className={clsx('logo__link', [{'logo__link--light': isInFooter}])}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

export default Logo;
