import React from 'react';
import './App.css';

class Dog extends React.Component {
    onImgClick = () => {
        this.props.increaseCounter();
    }
    render() {
        let classForImg = this.props.element===this.props.currentElement ? 'photo show' : 'photo'
        return (
            <div className='item'>
                {
                    this.props.disabled ? '' :
                    <img src={this.props.dogImg} className={classForImg} onClick={this.onImgClick}/>
                }
            </div>
        )
    }
}

export default Dog