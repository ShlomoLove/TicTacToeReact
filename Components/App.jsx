import React from 'react';
import classnames from 'classnames';
import dodgersLogo from '../dodgerLogo.png';
import yankeesLogo from '../yankeeLogo.png';
import ChooseModal from './ChooseModal';
import NewGameModal from './NewGameModal'
import Square from './Square';
import Winner from './Winner';

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      newGame: true,
      move: '',
      la: 0,
      ny: 0,
      result: null,
      board: Array(9).fill(null),
    }

    this.squareClick = this.squareClick.bind(this);
    this.teamClick = this.teamClick.bind(this);
    this.findResult = this.findResult.bind(this); 
    this.resetBoard = this.resetBoard.bind(this); 
  }

  squareClick(square){
    let {board, move, result, la, ny} = this.state;
    let next

    if (result) return;

    board = board.slice();
    board[square] = move;
    let newResult = this.findResult(board);
    if (!newResult) {
      next = move === 'la' ? 'ny' : 'la';
    } else {
      next = '';
    }

    if (newResult === 'la') {
      la +=1
    }
    if (newResult === 'ny')
      ny+=1

    this.setState({
      board: board, 
      move: next, 
      result: newResult, 
      la: la, 
      ny: ny
    })   
  }

  resetBoard () {
    this.setState({
      move: '',
      newGame: true,
      result: null,
      board: Array(9).fill(null),
    })
  }

  teamClick(team){
    this.setState({
      newGame: false,
      move: team
    })
  }

  findResult(board) {
    let combos = [
      [board[0], board[1], board[2]],
      [board[3], board[4], board[5]],
      [board[6], board[7], board[8]],
      [board[0], board[3], board[6]],
      [board[1], board[4], board[7]],
      [board[2], board[5], board[8]],
      [board[0], board[4], board[8]],
      [board[2], board[4], board[6]],
    ];
    for (let i = 0; i < combos.length; i++) {
      const [a, b, c] = combos[i];
      if (a && a === b && a === c) {
        return a;
      }
    }
    for (let square of board) {
      if (square === null) return null
    }
    return 'tie';
  }

  render () {
    let {la, ny} = this.state
    return (
      <div className='tictacContainer'>
        <h1 className='tictacHeader'> TIC TAC TOE</h1>
        {this.state.result && <NewGameModal result={this.state.result} resetBoard={this.resetBoard}/>}
        {this.state.newGame ? <ChooseModal teamClick={this.teamClick}/> : null}
        <Winner result={this.state.result} currentMove={this.state.move}/>
        <div className='tictacGameContainer'>
          <div className='tictacBoard'>
          {this.state.board.map((square, i) => {
            return (
              <Square result={this.state.result} square={square} index={i} squareClick={this.squareClick}/>
            )})}
          </div>
        </div>
        <div> Dodgers: {la}</div>
        <div> Yankees: {ny}</div>
      </div>
    )
  }
}

export default App; 