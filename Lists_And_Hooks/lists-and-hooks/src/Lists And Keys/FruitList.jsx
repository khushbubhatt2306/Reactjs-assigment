import React from "react";

function FruitList() {
  const fruits = ["Apple", "Cherry", "Banana", "Mango", "Orange"];
  return (
    <div>
      <h2>Fruit List:</h2>
      <ul>
        {fruits.map((fruit, index) => {
          return <li key={index}>{fruit}</li>;
        })}
      </ul>
    </div>
  );
}

export default FruitList;
