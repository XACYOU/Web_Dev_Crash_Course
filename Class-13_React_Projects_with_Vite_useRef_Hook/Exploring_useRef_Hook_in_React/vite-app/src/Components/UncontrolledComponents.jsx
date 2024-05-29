import React, {useRef, useState} from 'react'

const UncontrolledComponents = () => {
    const inputRef = useRef(null);
    const [displayValue, setDisplayValue] = useState("");

    function handleChange(){
       setDisplayValue(inputRef.current.value);
    }

  return (
    <div>
      <input onChange={handleChange} ref={inputRef} type="text" placeholder='Input 1' />
      <p>{displayValue}</p>
    </div>
  )
}

export default UncontrolledComponents
