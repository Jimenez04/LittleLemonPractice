import React from "react";
import "../../css/reservation.css";

export default function reservations() {
  const handlesubmit = (e) => {
    e.preventDefault();
    alert("Hola")
};
  return (
    <section id="reservation" className="flex flex_center_x">
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
                <label>First Name*</label>{" "}
                <input type="text" id="fname" name="fname"></input>
              </div>
              <div className="flex flex_space_between flex_center_y">
                <label>Email*</label> <input type="email" id="email"></input>
              </div>
            </div>
            <div className="reservation_form_user_info_container_input_2">
              <div className="flex flex_space_between flex_center_y">
                <label>Last Name*</label>{" "}
                <input type="text" id="lname" name="lname"></input>
              </div>
              <div className="flex flex_space_between flex_center_y">
                <label>Number*</label>{" "}
                <input typeof="tel" type="tel" id="phone" name="phone"></input>
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
                <label htmlFor="date">Date*</label>{" "}
                <input type="date" name="date" id="date"></input>
              </div>
              <div className="reservation_form_table_info_table_details_time flex flex_space_between">
                <label htmlFor="time">Time*</label>
                <div className="select">
                  <select name="time" id="time">
                    <option value="10">10:00AM</option>
                    <option value="11">11:00AM</option>
                    <option value="12">12:00PM</option>
                    <option value="13">13:00PM</option>
                    <option value="14">14:00PM</option>
                    <option value="15">15:00PM</option>
                    <option value="16">16:00PM</option>
                    <option value="17">17:00PM</option>
                  </select>
                </div>
              </div>
              <div className="reservation_form_table_info_table_details_people flex flex_space_between">
                <label htmlFor="people">People*</label>
                <div className="select">
                  <select name="people" id="people">
                    <option value="2">2 People</option>
                    <option value="4">4 People</option>
                    <option value="6">6 People</option>
                    <option value="8">8 People</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="reservation_form_table_info_table_notes">
              <div className="reservation_form_table_info_table_notes_tittle">
                <label>Notes*</label>
              </div>
              <div className="reservation_form_table_info_table_notes_textarea">
                <textarea className=""></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="reservation_form_table_btn">
          <button className="btn">Booking</button>
        </div>
      </form>
    </section>
  );
}
