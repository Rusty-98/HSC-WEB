import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';

const App = React.lazy(() => import('./App.jsx'));
const Event = React.lazy(() => import('./Components/Events/Event.jsx'));
const Team = React.lazy(() => import('./Components/Team/Team.jsx'));

const AppWithFallback = () => (
  <Suspense fallback={<div className="preloader fixed top-0 left-0 w-screen h-screen flex justify-center items-center backdrop-blur-lg bg-black z-50">
    <img src="/intro.gif" alt="Loading..." className='w-1/2 h-1/2' />
  </div>}>
    <App />
  </Suspense>
);

const EventWithFallback = () => (
  <Suspense fallback={<div>Loading Event...</div>}>
    <Event />
  </Suspense>
);

const TeamWithFallback = () => (
  <Suspense fallback={<div>Loading Team...</div>}>
    <Team />
  </Suspense>
);

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
