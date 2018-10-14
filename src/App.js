import React, { Component } from 'react';
import './App.css';
import Card from './Card';
import data from './data'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      properties: data.properties,
      property: data.properties[0]
    }
  }

  nextProperty = () => {
  const newIndex = this.state.property.index+1;
  this.setState({
    property: data.properties[newIndex]
  })
}

prevProperty = () => {
  const newIndex = this.state.property.index-1;
  this.setState({
    property: data.properties[newIndex]
  })
}

  render() {
    const { properties, property } = this.state;
    return (
      <div className="App">
        <div className="col">
          {
            <Card key={property.index} property={property} />
          }
        </div>
        <div className="buttons">
          <button
            onClick={() => this.nextProperty()}
            disabled={property.index === data.properties.length-1}
          >
            Next
          </button>
          <button
            onClick={() => this.prevProperty()}
            disabled={property.index === 0}
          >
            Prev
          </button>
        </div>
      </div>
    );
  }
}

export default App;
