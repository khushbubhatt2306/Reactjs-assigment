import React from "react";

function JSXExample() {
  const explanation =
    "JSX stands for JavaScript XML, which allows us to write HTML in JavaScript.";

  return (
    <div>
      {/* Heading */}
      <h1 style={{ textAlign: "center" }}>Welcome to JSX</h1>

      {/* Paragraph with dynamic data */}
      <p style={{ textAlign: "center", fontWeight: "bold" }}>
        {explanation} It's a powerful feature in React, and this example uses
        React version.
      </p>
    </div>
  );
}

export default JSXExample;
