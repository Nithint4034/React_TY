import React, { Component } from 'react';
import UserContext, { UserConsumer } from '../context-api/UserContext'

export class ComponentClass extends Component {
    static contextType = UserContext 

    conponentDidMount() {
        console.log(this);
        console.log('context', this.context);
    }

    render() {
        return <div>
            <UserConsumer> {/* In class component we should rap in to UserConsumer */}
                {
                    (contextData) => {
                        return <p>ComponentClass - {contextData}</p>
                    }
                }
            </UserConsumer>
            <p>Name - {this.context}</p>
        </div>;
    }
}
