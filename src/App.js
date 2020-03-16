import React from 'react';
import LogiqueModale from './LogiqueModale'
import Modale from './Modale'

import './App.css';

function App() {
  const { revele, toogle } = LogiqueModale();

  return (
    <div className="App">
      <button className="button" onClick={toogle}>Ouvrir la modale</button>
      <Modale
        revele={revele}
        cache={toogle}
      />
    </div>
  );
}

export default App;
