import React from "react";
import ReactDOM from "react-dom/client";

class Areas extends React.Component {
    compare() {
        const compareTo = document.getElementById('compareTo').value;
        const compareWith = document.getElementById('compareWith').value;
        const end = compareTo.length > compareWith.length ? compareTo.length : compareWith.length;
        let result = "";
        for(let i = 0; i < end; i++) {
            if(i > compareTo.length - 1) {
                result += `Strings have different length. At ${i} position first string has 
                ${compareTo[compareTo.length - 1]} symbol, and second string has ${compareWith[i - 1]} symbol. `;
            }
            if(i > compareWith.length - 1) {
                result += `Strings have different length. At ${i} position first string has 
                ${compareTo[i - 1]} symbol, and second string has ${compareWith[compareWith.length - 1]} symbol. `;
            }
            if(compareTo[i] != compareWith[i]) {
                result += `Strings are different at ${i} symbol. First string has ${compareTo[i]} at ${i} place, second string has ${compareWith[i]} at ${i} place. `;
            }
        }
        result = result.length == 0 ? "String are similar" : result;
        document.getElementById('result').innerText = result;
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