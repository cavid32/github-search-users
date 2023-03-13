import React from 'react'
import {useState , useEffect , useContext} from 'react'
import Context from "../Context"



const SearchBox = () => {

  const [ input , setInput] = useState("");
  const {state , dispatch} = useContext(Context)

    const serchUser=() =>{
      fetch(`https://api.github.com/search/users?q=${input}`)
      .then(res=> res.json())
      .then(res=> dispatch({ type: "getUsers", value: res.items }) )
    }


  return (
    <div>
        <input value={input} onChange={(e)=> setInput(e.target.value)} type="text" /> 
         <button onClick={serchUser}>axtar</button>

       

    </div>
  )
}

export default SearchBox