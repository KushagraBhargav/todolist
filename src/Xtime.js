import React, { useState } from'react';
import './Xtime.css';



const Xtime=()=>{

    let ctime=new Date().toLocaleTimeString();
    let ctimer=new Date();
    ctimer=ctimer.getHours();
    let wish='';

    const[val, newval]=useState(ctime);

    const helper=()=>{
        const ctime=new Date().toLocaleTimeString();
        newval(ctime);
    }
    if(ctimer>12 && ctimer<16){
        wish='Good AfterNoon';
    }
    else if(ctimer>17 && ctimer<23){
        wish='Good Evening'
    }
    else{
        wish='Good Moring';
    }

    setInterval(helper, 1000);

    return(
        <>
        <div className="timer">
        <h1>Time: {val}</h1>
        <p> {wish}</p>
        </div>
        </>
    )
};

export default Xtime;