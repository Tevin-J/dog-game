import React from 'react';
import './App.css';
import Dog from "./Dog";


class Dogs extends React.Component {

    render() {
        let dogsElements = this.props.elements.map(element => <Dog dogImg={this.props.dogImg} increaseCounter={this.props.increaseCounter}
                                                                   currentElement={this.props.currentElement} element={element}
                                                                   disabled={this.props.disabled}/>)
        return (
            <div className='wrapper'>
                {dogsElements}
            </div>
        )
    }
}
export default Dogs