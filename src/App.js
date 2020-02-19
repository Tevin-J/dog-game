import React from 'react';
import './App.css';
import dog from './dog.jpg';
import audio from './dog.mp3'
import Counter from "./Counter";
import Dogs from "./Dogs";

class App extends React.Component {
    state = {
        currentElement: 0,
        elements: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        counterValue: 0,
        interval: 1000,
        disabled: false
    }
    increaseCounter = () => { //ф-я увеличивает счетчик на 1 и включает звуковую дорожку
        new Audio(audio).play()
        this.setState({counterValue: this.state.counterValue + 1, disabled: true})
    }
    currentElementRandomizer = () => { //ф-я каждую секунду задает новое рандомное значение currentElement
        this.setState({disabled: false,
            currentElement: Math.floor(Math.random()*this.state.elements.length)
        })
    }
    componentDidMount() { //при отрисовке компоненты отрабатывает ф-я currentElementRandomizer через интервал
        setInterval(this.currentElementRandomizer, this.state.interval)
    }

    render = () => {
        return (
            <div className='app'>
                <Dogs dogImg={dog} elements={this.state.elements} currentElement={this.state.currentElement}
                      increaseCounter={this.increaseCounter} disabled={this.state.disabled}/>
                <Counter counterValue={this.state.counterValue}/>
            </div>
        );
    }
}

export default App;

