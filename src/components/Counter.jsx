import React, { useState, useEffect } from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("Mounting....");
        return ()=>{
            console.log("unmounting....");
            
        }
    })

    return (
        <div>
            <button onClick={() => setCount(count + 1)} >Increment</button>
            <h1> Hello Iam a Component : {count} </h1>
        </div>
    )
}

export default Counter
