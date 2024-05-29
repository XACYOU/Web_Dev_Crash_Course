import React, { useRef, useState } from "react";

const FormSubmission = () => {

    const nameRef = useRef(null);
    const ageRef = useRef(null);
    const emailRef = useRef(null);
    const [error, setError] = useState("");
    
    function handleSubmit(e){
        e.preventDefault();

        const formData={
            name:nameRef.current.value,
            age:ageRef.current.value,
            email:emailRef.current.value
        }

        if(formData.name === "" && formData.age === "" && formData.email === ""){
            setError("Name, Age and Email cannot be empty");
            return;
        }else if(formData.age === "" && formData.email === ""){
            setError("Age and Email cannot be empty");
            return;
        }else if(formData.name === "" && formData.age === "" ){
            setError("Name and Age cannot be empty");
            return;
        }else if(formData.name === "" && formData.email === ""){
            setError("Name and Email cannot be empty");
            return;
        }else if(formData.age === ""){
            setError("Age cannot be empty");
            return;
        }else if(formData.email === ""){
            setError("Email cannot be empty");
            return;
        }else if(formData.name === ""){
            setError("Name cannot be empty");
            return;
        }

        setError("");
        console.log("Form submitted successfully", formData);
    }

  return (
    <div>
      <h1> Form Submission </h1>

      <form onSubmit={handleSubmit}>
        <label>
          Enter Name:
          <input ref={nameRef} type="text" placeholder="enter your name" />
        </label>
        <br />
        <label>
            Enter Age:
            <input ref={ageRef} type="number" placeholder="Enter you age" />
        </label>
        <br />
        <label>
            Enter Email:
            <input ref={emailRef} type="email" placeholder="Enter your email" />
        </label>
        <br />
        {error && <p> {error} </p>}
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default FormSubmission;
