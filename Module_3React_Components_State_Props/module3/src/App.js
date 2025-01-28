import React from "react";
import Greeting from "./Components/Greeting";
import WelcomeMessage from "./Components/WelcomeMessage";
import UserCard from "./Props and State/UserCard";
import Counter from "./Props and State/Counter";

function App() {
  return (
    <div>
       <h1 style={{background:'lightcoral', color:'white',textAlign:'center'}}>Hello, React!</h1>
       {/* component */}
       <Greeting name="John" />
       <WelcomeMessage />

       {/* Props and State */}
       <UserCard name="John Doe" age={30} location="New York" />
       <Counter />
    </div>
  );
}

export default App;
