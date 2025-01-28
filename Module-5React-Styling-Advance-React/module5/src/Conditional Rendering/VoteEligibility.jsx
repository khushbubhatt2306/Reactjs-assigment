import React, { useState } from "react";

function VoteEligibility() {
  const [age, setAge] = useState(17);

  let message;
  if (age >= 18) {
    message = <p>You are eligible to vote.</p>;
  } else {
    message = <p>You are not eligible to vote.</p>;
  }
  return <div>{message}</div>;
}

export default VoteEligibility;
