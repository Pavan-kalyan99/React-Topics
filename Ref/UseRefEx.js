// it is useRef() important --focusing on input  

import React, { useEffect, useState ,useRef} from 'react'

const UseRefEx = () => {
    const [da,setDa]=useState(' ')
    const refdata=useRef(null)
const Handle=(e)=>{
    setDa(e.target.value)

}
console.log("input is:",da);
const focus=()=>{
    refdata.current.focus();
}
// useEffect(()=>{
//     refdata.current.focus;
//     // refdata.current=refdata.current+1
// },[])
  return (
    <div>
      <input type='text' placeholder='enter'value={da}  ref={refdata}  onChange={Handle}/>
 <button onClick={focus}>focus</button>
      <h2>input is :{da}</h2>
      {/* {refdata.current} */}
    </div>
  )
}

export default UseRefEx;
