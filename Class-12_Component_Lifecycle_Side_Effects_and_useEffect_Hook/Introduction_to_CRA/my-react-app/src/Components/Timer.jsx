import { useEffect, useState } from "react";

function Timer() {
  const [count, setCount] = useState(5);

  useEffect(() => {
    let intervalID = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount <= 1) {
          clearInterval(intervalID);
        }
        return prevCount - 1;
      });
    }, 1000);
  }, []);
  return (
    <div className="timer">
      <div> Count: {count} </div>
    </div>
  );
}

export default Timer;
