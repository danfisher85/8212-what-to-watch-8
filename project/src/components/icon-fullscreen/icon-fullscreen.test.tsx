import {render, screen} from '@testing-library/react';
import IconFullScreen from 'components/icon-fullscreen/icon-fullscreen';

describe('Component: IconFullScreen', () => {
  it('should render correctly', () => {
    render(<IconFullScreen />);
    expect(screen.getByText(/Full screen/i)).toBeInTheDocument();
  });
});
