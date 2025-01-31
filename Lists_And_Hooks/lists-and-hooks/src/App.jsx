import React from "react";
import FruitList from "./Lists And Keys/FruitList";
import UserList from "./Lists And Keys/UserList";
import Counter from "./Hooks/Counter";
import FetchDisplayData from "./Hooks/FetchDisplayData";
import ComponentDidMount from "./Lifecycle/componentDidMount";
import LogsaMessage from "./Lifecycle/LogsaMessage";

function App() {
  return (
    <>
      <h1>List and Hooks</h1>
      <h1>List and Keys</h1>
      <FruitList />
      <UserList />

      <h1>Lifecycle</h1>
      <ComponentDidMount />
      <LogsaMessage />

      <h1>Hooks</h1>
      <Counter />
      <FetchDisplayData />

      <h1>Context API</h1>
    </>
  );
}

export default App;
