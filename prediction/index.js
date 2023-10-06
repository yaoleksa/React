import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';

class Form extends React.Component {
    call(event) {
        const name = document.getElementById('name').value;
        if(!name) {
            throw new Error('Required parameter is missed');
        }
        event.preventDefault();
        axios.get('https://api.agify.io/', {
            "params": {
                "name": name
            }
        }).then(respons => {
            document.getElementById('output').innerText = `According to our prediction your age is ${respons.data.age} years`;
        }).catch(e => {
            console.error(`Error has occured during http call: ${e.message}`);
        });
        axios.get('https://api.genderize.io/', {
            "params": {
                "name": name
            }
        }).then(response => {
            console.log(response.data.gender);
            document.getElementById('output').innerText +=  ` with ${(response.data.probability * 100).toFixed(2)}% 
            probability your gender is ${response.data.gender}`;
        }).catch(e => {
            console.error(`Error has occured during API call: ${e.message}`);
        });
        axios.get('https://api.nationalize.io/', {
            'params': {
                'name': name
            }
        }).then(response => {
            console.log(response.data);
            document.getElementById('output').innerText += ` and with 
            ${(response.data.country[0].probability * 100).toFixed(2)}% 
            probability your nationality is ${response.data.country[0].country_id}`
        }).catch(e => {
            console.error(`Error has occured during API call: ${e.message}`);
        });
    }
    render() {
        return (<>
            <form>
                <label htmlFor="Name">Enter your name: </label>
                <input type="text" name="Name" id="name" required></input>
                <input type="button" value="submit" onClick={this.call}></input>
            </form>
            <p id="output"></p>
        </>)
    }
}

ReactDOM.createRoot(document.getElementById('root')).render(<Form/>);