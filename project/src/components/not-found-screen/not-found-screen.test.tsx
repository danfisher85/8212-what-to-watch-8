import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import NotFoundScreen from 'components/not-found-screen/not-found-screen';

const history = createMemoryHistory();

describe('Component: NotFoundScreen', () => {
  it('should render correctly', () => {
    const {container} = render(
      <Router history={history}>
        <NotFoundScreen />
      </Router>,
    );

    const allLinks = screen.getAllByRole('link', container);
    const logoLink = allLinks[0];
    const linkToHome = allLinks[1];
    const footerLink = allLinks[2];

    expect(logoLink).toBeInTheDocument();
    expect(linkToHome).toBeInTheDocument();
    expect(footerLink).toBeInTheDocument();
    expect(screen.getByText(/404/i)).toBeInTheDocument();
    expect(screen.getByText(/OOOOPS! Page not Found/i)).toBeInTheDocument();
  });
});
