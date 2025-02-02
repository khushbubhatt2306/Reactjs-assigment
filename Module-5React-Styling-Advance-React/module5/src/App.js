import React from "react";
import JSXExample from "./JSXExample";
import ClickButton from "./Handling Events/ClickButton";
import InputForm from "./Handling Events/InputForm";
import LoginLogout from "./Conditional Rendering/LoginLogout";
import VoteEligibility from "./Conditional Rendering/VoteEligibility";
import Formhandling from "./Forms in React/Formhandling";

function App() {
  return (
    <div style={{textAlign:"center"}}>
      <h1 style={{background:'lightcoral', color:'white',textAlign:'center'}}>Hello, React!"</h1>
      <JSXExample />
      <ClickButton />
      <InputForm />
      <LoginLogout />
      <VoteEligibility />
      <Formhandling />
    </div>
  );
}

export default App;
