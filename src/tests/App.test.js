import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders heading', () => {
  render(<App />);
    const heading = screen.getByText(/Surreal Estate/i);
   
    expect(heading).toBeInTheDocument();
});

