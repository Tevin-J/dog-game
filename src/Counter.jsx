import React from 'react';
import './App.css';

class Counter extends React.Component {
    render() {
        return (
            <div className='counter'>
                {this.props.counterValue}
            </div>
        );
    }
}
export default Counter