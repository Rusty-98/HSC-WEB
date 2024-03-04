import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Event from './Components/Events/Event.jsx';
import Team from './Components/Team/Team.jsx';

import Gallary from './Components/throwback/gallary.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Events",
    element: <Event />,
  },
  {
    path: "/Team",
    element: <Team />,
  },
  {
    path: "/throwback",
    element:<Gallary/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
