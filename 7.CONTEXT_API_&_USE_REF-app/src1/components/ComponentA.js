import React from 'react';
import ComponentB from './ComponentB'

function ComponentA(props) {
  return <div>
      {/* Using the props below two */}
      {/* ComponentA - {props.username} */}
      {/* <ComponentB username={props.username}/> */}

      {/* Using context */}
      <ComponentB />
  </div>;
}

export default ComponentA;
