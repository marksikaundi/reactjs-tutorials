import React, { Component } from 'react'


class Counter extends Component {
    state = {
        count: 0,
    };
    render() { 
        return (
            <div>
                <span className='badge badge-primary m-2'>{this.formatCount()}</span> 
                <button className='btn btn-secondary btn-sm'>increament</button>
            </div>
        
        )
    }

    formatCount() {
         const { count } = this.state
        return count === 0 ? <h1>Zero</h1> : count;
    }
} 
 
export default Counter;
