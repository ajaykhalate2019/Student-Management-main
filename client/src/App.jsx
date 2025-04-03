import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Add from './Pages/Add'
import Manage from './Pages/Manage'
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login'
import PV from './PV'
function App() {
  

  return (
    <>
    <Router>
      <Routes>
      {/* <Route path='/' element={<Login/>} /> */}
        
        <Route path='/add' element={<Add/>} />
        <Route path='/manage' element={<Manage/>} />

        {/* <Route element={<PV/>}>
        <Route path='/dash' element={<Dashboard/>} />
        </Route> */}
        <Route path='/' element={<Dashboard/>} />
        
      </Routes>
    </Router>
     
    </>
  )
}

export default App
