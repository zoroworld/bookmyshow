// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import ProtectedRoute from './components/ProtectedRoute';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Admin from './pages/admin';
import SingleMovie from './pages/SingleMovie';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import {BrowserRouter, Routes, Route} from "react-router-dom";




function App() {

  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <Routes>
             <Route path='/' element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              } />
              <Route path='/admin' element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              } />
              <Route path='/profile' element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } />
               <Route path='/movie/:id' element={
                <ProtectedRoute>
                  <SingleMovie />
                </ProtectedRoute>
              } />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Register />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
         </BrowserRouter>
      </div>
      
    </>
  )
}

export default App;
