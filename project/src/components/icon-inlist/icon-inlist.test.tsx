import {render, screen} from '@testing-library/react';
import IconInList from 'components/icon-inlist/icon-inlist';

describe('Component: IconInList', () => {
  it('should render correctly', () => {
    render(<IconInList />);
    expect(screen.getByText(/My list/i)).toBeInTheDocument();
  });
});
