import React from "react";
import Welcome from "./welcome";
import Counter from "./Counter";
import TODO from "./to-do";

function App() {
  return (
    <div>
      <h1>Hello, Mahendra!</h1>
      <Welcome name="Mahendra"/>
      <Welcome name="React Lerner"/>
      <Counter/>
      <TODO/> 
    </div>
  );
}

export default App;
