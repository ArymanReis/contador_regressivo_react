import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//Pages
import Home from './routes/Home.jsx';
import Countdown from './routes/Countdown.jsx';

//Context
import { CountdownProvider } from './context/CountdownContext.jsx';


const router = createBrowserRouter([
  {
    path: "/contador_regressivo_reactreact",
    element: <App />,
    children: [
      {
        path: "/contador_regressivo_reactreact",
        element: <Home />,
      },
      {
        path: "/contador_regressivo_reactreact/countdown",
        element: <Countdown />,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CountdownProvider>
    <RouterProvider router={router} />
    </CountdownProvider>
  </React.StrictMode>,
)
