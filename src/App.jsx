import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Header from "./assets/components/header";
import Footer from './assets/components/footer'
import Home from './assets/components/home'
import Reservations from './assets/components/reservations/reservations'
// import NoMatch from "./pages/NotRoute"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservation" element={<Reservations />} />
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    <Footer />
  </>
  )
}

export default App