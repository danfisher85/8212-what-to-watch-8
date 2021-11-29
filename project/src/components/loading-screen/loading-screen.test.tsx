import {render, screen} from '@testing-library/react';
import LoadingScreen from 'components/loading-screen/loading-screen';

describe('Component: LoadingScreen', () => {
  it('should render correctly', () => {
    render(<LoadingScreen />);
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });
});
