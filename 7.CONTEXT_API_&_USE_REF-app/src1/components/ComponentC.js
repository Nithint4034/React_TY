import React, { useContext , useEffect } from 'react';
import UserContext from '../context-api/UserContext'

function ComponentC(props) {
    const context = useContext(UserContext)
    useEffect(()=>{
        console.log('const',context);
    },[])
  return <div>
      {/* Using the props below two */}
      {/* <p>ComponentC - {props.username}</p> */}

      {/* Using context */}
      <p>ComponentC Context api data -{context}</p>
  </div>;
}

export default ComponentC;
