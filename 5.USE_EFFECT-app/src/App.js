import React, { useState, UseEffect} from 'react'
import UseEffect1 from './component/UseEffect1'
import UseEffect2 from './component/UseEffectmount'
import UseEffectupdate from './component/UseEffectupdate'
import UseEffectunmount from './component/UseEffectunmount'
import UseEffectPassingProps from './component/UseEffectPassingProps'

function App() {
  const [showComponent, setshowComponent] = useState(true)
 return (
    <div>
      {/* <UseEffect1/> */}
      {/* <UseEffectmount/> */}
      {/* <UseEffectupdate/> */}
      <button onClick={()=>{
        setshowComponent(!showComponent)
      }}>{showComponent ? 'Hide' : 'show'} Component </button>
      <hr/>
     {showComponent ? <UseEffectunmount/> : null}
     <hr/>
     <UseEffectPassingProps showComponent={showComponent}/>
    </div>
  )
}

export default App





















