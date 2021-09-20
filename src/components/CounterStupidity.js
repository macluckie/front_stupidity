import React, { useState, useEffect } from 'react';
import { getCountStupidityById } from '../api/errorApi';
import './Counter.css';


function CounterStupidity(props) {
    const [count, setCount] = useState(0);
    useEffect(async ()=>{
       const {data} = await  getCountStupidityById(props.id)
       setCount(data)
    },[props]);

    return (
      <div class='count'>
          {count}
      </div>
    );
}

export default CounterStupidity;
