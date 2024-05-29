import React, { useRef } from 'react'

const Interact = () => {
    const h1Ref = useRef((null));

    function handleColor(){
        h1Ref.current.style.backgroundColor="red";
    }

  return (
    <div>
      <h1 style={{backgroundColor:"black", color:"white"}} ref={h1Ref}> My Background Color is Black </h1>
      <button onClick={handleColor}> Click Me To Change Color</button>
    </div>
  )
}

export default Interact
