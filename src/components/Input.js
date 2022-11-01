import React, { useEffect, useState } from "react";

function Input({ label, onChange }) {

  const [number, setNumber] = useState(0);


  const cheangeHandler = e => {

    setNumber(e.target.value)
  }

  useEffect(() => {

    onChange(number)
    
  })


  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input type="text" id={label} value={number} data-testid={label} onChange={cheangeHandler} />
    </>
  );
}

export default Input;
