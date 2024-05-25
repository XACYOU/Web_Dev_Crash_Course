import { useEffect, useState } from "react";

const ExtEvent = () => {
  const [cord, setCord] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(e) {
      setCord({ x: e.offsetX, y: e.offsetY });
    }
    document.addEventListener("mousemove", handleMouseMove);

    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div>
      <h1>
        XOffset: {cord.x} YOffset: {cord.y}
      </h1>
    </div>
  );
};

export default ExtEvent;
