import React, { useState } from 'react'

export default function Counter() {

    const [count, setCount] = useState(0);
    // Login status
    const [isLogin, setIsLogin] = useState(false);

    // Increment function

    const increment = ()=>{
        setCount((prev)=>{
            return prev + 1;
        })

         setCount((prev)=>{
            return prev + 1;
        })
    }

    // Decrement function
    const decrement = ()=>{
        setCount((prevState)=>{
            return prevState - 1;
        })
                setCount((prevState)=>{
            return prevState - 1;
        })  
    }

  return (
    <div className='text-center'>
        <button onClick={decrement}> - </button>
        <h1 className='text-4xl'>{count} </h1>
        <button onClick={increment}> + </button>
    </div>
  )
}
