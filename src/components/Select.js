import React, {useEffect, useState} from "react";

function Select({ label, items, onChange }) {

  const [selects , setSelects] = useState(1);

  const handleCheange = e => {

    setSelects(e.target.value)

  }

  useEffect(() => {
    
    onChange(eval(selects))
    
  })


  return (
    <div>
      <label htmlFor={`${label}-select`}>{label}</label>
      <div className="select">
        <select id={`${label}-select`} data-testid={label} onChange={handleCheange}>
          {items.map((option) => (
            <option value={option.factor} key={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Select;
