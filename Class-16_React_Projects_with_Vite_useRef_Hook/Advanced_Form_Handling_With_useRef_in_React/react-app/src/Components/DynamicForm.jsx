import React, { useRef } from "react";

const DynamicForm = () => {
  const oneRef = useRef(null);
  const twoRef = useRef(null);
  const threeRef = useRef(null);

  function handleFocus(e, re) {
    e.preventDefault();
    if (e.key === "Tab") {
      re.current.focus();
    }
  }

  return (
    <div>
      <h1>Dynamic Form</h1>
      <input
        onKeyDown={(e) => handleFocus(e, threeRef)}
        ref={oneRef}
        type="text"
        placeholder="Input 1"
      />
      <input
        onKeyDown={(e) => handleFocus(e, oneRef)}
        ref={twoRef}
        type="text"
        placeholder="Input 2"
      />
      <input
        onKeyDown={(e) => handleFocus(e, twoRef)}
        ref={threeRef}
        type="text"
        placeholder="Input 3"
      />
    </div>
  );
};

export default DynamicForm;
