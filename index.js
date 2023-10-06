import React from 'react';
import ReactDOM from 'react-dom/client';

class LinkTree extends React.Component {
    render() {
        return (
        <>
            <div>
                <a href="./calc/index.html">Calculator</a>
            </div>
            <div>
                <a href="./prediction/index.html">Predictor</a>
            </div>
            <div>
                <a href="#">Something else</a>
            </div>
        </>);
    }
}

ReactDOM.createRoot(document.getElementById('root')).render(<LinkTree/>);