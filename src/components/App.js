import React, { Component } from 'react';
import Board from './Board';
import Square from './Square';
import Game from './Game';


class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="container">
        <Game />
      </div>
      </div>
    );
  }
}

export default App;
