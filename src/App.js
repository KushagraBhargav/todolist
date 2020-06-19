import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Xtime from './Xtime';
import Todolist from './todolist';

function App() {

  const [inputList,setInputList]=useState("");
  const [items,setItems]=useState([]);


  const itemEvent=(event)=>{
    setInputList(event.target.value);
  };
  
  const listofItem=()=>{
    setItems((oldItems)=>{
      return [...oldItems, inputList]; 
    });
    setInputList("");    
  };

  const deleteItem=(id)=>{
    setItems((oldItems)=>{
      return oldItems.filter((arr,index)=>{
        return index!==id;
      })
    })
    
  }

  const[dark,setdark]=useState(false);


  return (
    
    
    <>
    <div className={dark ? "dark": "light"}>
    <button className="btn" onClick={()=>{ setdark(true)}}>Dark Mode</button>
    
    <Xtime/>
    <div className="main_div">
    
    
      <div className="center_div"> 
        <br/>
        <h1> To Do List</h1>
        <br/>
        <input type="text" placeholder="Add a Item" value={inputList} onChange={itemEvent}/>
        <button onClick={listofItem}> + </button>
        <br/>
        <ol>
          {items.map((itemval,index)=>{

            return(
              <>
             <Todolist
             key={index}
             id={index}
             text={itemval}
             select={deleteItem}

             />  
             </>
             
             
             )    
          
          })}
        </ol>
      </div>
      
      </div>
    
    
    </div>
    </>
    
  );
}

export default App;
