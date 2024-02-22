import Footer from "./Components/Footer/Footer"
import Footer2 from "./Components/Footer/Footer2"
import First from "./Components/Home/First"
import Home from "./Components/Home/Home"
import Name from "./Components/Home/Name"

function App() {


  return (
    <>
      <div className='w-full flex flex-col min-h-screen bg-[#246A73]'>
        <First />
        <Name />
        <Home />
        <Footer />
        <Footer2 />
      </div>
    </>
  )
}

export default App