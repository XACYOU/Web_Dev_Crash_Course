import {useReact, useEffect, useRef} from 'react'

const Focus = () => {
    const inputRef = useRef(null);

    useEffect(()=>{
        inputRef.current.focus();
    }, [])

  return (
    <div>
      <input ref={inputRef} type="text" placeholder='Auto Focus onLoad' />
    </div>
  )
}

export default Focus
