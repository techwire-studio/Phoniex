
import './App.css'
import { Suspense, lazy } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

// Import Components
const Home = lazy(()=> import('./components/Home'))



function App() {
 

  return (
    <Router>
      <Suspense >
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
