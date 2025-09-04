import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Category from './Components/Category'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter basename="/categorymanagement">
        <Routes>
          <Route path="/" element={<Category />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
