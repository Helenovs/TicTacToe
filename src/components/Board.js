import React, { Component } from 'react';
import Square from './Square';
class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
    squares: Array(9).fill(null),
    xIsNext: '',
    firstPlayer: ''
    };
    this._handleInput = this._handleInput.bind(this);
  }


  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }
  renderSquare(i) {
    return (
      <Square value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}
      />
    );
  }

  _handleInput(e) {
    console.log(e.target.value);
    this.setState( { firstPlayer: e.target.value } );
    if (e.target.value == 'x' || e.target.value == 'X') {
      this.setState({
      xIsNext: true
      });
    }
    else {
      this.setState({
      xIsNext: false
      });
    }
  }



  render() {


    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    return(

      <div>
        <div className="player">
            <label>First player:</label>
            <select onInput={ this._handleInput } >
             <option value="X">X</option>
             <option value="O">O</option>
             </select>
        </div>
        <div className="player">
            <label>Second player:</label>
            <select >
            <option value="X">X</option>
            <option value="O">O</option>
            </select>
        </div>


        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div><div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>

      </div>
    );
  }
}
export default Board;

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
