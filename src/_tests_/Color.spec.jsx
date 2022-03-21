import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

//Testing Color Button render and functionality
describe('Testing Color Button Component', () => {

  it('button component has title', () => {
    render(<App />);
    const colorButtonTitle = screen.getByText(/Change the color/);

    expect(colorButtonTitle).toBeInTheDocument();
  });
  
  it('Button component has a button', () => {
    render(<App />);
    const colorButton = screen.getByRole('button', { name: /Click Me/i })
    
    expect(colorButton).toBeInTheDocument();
  })

  it('Color text initially says grey', () => {
    render(<App />);
    const colorText = screen.getByTestId('color-text');

    expect(colorText).toHaveTextContent(/grey/);
  })

  it('Color box initially is grey', () => {
    render(<App />);
    const colorBox = screen.getByTestId('color-container');

    expect(colorBox).toHaveStyle('backgroundColor: grey');
  })

  it('button click updates the color text', () => {
    render(<App />);
    const colorButton = screen.getByTestId('color-button');
    const colorText = screen.queryByTestId('color-text');
    userEvent.click(colorButton);

    expect(colorText).not.toHaveTextContent(/grey/);
  })

  it('button click updates the color of the container', () => {
    render(<App />);
    const colorButton = screen.getByTestId('color-button');
    const colorBox = screen.queryByTestId('color-container');
    userEvent.click(colorButton);

    expect(colorBox).not.toHaveStyle('backgroundColor: grey');
  })

  it('when color is light green, button click changes text to grey', () => {
    render(<App />);
    
    const colorButton = screen.getByTestId('color-button');
    const colorText = screen.queryByTestId('color-container');
    userEvent.click(colorButton);
    userEvent.click(colorButton);
    userEvent.click(colorButton);
    userEvent.click(colorButton);

    expect(colorText).toHaveTextContent(/grey/);
  })

  it('when color is light green, button click changes text color to grey', () => {
    render(<App />);
    
    const colorButton = screen.getByTestId('color-button');
    const colorBox = screen.queryByTestId('color-container');
    userEvent.click(colorButton);
    userEvent.click(colorButton);
    userEvent.click(colorButton);
    userEvent.click(colorButton);

    expect(colorBox).toHaveStyle('backgroundColor: grey');
  })
})