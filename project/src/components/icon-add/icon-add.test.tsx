import {render, screen} from '@testing-library/react';
import IconAdd from 'components/icon-add/icon-add';

describe('Component: IconAdd', () => {
  it('should render correctly', () => {
    render(<IconAdd />);
    expect(screen.getByText(/Add To My list/i)).toBeInTheDocument();
  });
});
