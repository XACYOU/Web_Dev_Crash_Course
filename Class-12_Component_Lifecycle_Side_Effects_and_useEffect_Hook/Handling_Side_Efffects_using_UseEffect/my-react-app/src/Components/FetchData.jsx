import { useState, useEffect } from "react";
import axios from "axios";
import "../CSS/FetchData.css"

const FetchData = () => {
  const [userArr, setUserArr] = useState([]);
  const [hidden, setIsHidden] = useState(true);

  async function fetchData() {
    try {
      const res = await axios.get(`https://reqres.in/api/users`);
      setUserArr(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleFetchDataBtn() {
    setIsHidden((prevVal) => !prevVal);
  }

  useEffect(() => {
    hidden ? setUserArr([]) : fetchData();
    console.log(hidden);
  }, [hidden]);

  return (
    <div>
      <h1>Fetch Data</h1>
      <button onClick={handleFetchDataBtn}>
        {hidden ? "Fetch Data" : "Hide Data"}{" "}
      </button>
      <div className="container">
      {userArr.map((ele) => {
        return (
          <div className="card" key={ele.id}>
            <img src={ele.avatar} alt={ele.first_name} />
            <span>
              {ele.first_name} {ele.last_name}{" "}
            </span>
            <span> {ele.email} </span>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default FetchData;
