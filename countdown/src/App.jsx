import { Outlet } from 'react-router-dom';

import { useContext } from 'react';

import { CountdownContext } from './context/CountdownContext';

import Bebe from "./assets/bebe.jpg";


import './App.css';

function App() {

  const {event} = useContext(CountdownContext);

  let eventImage = null;

  if (event) eventImage = event.image;

  return (
    <div className="App" style={eventImage 
      ? { backgroundImage: `url(${eventImage})`}
      : { backgroundImage: `url(${Bebe})`}
      }>
      <div className="container">
        <Outlet />
      </div>
    </div>
  )
}

export default App;
