import {useState, useEffect} from 'react'

export const DocComponent = () => {

  const [value, setValue] = useState(0)
    
    useEffect(()=>{

      
      function handleScroll(){
        setValue(window.scrollY);
        }

        document.addEventListener("scroll", handleScroll)

        return ()=> document.removeEventListener("scroll", handleScroll);

    },[])

  return (
    <div style={{height:"2000px"}}>
        <h1 style={{position:"fixed"}}> Y:- {value}</h1>
    </div>
  )
}
