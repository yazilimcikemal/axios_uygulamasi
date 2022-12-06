import React,{useEffect,useState} from 'react'
import axios from 'axios'
function App() {
  const[veri,setVeri]=useState(" ");
  useEffect(()=>{
      axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response=>setVeri(response.data[0].body))
      .then(res=>console.log(res.data))
      .catch(err=>console.log(err))
  },[veri]);
  return (
    <div className="App">
      <h1> fetch ile ülkeleri çekme</h1>
      <h1> {veri}</h1>
    </div>
  );
}

export default App;
