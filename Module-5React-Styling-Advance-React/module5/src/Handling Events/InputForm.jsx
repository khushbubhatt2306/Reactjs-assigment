import React, { useState } from "react";

function InputForm() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <form style={{ paddingTop: "15px" }}>
        <label>
          Type something:
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Start typing..."
          />
        </label>
      </form>
      <p>User typed: {inputValue}</p>
    </div>
  );
}

export default InputForm;
