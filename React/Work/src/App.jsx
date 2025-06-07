import React from "react";
import Welcome from "./welcome";
import Counter from "./Counter";
import Todo from "./to-do";
import ToDOD from "./Delete";

function App() {
  return (
    <div>
      <h1>Hello, Mahendra!</h1>
      <Welcome name="Mahendra"/>
      <Welcome name="React Lerner"/>
      <Counter/>
      <ToDOD/> 
    </div>
  );
}

export default App;
