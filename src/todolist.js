import React from 'react';



const Todolist=(props)=>{
return (
    <>
    <div className="todo_style">
                    <i className="fa-times" aria-hidden="true"
                    onClick= {()=>{
                        props.select(props.id);

                    }}/>
                  <li> {props.text}</li> 
                  </div>
    </> 
                    

)

}

export default Todolist;