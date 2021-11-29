import {render, screen} from '@testing-library/react';
import IconPlay from 'components/icon-play/icon-play';

describe('Component: IconPlay', () => {
  it('should render correctly', () => {
    render(<IconPlay />);
    expect(screen.getByText(/Play/i)).toBeInTheDocument();
  });
});
