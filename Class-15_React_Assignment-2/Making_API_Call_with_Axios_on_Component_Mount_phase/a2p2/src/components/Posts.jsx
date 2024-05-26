import { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";
import LoadingIndicator from "./LoadingIndicator";
import ErrorIndicator from "./ErrorIndicator";

function Posts() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  async function fetchAndUpdateData() {
    {
      /*Complete the missing code*/
      setLoading(true);
    }
    try {
      {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setPosts(res?.data);
        setLoading(false);
        /*Complete the missing code*/
      }
    } catch (error) {
      {
        /*Complete the missing code*/
        setError(true);
        console.log("error fetching data", error);
        setLoading(false);
      }
    }
  }
  useEffect(/*Complete the missing code*/()=>{
    fetchAndUpdateData();
  },[]);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <div>
      <h1>List of Posts</h1>

      {/* Complete the missing code */}
      {posts?.map((post) =>{
        return(
          <Post title={post.title} body={post.body} key={post.id} />
        )
      })}
    </div>
  );
}

export default Posts;
