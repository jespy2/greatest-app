import { useState, useEffect } from 'react';
import { getChuckFact } from '../services/chuckApi';

export const Chuck = () => {
  const [chuckFact, setChuckFact] = useState({ value: 'Hang on, gettin some Chuck!' });

  const getNewFact = async () => {
    const resp = await getChuckFact();
    setChuckFact(resp)
  };

  useEffect( () => {
    getNewFact();
  }, []);

  return (
    <div className="Chuck-Container">
      <h2>Chuck Facts!</h2>
      {!chuckFact ? <h3>Hang on, gettin' some Chuck!</h3> :  <h3>{chuckFact.value}</h3>}
      <button onClick={() => getNewFact()}>Gimme a Chuck fact!</button>
    </div>
  )
}