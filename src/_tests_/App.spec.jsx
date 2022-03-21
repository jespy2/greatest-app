import { render, screen } from '@testing-library/react';
import App from '../App';



//Testing App render
describe('App', () => {

  it('renders App title', () => {
    render(<App />);
    const appTitle = screen.getByText(/Greatest App/);

    expect(appTitle).toBeInTheDocument();
  });

  it('renders App with subtitle', () => {
    render(<App />);
    const appSubtitle = screen.getByText(/Click a button below/);

    expect(appSubtitle).toBeInTheDocument();
  });

  it.todo('test api on Chuck component')
})

