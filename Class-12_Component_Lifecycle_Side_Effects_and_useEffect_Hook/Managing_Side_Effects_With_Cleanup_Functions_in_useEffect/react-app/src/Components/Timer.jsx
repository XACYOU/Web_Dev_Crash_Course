import { useEffect, useState } from "react";

export function Timer() {
  const [count, setCount] = useState(5);
  const [showTimer, setShowTimer] = useState(true);

  function handleToggle() {
    setShowTimer((prevShowTimer) => !prevShowTimer);
  }

  useEffect(()=>{
    if (!showTimer) {
        return;
      }

    const intervalID = setInterval(()=>{
        setCount((prevCount) => {
            if(prevCount <= 1){
                clearInterval(intervalID);
                return 0;
            }
            return prevCount-1;
        })
    },1000)

    return () =>{
        clearInterval(intervalID);
    }

  },[showTimer]);

  return (
    <div>
      <h1> Timer </h1>
      {showTimer ? <div> {count} </div> : null}
      <button onClick={handleToggle}>
        {showTimer ? "Hide Timer" : "Show Timer"}
      </button>
    </div>
  );
}
