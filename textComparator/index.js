import React from "react";
import ReactDOM from "react-dom/client";

class Areas extends React.Component {
    preventChange(event) {
        event.preventDefault();
    }
    compare() {
        document.getElementById('result').innerText = 'Success!';
    }
    render() {
        return (<>
        <div>
            <textarea placeholder="input" class="compare_area"></textarea>
            <textarea placeholder="output" class="compare_area" onKeyDown={this.preventChange} onPaste={this.preventChange}></textarea>
        </div>
        <button id="compare_button" onClick={this.compare}>Compare</button>
        <p id="result"></p>
        <a id="main_page_link" href="../index.html">Return to main page</a>
        </>);
    }
}

ReactDOM.createRoot(document.getElementById('root')).render(<Areas/>);