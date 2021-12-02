import { render, screen } from '@testing-library/react';
import App from './App';

test('render header element', () => {
  render(<App />);
  const headerElement = screen.getByText('Create react app with typescript');
  expect(headerElement).toBeInTheDocument();
});