import React from 'react'
import Navbar from './Components/Navbar'
import { Routes, Route, Navigate } from 'react-router-dom'
import ProductsPage from './Pages/Products.Page'
import CartPage from './Pages/CartPage'
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Navigate to='/Electronics' />} />
        <Route path='/:products' element={<ProductsPage />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
    </>
  )
}

export default App
