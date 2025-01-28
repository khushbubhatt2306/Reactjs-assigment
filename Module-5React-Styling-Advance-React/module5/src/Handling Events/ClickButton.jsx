import React, { useState } from "react";

function ClickButton() {
  const [text, settext] = useState("Not Clicked");

  return (
    <div>
      <h1>Text : {text}</h1>
      <button
        className="btn btn-primary"
        onClick={() => {
          settext("Clicked!");
        }}
      >
        Change Text
      </button>
    </div>
  );
}

export default ClickButton;
