import React, { Component } from 'react'


class Counter extends Component {
    state = {
        count: 1
    };
    render() { 
        return (
            <div>
                <span>{this.formatCount()}</span> 
                <button>increament</button>
            </div>
        
        )
    }

    formatCount() {
        const { count } = this.state
        return count === 0 ? <h1>Zero</h1> : count;
    }
}
 
export default Counter;
