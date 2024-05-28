import React, { useRef, useState } from "react";

const InputValidation = () => {
  const passRef = useRef(null);
  const [validate, setValidate] = useState(false);

  // console.log(birthRef, passRef);
  // console.log(birthRef.current.length)

  return (
    <div>
      <h1> Input Validation </h1>
      <label>
        Enter your password:
        <input
          onChange={() => setValidate(passRef.current.value.length >= 5)}
          ref={passRef}
          type="text"
          style={{
            borderColor: validate ? "green" : "red",
          }}
        />
      </label>
      {validate ? (
        <p style={{ color: "green" }}> Valid Input </p>
      ) : (
        <p style={{ color: "red" }}> Enter at least 5 Character</p>
      )}
    </div>
  );
};

export default InputValidation;
