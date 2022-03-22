import { useState, useEffect } from 'react';
import { getChuckFact } from '../services/chuckApi';

export const Chuck = () => {
  const [chuckFact, setChuckFact] = useState(null);
  const [chuckError, setChuckError] = useState(null);

  const getNewFact = async () => {
    const resp = await getChuckFact();
    resp.value ? setChuckFact(resp.value) : setChuckError(resp.message)
    console.log(chuckFact)
  };

  useEffect( () => {
    getNewFact();
  }, []);

  return (
    <div className="Chuck-Container">
      <h2>Chuck Facts!</h2>
      <span data-testid="chuckFact-container">
        {chuckError && 
          <>
            <h2>Oh no, some'in went wrong!!</h2>
            <h3>{chuckError}</h3>
          </>
        }
        {!chuckFact && !chuckError && <h3>Hang on, gettin' some Chuck!</h3>}
        <h3>{chuckFact}</h3>
      </span>
      <button onClick={() => getNewFact()}>Gimme a Chuck fact!</button>
    </div>
  )
}