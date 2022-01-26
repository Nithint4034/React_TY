import React from "react"
function withCounter(PassedComponent , initialCount = 0){
    class WrappedComponent extends React.Component{

        state = {
            count:initialCount
        }
        incrementCount=()=>{
            this.setState({
                count:this.state.count + 1
            })
        }
        decrementCount=()=>{
            this.setState({
                count:this.state.count - 1
            })
        }
        render(){
            return <PassedComponent 
                count={this.state.count}
                incrementCount ={this.incrementCount}
                decrementCount={this.decrementCount} {...this.props}
                />
        }
    }
    return WrappedComponent
}
export default withCounter;
