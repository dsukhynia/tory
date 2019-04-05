import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getAnimals, echo } from './services';
import { CoolTable } from './CoolTable';

class App extends Component {

  state = {}

  componentDidMount() {
    getAnimals()
      .then(weather => this.setState({ weather: weather }))
      .catch(error => this.setState({ error: error }));
  }

  sayMyName = () => {
    if (this.state.myName == '') {
      alert('I need a name, sister');
      return;
    }
    echo(this.state.myName)
      .then(myNameResponse => this.setState({ myNameResponse }))
      .catch(myNameResponseError => this.setState({ myNameResponseError }));
  }

  render() {
    return (
      <div>
        {this.state.weather ?
          <CoolTable
            headers={['City name', 'Weather', 'Temperature', 'Humidity']}
            cities={this.state.weather} />
          : null}
        <hr></hr>
        <div className='echoContainer'>
          <input
            type='text'
            placeholder='My name'
            value={this.state.myName}
            onChange={e => this.setState({ myName: e.value })}></input>
          <button onClick={this.sayMyName}>Say my name</button>
          <div>
            <pre>
              {this.state.myNameResponse ? this.state.myNameResponse : null}
              {this.state.myNameResponseError ? this.state.myNameResponseError.toString() : null }
            </pre>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
