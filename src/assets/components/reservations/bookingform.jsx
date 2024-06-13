import { useState, React } from "react";
import { useContext } from "react";
import { BookingSlot } from "../context/BookingSlot";
import { useNavigate } from "react-router-dom";

export default function bookingpage() {
  const navigate = useNavigate();
  const props = useContext(BookingSlot);
  const [validateForm, setvalidateForm] = useState(false);
  const [personalinfo, setpersonalinfo] = useState({
    fname: "",
    lname: "",
    email: "",
    number: "",
  });
  const [tableinfo, settableinfo] = useState({
    date: "",
    people: "",
    time: "",
    text: "",
  });
  const handlechange = (e) => {
    Object.keys(personalinfo).map((keyName, i) => {
      if (!personalinfo[keyName] != null && !personalinfo[keyName] != "") {
        setvalidateForm(false);
      } else {
        setvalidateForm(true);
      }
    });
    setvalidateForm(
      tableinfo.date >= new Date().toLocaleString() ? true : false
    );
    setvalidateForm(
      tableinfo.time != "" && tableinfo.time != null ? true : false
    );
    setvalidateForm(
      tableinfo.people != "" && tableinfo.time != null ? true : false
    );
    setvalidateForm(
      tableinfo.text != "" && tableinfo.time != null ? true : false
    );
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(e.email);
    props.submitForm() ? navigate("/reservation/confirmation") : "";
  };
  const updatedate = (e) => {
    settableinfo({
      ...tableinfo,
      date: e,
    });
    props.dispatch({ date: e });
  };
  return (
    <form className="reservation_form max_width" onSubmit={handlesubmit}>
      <div className="reservation_form_tittle line">
        <div>
          <h1>Reservation Detail</h1>
        </div>
      </div>
      <div className="reservation_form_user_info line">
        <div className="reservation_form_user_info_tittle">
          <h2>User Info</h2>
        </div>
        <div className="reservation_form_user_info_container_input flex flex_space_between">
          <div className="reservation_form_user_info_container_input_1">
            <div className="flex flex_space_between flex_center_y">
              <label htmlFor="fname">First Name*</label>
              <input
                type="text"
                id="fname"
                name="fname"
                value={personalinfo.fname}
                onChange={(e) => {
                  setpersonalinfo({
                    ...personalinfo,
                    fname: e.target.value,
                  });
                  handlechange();
                }}
                required
                minLength={5}
                maxLength={15}
              ></input>
            </div>
            <div className="flex flex_space_between flex_center_y">
              <label htmlFor="email">Email*</label>{" "}
              <input
                type="email"
                id="email"
                value={personalinfo.email}
                onChange={(e) => {
                  setpersonalinfo({
                    ...personalinfo,
                    email: e.target.value,
                  });
                  handlechange();
                }}
                required
                minLength={5}
                maxLength={15}
              ></input>
            </div>
          </div>
          <div className="reservation_form_user_info_container_input_2">
            <div className="flex flex_space_between flex_center_y">
              <label htmlFor="lname">Last Name*</label>
              <input
                type="text"
                id="lname"
                name="lname"
                value={personalinfo.lname}
                onChange={(e) => {
                  setpersonalinfo({
                    ...personalinfo,
                    lname: e.target.value,
                  });
                  handlechange();
                }}
                required
                minLength={5}
                maxLength={15}
              ></input>
            </div>
            <div className="flex flex_space_between flex_center_y">
              <label htmlFor="tel">Number*</label>
              <input
                typeof="tel"
                type="tel"
                id="phone"
                name="phone"
                value={personalinfo.number}
                onChange={(e) => {
                  setpersonalinfo({
                    ...personalinfo,
                    number: e.target.value,
                  });
                  handlechange();
                }}
                required
                minLength={5}
                maxLength={15}
                pattern="{1}[0-9]{11,14}"
              ></input>
            </div>
          </div>
        </div>
      </div>
      <div className="reservation_form_table_info line">
        <div className="reservation_form_table_info_tittle">
          <h2>Table Info</h2>
        </div>
        <div className="reservation_form_table_info_table flex flex_space_between">
          <div className="reservation_form_table_info_table_details flex flex_change_direction flex_space_between">
            <div className="reservation_form_table_info_table_details_date flex flex_space_between">
              <label htmlFor="date">Date*</label>
              <input
                type="date"
                name="date"
                id="date"
                value={tableinfo.date}
                onChange={(e) => {
                  updatedate(e.target.value);
                  handlechange();
                }}
                required
                min={new Date().toLocaleString() + ""}
                minLength={new Date().toLocaleString() + ""}
              ></input>
            </div>
            <div className="reservation_form_table_info_table_details_time flex flex_space_between">
              <label htmlFor="time">Time*</label>
              <div className="select">
                <select
                  name="time"
                  id="time"
                  value={tableinfo.time}
                  onChange={(e) => {
                    settableinfo({
                      ...tableinfo,
                      time: e.target.value,
                    });
                    handlechange();
                  }}
                >
                  {props.availableTimes.times.map((item) => {
                    return (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="reservation_form_table_info_table_details_people flex flex_space_between">
              <label htmlFor="people">People*</label>
              <div className="select">
                <select
                  name="people"
                  id="people"
                  value={tableinfo.people}
                  onChange={(e) => {
                    settableinfo({
                      ...tableinfo,
                      people: e.target.value,
                    });
                    handlechange();
                  }}
                >
                  <option value="2">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="2">3 People</option>
                  <option value="2">4 People</option>
                  <option value="2">5 People</option>
                  <option value="4">6 People</option>
                  <option value="6">7 People</option>
                  <option value="8">8 People</option>
                  <option value="8">9 People</option>
                  <option value="8">10 People</option>
                </select>
              </div>
            </div>
          </div>
          <div className="reservation_form_table_info_table_notes">
            <div className="reservation_form_table_info_table_notes_tittle">
              <label>Notes*</label>
            </div>
            <div className="reservation_form_table_info_table_notes_textarea">
              <textarea
                className=""
                value={settableinfo.text}
                onChange={(e) => {
                  settableinfo({
                    ...tableinfo,
                    text: e.target.value,
                  });
                  handlechange();
                }}
                required
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div className="reservation_form_table_btn">
        {validateForm ? (
          <button className="btn">Make Your reservation</button>
        ) : (
          <button aria-label="On Click" className="btn disabled" disabled>Fill the Form</button>
        )}
      </div>
    </form>
  );
}
