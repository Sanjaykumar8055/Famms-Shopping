import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router'
import Products from './Components/Products'
import Contact from './Components/Contact'
import About from './Components/About'
import Testimonial from './Components/Testimonial'
import DevloperPage from './Components/DevloperPage'
import Cart from './Components/Cart'

const App = () => {
  const [showCart, setShowCart] = useState(false);
  return (
    <>
      <Navbar onCartclick={()=>setShowCart(true)} />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"About"} element={<About />} />
        <Route path={'Testimonial'} element={<Testimonial />} />
        <Route path={'DevloperPage'} element={<DevloperPage />}/>
        <Route path={"Products"} element={<Products />} />
        <Route path={"Contact"} element={<Contact />} />
      </Routes>
      {showCart && <Cart onClose={() => setShowCart(false)} />}
      <Footer />
    </>
  )
}

export default App