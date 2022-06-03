import { render, screen } from '@testing-library/react';
import App from './App';

test('renders magbank header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Magbank/i);
  expect(linkElement).toBeInTheDocument();
});
