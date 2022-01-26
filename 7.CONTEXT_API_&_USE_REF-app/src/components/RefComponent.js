//useRef() in Functional Component
// import React, { useEffect, useRef } from 'react';

// function RefComponent() {
//     const inputRef = useRef('Hellow')
//     const passwordRef = useRef()
//     useEffect(()=>{
//         console.log('inputRef', inputRef);
//         console.log('inputRef', inputRef.current);
//         inputRef.current.focus()
//     },[])
//   return <div>
//       <input ref={inputRef} type='text' placeholder='Enter email'/>
//       <input ref={passwordRef} type='password' placeholder='Enter password' />
//       <button onClick={()=>{
//           passwordRef.current.focus()
//       }}>Login</button>
//   </div>;
// }

// export default RefComponent;

//useRef() in Class Component
import React, { Component } from 'react';

export class RefClassComponent extends Component {
    constructor(props) {
        super(props)
        this.iRef = React.createRef()
        this.pRef = React.createRef()
    }
    componentDidMount() {
        console.log(this.iRef);
        this.iRef.current.focus()
    }
    render() {
        return <div>
            <input ref={this.iRef} type="text" placeholder='Enter email' />
            <input ref={this.pRef} type="password" placeholder='Enter password' />
            <button onClick={() => {
                this.pRef.current.focus()
            }}>Login</button>

        </div>;
    }
}

export default RefClassComponent;
