import React, { Component } from 'react'


class Counter extends Component {
    state = {
        count: 1,
    };
    render() { 

        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary"
        return (

            <div>
                <span className={classes}>{this.formatCount()}</span> 
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
