import { render, cleanup, waitFor, act, screen } from '@testing-library/react';
// import { mock, resetAllMocks } from '@jest';
import { singleChuck, emptyChuck } from '../fixtures/Fact';
import { getChuckFact } from '../services/chuckApi';
// import axios from 'axios';
import App from '../App';


//Testing Chuck Button
describe('Chuck button', () => {
  afterEach(() => {
    cleanup();
    jest.resetAllMocks();
  })
  jest.mock('../services/chuckApi');

  const mockedAxios = jest.mock(getChuckFact)

  it('Chuck component title renders', async () => {
    await act(async () => {
      render(<App />);

      const chuckTitle = await screen.findByText(/Chuck Facts!/);

      expect(chuckTitle).toBeInTheDocument();
    })
  })

  it('Renders a fact correctly', async () => {
    mockedAxios.mockImplementationOnce(() => Promise.resolve(singleChuck));
  
    await act(async () => {
      render(<App />);
      const chuckFact = await screen.findByText(/When Chuck Norris runs with scissors, other people get hurt./i);

      expect(chuckFact).toBeTruthy();
    });
  });

  // it('chuck component title renders', async () => {
  //   axios.get.mockImplementation(url => {
  //     if (url === 'https://api.chucknorris.io/jokes/random') {
  //       return Promise.resolve({data: { value: 'chuck fact retrieved'}})
  //     }
  //   })
  //   render(<App />);

  //   const chuckTitle = await screen.findByText(/Chuck Facts!/);

  //   expect(chuckTitle).toBeInTheDocument();
  // });


  it.todo('chuck fact renders on initial load');
  it.todo('chuck button rendered')
  it.todo('loading message during fact fetch')
  it.todo('button renders new chuck fact');
  it.todo('error message when api fails');
})