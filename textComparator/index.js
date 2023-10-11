import React from "react";
import ReactDOM from "react-dom/client";

class Areas extends React.Component {
    compare() {
        const compareTo = document.getElementById('compareTo').value;
        const compareWith = document.getElementById('compareWith').value;
        const end = compareTo.length > compareWith.length ? compareTo.length : compareWith.length;
        let similar = true;
        for(let i = 0; i < end; i++) {
            if(i > compareTo.length - 1) {
                continue;
            }
            if(i > compareWith.length - 1) {
                continue;
            }
            if(compareTo[i] != compareWith[i]) {
                document.getElementById('result').innerText += compareTo[i];
                similar = false;
            }
        }
        if(similar) {
            document.getElementById('result').innerText = "String are similar";
        }
    }
    render() {
        return (<>
        <div>
            <textarea placeholder="input" className="compare_area" id="compareTo"></textarea>
            <textarea placeholder="output" className="compare_area" id="compareWith"></textarea>
        </div>
        <button id="compare_button" onClick={this.compare}>Compare</button>
        <p id="result" className="compare_area"></p>
        <a id="main_page_link" href="../index.html">Return to main page</a>
        </>);
    }
}

ReactDOM.createRoot(document.getElementById('root')).render(<Areas/>);