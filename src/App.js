import React from 'react'
import Landing from './pages/Landing'
import List from './pages/List'
import Add from './pages/Add'
import DetailView from './pages/DetailView'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './styles/App.css'
import { useMediaQuery } from 'react-responsive'


import './fonts/HelveticaNeue.ttc'

function App() {
  const [isMobile, setIsMobile] = React.useState(useMediaQuery({query: "(max-width: 390px)"})) 
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const token = "b08acc2558ace25bbab33d0846a79260";

    // we can use useEffect to interact with window since it's outside of our component
    React.useEffect(
        () => {
            function watchResize() {
                setWindowWidth(window.innerWidth)
                if(window.innerWidth <=390) setIsMobile(true)
                else setIsMobile(false)
            }
            window.addEventListener("resize", watchResize);
            return () => {
                window.removeEventListener("resize", watchResize)
            } 
        }, []
    )
    
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing isMobile={isMobile} token={token}/>} />
        <Route path="/list" element={<List isMobile={isMobile} token={token}/>} />
        <Route path="list/:idParam" element={<DetailView isMobile={isMobile} token={token}/>} />
        <Route path="/add" element={<Add isMobile={isMobile} token={token}/>} />
      </Routes>
    </Router>
  )
}

export default App;
