import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Auth/Login'
import Signup from './pages/Auth/SignUp'


function App() {
 const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home isLoggedIn= {isLoggedIn}/>}/>
        <Route path='/signup' element = {<Signup setIsLoggedIn = {setIsLoggedIn}/>}/>
        <Route path='/login' element = {<Login setIsLoggedIn ={setIsLoggedIn} />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
