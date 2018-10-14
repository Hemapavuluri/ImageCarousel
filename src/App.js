import React, { Component } from 'react';
import './App.css';
import Card from './Card';
import data from './data'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      properties: data.properties
    }
  }

  render() {
    const { properties } = this.state;
    return (
      <div className="App">
        <div>
          {
            properties.map(property => <Card key={property.index} property={property} />)
          }
        </div>
      </div>
    );
  }
}

export default App;
