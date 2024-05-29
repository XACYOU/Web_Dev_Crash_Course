import { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [value, setValue] = useState("");

  // console.log(value);

  function handleSubmit() {
    let data = [
      ...todo,
      {
        task: value,
        status: false,
      },
    ];
    setTodo(data);
    setValue("");
}

    function handleToggle(i){
        let cpy=[...todo];
        cpy[i].status = !cpy[i].status;
        setTodo(cpy);
    }

  return (
    <div>
      <h1>Todo</h1>
      <div>
        <input
          onChange={(e) => setValue(e.target.value)}
          type="text"
          value={value}
        />
        <button onClick={handleSubmit}> Submit </button>
      </div>
      <div>
        <h1>Display Todo</h1>
        {todo.map((ele, i)=>{

            return(
                <div key={i}>
                    <span>{ele.task}</span>
                    <button onClick={()=>handleToggle(i)}>{ele.status? "Completed" : "Pending"}</button>
                </div>
            )
        })}
      </div>
    </div>
  );
};

export default Todo;
