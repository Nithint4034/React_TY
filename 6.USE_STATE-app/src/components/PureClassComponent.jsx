import React, { Component, PureComponent } from 'react'

/*extends PureComponent to make class componeng PureComponent*/
export class PureClassComponent extends PureComponent {
    state = {           //innitial state
        useName: '',
        age: 10,
        address: {
            state: 'karnataka'
        }
    }
    updateName = () => {
        console.log('updateName extends');
        this.setState({             //set will update the name
            userName: 'guru',
        })
    }
    updateAddress = () => {
        this.setState({             //set will update the address
            address: {
                state: 'Tamilnadu'
            }
        })
    }
    componentDidUpdate() {
        console.log('comonent did update executed');
    }
    /*If we exrtend PureComponent react will do a shallow comparison of the prev state ans next state
    we should not write shouldComponentUpdate when extending PureComponent because react will write the 
    logic of comparison in shouldComponentUpdate */
    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('shouldComponentUpdate executed');
    //     console.log(nextState);
    //     console.log(this.state);
    //     if(nextState.userName !== this.state.userName){
    //         return true
    //     }else{
    //         return false
    //     }
    // }
    render() {
        console.log('render executed');
        return (
            <div>
                <p>User name - {this.userName}</p>
                <p>User Addresss - {this.state.address.state}</p>
                <button onClick={() => {
                    this.updateName()
                }}>Update name</button>
                <button onClick={() => {
                    this.updateAddress()
                }}>Update Address</button>
            </div>
        )
    }
}
export default PureClassComponent