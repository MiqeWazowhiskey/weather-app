import './App.css'
import React from 'react'
import {Routes, Route} from "react-router-dom"
const Home = React.lazy(()=>import('./components/Homepage'))

function App() {
  
    return (
      <React.Suspense
          fallback={
            <div className="text-black flex h-screen justify-center items-center text-3xl font-extrabold">
              Loading...
            </div>
        }>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
        </Routes>
      </React.Suspense>
    )
}

export default App
