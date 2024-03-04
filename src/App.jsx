import React, { useState, useEffect } from 'react';
import Event from "./Components/Events/Event";
import Footer from "./Components/Footer/Footer";
import Footer2 from "./Components/Footer/Footer2";
import First from "./Components/Home/First";
import Home from "./Components/Home/Home";
import Name from "./Components/Home/Name";
import Navbar from "./Components/Navbar/Navbar";
// import Team from "./Components/Team/Team";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (replace with actual loading logic)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="preloader fixed top-0 left-0 w-screen h-screen flex justify-center items-center backdrop-blur-lg bg-black z-50">
          <img src="/intro.gif" alt="Loading..." className='w-1/2 h-1/2' />
        </div>
      ) : (
        <div className='w-full flex flex-col min-h-screen bg-black'>
          {/* <Navbar /> */}
          <First />
          <Name />
          <Home />
          <Footer />
          <Footer2 />
          {/* <Team /> */}
        </div>
      )}
    </>
  );
}

export default App;
