import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
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
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<AppWithFallback />} />
          <Route path="/Events" element={<EventWithFallback />} />
          <Route path="/Team" element={<TeamWithFallback />} />
        </Routes>
      </Suspense>
    </Router>
  </React.StrictMode>,
);
