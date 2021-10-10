import React, { useState, useEffect } from 'react';

import Child from '../components/Child';
import { getChilds } from '../api/errorApi';



function EnterError() {
  const [childs, setChilds] = useState([]);

  async function getData() {
    const { data } = await getChilds();
    setChilds(data)
  }

  useEffect(() => {
    console.log(process.env.REACT_APP_URL_API)
    if (childs.length == 0) {
      getData();
    }
  });

  useEffect(() => {
    console.log('childs',childs)
  }, [childs])


  return (
    <div className="error">
       {childs.map((child) => {
       return  <Child key={child.id} data={child} />
     })} 
 
    </div>
  );
}

export default EnterError;
