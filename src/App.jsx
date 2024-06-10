import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Header from "./assets/components/Header";
import Footer from './assets/components/Footer'
import Home from './assets/components/home/Home'
import Reservations from './assets/components/reservations/bookingpage'
import Confirmation from './assets/components/reservations/ConfirmedBooking'
// import NoMatch from "./pages/NotRoute"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservation" element={<Reservations />} />
        <Route path="/reservation/confirmation" element={<Confirmation />} />
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    <Footer />
  </>
  )
}

export default App