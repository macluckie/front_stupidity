import './Child.css';
import React, { useState, useEffect } from 'react';
import { PostStupidy } from '../api/errorApi';
import { getCountStupidityById } from '../api/errorApi';
import CounterStupidity from './CounterStupidity';


function Child(props) {
    const [counter, setCounter] = useState(null);
    function handleClick(e) {
        e.preventDefault();
        PostStupidy(props.data.id)
        setCounter(<CounterStupidity id={props.data.id} />)     
    }

    useEffect(()=>{
        setCounter(<CounterStupidity id={props.data.id} />)
    },[]);

    return (
        <div class={props.data.name}>
            <h1 onClick={handleClick}> {props.data.name}</h1>
            {counter}
            <a href="#" ><img width="400px" src="carton_rouge.jpg" class="img-fluid" alt="carton_rouge"></img></a>
        </div>
    );
}

export default Child;
