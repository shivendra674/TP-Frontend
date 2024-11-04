import { useState } from "react";

export default function Player() {
 
 
  const [name,setName]=useState('');
  const [isClicked,setisClicked]=useState(false);
  function handleName(e){
    setName(e.target.value);
  }
  function clickHandler(){
    setisClicked(true);
  }
  
  return (
    <section id="player">
      {/* {JSON.stringify(name)} */}
      {isClicked?<h2>{`Welcome ${name}`} </h2>:'Welcome unknown entity'}
      
      <p>
        <input type="text" onChange={handleName}/>
        <button onClick={clickHandler}>Set Name</button>
      </p>
    </section>
  );
}
