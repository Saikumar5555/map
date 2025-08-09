// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


import { render, screen } from '@testing-library/react';
import App from './App';

test('renders map heading', () => {
  render(<App />);
  const heading = screen.getByText(/Visakhapatnam/i); // or whatever is in your app
  expect(heading).toBeInTheDocument();
});
