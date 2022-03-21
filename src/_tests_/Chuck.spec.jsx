import axios from 'axios';
import { render, userEvent, waitFor, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import '@testing-library/jest-dom';
import { URI } from '../services/chuckApi';
import { singleChuck } from '../fixtures/Fact';
import App from '../App';

// declare which API requests to mock
const server = setupServer(
  // capture "GET /greeting" requests
  rest.get(URI, (req, res, ctx) => {
    // respond using a mocked JSON body
    return res(ctx.json(singleChuck))
  }),
)

// establish API mocking before all tests
beforeAll(() => server.listen())
// reset any request handlers that are declared as a part of our tests
// (i.e. for testing one-time error scenarios)
afterEach(() => server.resetHandlers())
// clean up once the tests are done
afterAll(() => server.close())


describe('Chuck Facts', () => {
  it('chuck fact component renders on initial load', async () => {
    render(<App />)
    const chuckTitle = await screen.findByText(/chuck facts!/i);

    expect(chuckTitle).toBeInTheDocument();
  });

  it('loading message during fact fetch', () => {
    render(<App />);
    const chuckFactContainer = screen.getByTestId(`chuckFact-container`);

    expect(chuckFactContainer).toHaveTextContent('Hang on');
  })

  it('chuck fact fetched and rendered on initial load', async () => {
    render(<App />);
    
    const testFact = await screen.findByText(/When Chuck Norris runs with scissors, other people get hurt./i);

    expect(testFact).toBeInTheDocument();
  });

  it('chuck button rendered', async () => {
    render(<App />);
    const chuckButton = await screen.findByRole('button', { name: /gimme a chuck fact!/i });

    expect(chuckButton).toBeInTheDocument();
  })

  // How to test an update to the chuckfact?  
  // Need a second fact in Fact.js?
  it.todo('button renders new chuck fact');
  it.todo('error message when api fails');
})