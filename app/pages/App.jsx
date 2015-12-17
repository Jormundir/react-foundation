import React from 'react';
import './App.css';

class App extends React.Component {
  stuff() {
    alert("hello");
  }

  render() {
    return (
      <h1 onClick={this.stuff}>Hello, people!</h1>
    );
  }
}

export default App;
