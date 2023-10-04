import React from 'react';
import ReactDOM from 'react-dom/client';

let holder = "";

class Display extends React.Component {
    handleClick(event) {
        if(!/[0-9\-\+\/\*]/.test(event.key)) {
            event.preventDefault();
        }
    }
    render() {
        return (<><textarea id="display" placeholder="0" onKeyDown={this.handleClick}></textarea></>);
    }
}

class ButtonsSet extends React.Component {
    handleClick(event) {
        if(holder == '0' && event.target.innerText != '.') {
            holder = event.target.innerText;
        } else {
            holder += event.target.innerText;
            holder = holder.replace(/^0{2,}/g, '0');
        }
        document.getElementById('display').innerText += holder;
    }
    clear() {
        holder = "";
        document.getElementById('display').innerText += holder;
    }
    calculate() {
        document.getElementById('display').innerText = eval(holder);
        holder = "";
    }
    render() {
        return (<>
        <div id="keyboard">
            <button onClick={this.handleClick}>0</button>
            <button onClick={this.handleClick}>1</button>
            <button onClick={this.handleClick}>2</button>
            <button onClick={this.handleClick}>3</button>
            <button onClick={this.handleClick}>4</button>
            <button onClick={this.handleClick}>5</button>
            <button onClick={this.handleClick}>6</button>
            <button onClick={this.handleClick}>7</button>
            <button onClick={this.handleClick}>8</button>
            <button onClick={this.handleClick}>9</button>
            <button onClick={this.handleClick}>+</button>
            <button onClick={this.handleClick}>-</button>
            <button onClick={this.handleClick}>*</button>
            <button onClick={this.handleClick}>/</button>
            <button onClick={this.handleClick}>(</button>
            <button onClick={this.handleClick}>)</button>
            <button onClick={this.calculate}>=</button>
            <button onClick={this.clear}>C</button>
        </div>
        </>);
    }
}

class Calculator extends React.Component {
    render() {
        return (
            <>
            <Display/>
            <ButtonsSet/>
            </>
        );
    }
}

ReactDOM.createRoot(document.getElementById('root')).render(<Calculator/>);