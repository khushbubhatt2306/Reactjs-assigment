import React, { useState } from "react";

function Counter() {
  const [count, setcount] = useState(0);

  //   const decrement = () => {
  //     setcount(count - 1);
  //   };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Current Count: {count}</h1>
      <button className="btn btn-success" onClick={() => setcount(count + 1)}>
        Increment
      </button>
      {/* <button className="btn btn-danger mx-20" onClick={decrement}>
        Decrement
      </button>
      <button className="btn btn-primary" onClick={() => setcount(0)}>
        Zero
      </button> */}
    </div>
  );
}

export default Counter;
