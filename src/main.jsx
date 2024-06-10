import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./assets/css/normalize.css";
import "./assets/css/style.css";
import { BookingSlotProvider } from './assets/components/context/BookingSlot.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <BookingSlotProvider>
        <App />
      </BookingSlotProvider>
    </BrowserRouter>
  </React.StrictMode>
);
