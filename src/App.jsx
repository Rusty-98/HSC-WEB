import Event from "./Components/Events/Event"
import Footer from "./Components/Footer/Footer"
import Footer2 from "./Components/Footer/Footer2"
import First from "./Components/Home/First"
import Home from "./Components/Home/Home"
import Name from "./Components/Home/Name"
import Navbar from "./Components/Navbar/Navbar"
// import Team from "./Components/Team/Team"

function App() {


  return (
    <>
      {/* <Event /> */}
      <div className='w-full flex flex-col min-h-screen bg-[#246A73]'>
        {/* <Navbar /> */}
        <First />
        <Name />
        <Home />
        <Footer />
        <Footer2 />
        {/* <Team /> */}
      </div>
    </>
  )
}

export default App
