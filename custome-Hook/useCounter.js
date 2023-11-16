import React, { useState } from 'react'

const useCounter = () => {
    const [count,setCount]=useState(10);
    const Inc=()=>{
        setCount(count+1)
      }
      const Dec=()=>{
        setCount(count-1);
      
      }
      const Reset=()=>{
        setCount(0)
      }
      
  return [count,Inc,Dec,Reset]
}

export default useCounter
