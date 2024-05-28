import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Header from "./assets/components/header";
// import NoMatch from "./pages/NotRoute"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<Reservations />} />
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    {/* <Footer /> */}
  </>
  )
}

export default App