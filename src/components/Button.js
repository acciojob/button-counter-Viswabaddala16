import React from "react";
import { useState } from "react"

let Button = () => {
    let[count,setCount] = useState(0);
    return(
        <div>
            <p>Button clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    )
}
export default Button