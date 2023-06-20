import React, { useState } from "react";

const AgeCalculator = () => {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [age, setAge] = useState("");

  const calculateAge = () => {
    if (dateOfBirth) {
      const birthDate = new Date(dateOfBirth);
      const today = new Date();
      const ageInMilliseconds = today - birthDate;
      const ageInYears = Math.floor(
        ageInMilliseconds / (1000 * 60 * 60 * 24 * 365)
      );
      setAge(ageInYears);
    }
  };

  const handleDateChange = (event) => {
    setDateOfBirth(event.target.value);
  };

  return (
    <div className="text-center bg-dark border shadow p-4 m-5 mx-auto" style={{ width: '350px'}}>
      <h1>Age Calculator in Years</h1>
      <div className="fs-5 m-2">Enter your date of birth:</div>
      <div className="w-100">
        <input className="p-2 m-2 w-75" style={{maxWidth: '300px'}} type="date" value={dateOfBirth} onChange={handleDateChange} />
      </div>
      <button className="btn btn-primary m-2" onClick={calculateAge}>Calculate Age</button>
      {age && <div className="fs-4 fw-bold m-2">You are {age} years of age</div>}
    </div>
  );
};

export default AgeCalculator;
