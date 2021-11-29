import {render, screen} from '@testing-library/react';
import IconPause from 'components/icon-pause/icon-pause';

describe('Component: IconPause', () => {
  it('should render correctly', () => {
    render(<IconPause />);
    expect(screen.getByText(/Pause/i)).toBeInTheDocument();
  });
});
