import axios from 'axios';
import { render, screen } from '@testing-library/react';
import { singleChuck } from '../fixtures/Fact';
import App from '../App';

jest.mock('axios');

describe('Chuck Facts', () => {
  it('fetches and renders chuck fact', async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolved({ data: { singleChuck } })
    );

    render(<App />)

    const testFact = await screen.findByText(/When Chuck Norris runs with scissors, other people get hurt/i);

    await expect(testFact).toBeInTheDocument();
  })
})