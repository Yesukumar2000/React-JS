import React, { useState } from 'react';
import moment from 'moment';
import './DatesClasses.css';

let DatesClasses = () => {
  let [dob, setDob] = useState('');
  let [age, setAge] = useState(null);
  let [selectedDate, setSelectedDate] = useState(null);

  let handleDobChange = (e) => {
    let inputDate = e.target.value;
    setDob(inputDate);
    let birthDate = moment(inputDate);
    setSelectedDate(birthDate);
    calculateAge(birthDate);
  };

  let calculateAge = (birthDate) => {
    let today = moment();
    let age = today.diff(birthDate, 'years');
    setAge(age);
  };

  // Current date and time
  let formattedNowDate = moment().format('MMMM Do YYYY');
  let formattedNowTime = moment().format('h:mm:ss a');

  let formattedInputDate = selectedDate ? selectedDate.format('MMMM Do YYYY') : '';
  let oneWeekLater = selectedDate ? moment(selectedDate).add(1, 'weeks').format('MMMM Do YYYY') : '';
  let oneMonthLater = selectedDate ? moment(selectedDate).add(1, 'months').format('MMMM Do YYYY') : '';
  let startOfMonth = selectedDate ? moment(selectedDate).startOf('month').format('MMMM Do YYYY') : '';
  let endOfMonth = selectedDate ? moment(selectedDate).endOf('month').format('MMMM Do YYYY') : '';
  let daysInMonth = selectedDate ? selectedDate.daysInMonth() : '';

  return (
    <div className="container">
      <h1 className="header">Age Calculator</h1>
      <div className="section">
        <h2 className="subHeader">Current Date and Time</h2>
        <p className="text">Date: {formattedNowDate}</p>
        <p className="text">Time: {formattedNowTime}</p>
      </div>
      <div className="section">
        <h2 className="subHeader">Enter Your Date of Birth</h2>
        <input
          type="date"
          value={dob}
          onChange={handleDobChange}
          className="input"
        />
      </div>
      {age !== null && (
        <div className="section">
          <h2 className="subHeader">Your Age</h2>
          <p className="text">{age} years old</p>

          <h2 className="subHeader">Based on Your DOB</h2>
          <p className="text">Selected Date: {formattedInputDate}</p>
          <p className="text">One Week Later: {oneWeekLater}</p>
          <p className="text">One Month Later: {oneMonthLater}</p>
          <p className="text">Start of Month: {startOfMonth}</p>
          <p className="text">End of Month: {endOfMonth}</p>
          <p className="text">Days in Month: {daysInMonth}</p>
        </div>
      )}
    </div>
  );
};

export default DatesClasses;
