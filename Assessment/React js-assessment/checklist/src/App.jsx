import React, { useState } from 'react';

function Checklist() {
  // Create React state to track checkbox values
  const [checkedOptions, setCheckedOptions] = useState({});

  // Function to update checkbox value based on event.target.checked
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedOptions((prevOptions) => ({ ...prevOptions, [name]: checked }));
  };

  // Define the checklist options
  const options = [
    { name: 'Yes', label: 'Are you a citizen?' },
    { name: 'No', label: 'Are you above 21?' },
  ];

  return (
    <div>
      <h2>Are you a citizen? : </h2>
      <h2>Are you over 21? : </h2>
      {Object.keys(checkedOptions).map((option) => (
          <li key={option}>{option}</li>
        ))}
      <ul>
        {options.map((option) => (
          <li key={option.name}>
          <span>{option.label}</span>
            <input
              type="checkbox"
              name={option.name}
              checked={checkedOptions[option.name]}
              onChange={handleCheckboxChange}
            />
          </li>
        ))}
      </ul>

      
    
    </div>
  );
}

export default Checklist;