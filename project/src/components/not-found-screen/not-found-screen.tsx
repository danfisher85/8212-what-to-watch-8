import {Link} from 'react-router-dom';
import {AppRoute} from 'configs/routes';
import Logo from 'components/logo/logo';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">404</h1>
      </header>

      <div className="sign-in user-page__content">
        <h2>OOOOPS! Page not Found</h2>
        <p>
          The page you are looking for has been moved or doesn’t exist anymore, if you like you can return to our{' '}
          <Link to={AppRoute.Root}>homepage</Link>.
        </p>
      </div>

      <footer className="page-footer">
        <Logo isInFooter />

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default NotFoundScreen;
