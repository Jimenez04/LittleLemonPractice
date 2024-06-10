import { React, useReducer } from "react";
import { createContext } from "react";
import { useState, useEffect } from "react";

export const BookingSlot = createContext();

export function BookingSlotProvider(props) {
  const [availableTimes, setavailableTimes] = useState({
    dates: "",
    times: [],
  });

  const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };

  const fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(new Date(date).getDay());

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      }
      if (random() < 0.5) {
        result.push(i + ":30");
      }
    }
    return result;
  };
  const submitAPI = function (formData) {
    return true;
  };
  useEffect(() => {
    initializeTimes();
  }, []);
  const [state, dispatch] = useReducer(updateTimes, availableTimes);

  const initializeTimes = () => {
    const info = fetchAPI(new Date());
    const newTimes = { ...availableTimes };
    newTimes.times = info;
    setavailableTimes(newTimes);
  };
  function updateTimes(state, date) {
    const newTimes = { ...availableTimes };
    newTimes.times = fetchAPI(date.date);
    setavailableTimes(newTimes);
    return state;
  }
  function submitForm(data) {
    return submitAPI(data);
  }
  return (
    <BookingSlot.Provider
      value={{
        availableTimes,
        submitForm,
        // deleteTask,
        dispatch,
        updateTimes,
      }}
    >
      {props.children}
    </BookingSlot.Provider>
  );
}
