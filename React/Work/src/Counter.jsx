import React from "react";
import { useState } from "react";

function Counter() {

    const [count , setCount] = useState(0);
    
    if(count <= -1)
    {
        setCount(count +1);
    }
 
    return <>
    
          <h1>Counter App</h1>
          <h2>Count : {count}</h2>

          <button onClick={() => setCount(count +1)}> Increment</button>
          <button onClick={() => setCount(count-1)}> Decrement</button>
    </>
}

export default Counter