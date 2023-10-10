import React from 'react';
import ReactDOM from 'react-dom/client';

class LinkTree extends React.Component {
    render() {
        return (
        <>
        <div class="offset_content">
            <div>
                <a href="./calc/index.html">Calculator</a>
            </div>
            <div>
                <a href="./prediction/index.html">Predictor</a>
            </div>
            <div>
                <a href="./textComparator/index.html">Comparator</a>
            </div>
        </div>
        </>);
    }
}

ReactDOM.createRoot(document.getElementById('root')).render(<LinkTree/>);