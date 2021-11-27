import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Logo from 'components/logo/logo';

const history = createMemoryHistory();

describe('Component: Logo', () => {
  it('should render correctly if placed in the header', () => {
    const {container} = render(
      <Router history={history}>
        <Logo />
      </Router>,
    );

    expect(screen.getByTitle(/WTW Logo/i)).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(container.querySelector('.logo__link--light')).toBeFalsy();
  });

  it('should render correctly if placed in the footer', () => {
    const {container} = render(
      <Router history={history}>
        <Logo isInFooter />
      </Router>,
    );

    expect(screen.getByTitle(/WTW Logo/i)).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(container.querySelector('.logo__link--light')).toBeTruthy();
  });
});
