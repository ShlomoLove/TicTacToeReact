import React from 'react';
import classnames from 'classnames';
import dodgersLogo from '../dodgerLogo.png';
import yankeesLogo from '../yankeeLogo.png';
import ChooseModal from './ChooseModal';
import CurrentMove from './CurrentMove';

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      newGame: true,
      move: '',
      la: 0,
      ny: 0,
      board: [['', '', ''],
      ['', '', ''],
      ['', '', '']],
      boardObj: {1:false, 2:false, 3:false, 4:false, 5:false, 6:false, 7:false, 8:false, 9:false }
    }
    this.newGame = this.newGame.bind(this);
    this.squareClick = this.squareClick.bind(this);
    this.teamClick = this.teamClick.bind(this);
  }


  squareClick(square){
    
  }

  teamClick(team){
    this.setState({
      newGame: false,
      move: team
    })
  }

  newGame(){
    board = [['', '', ''],
          ['', '', ''],
          ['', '', '']];
  move = 'X';

  for (square of document.getElementsByClassName('square')) {
    square.addEventListener('click', clickHandler);
    square.children[0].innerHTML = '';
  }
  document.getElementById('player').innerHTML = 'Current Player: X';
};

  render () {
    return (
      <div className='tictacContainer'>
        <h1 className='tictacHeader'> TIC TAC TOE</h1>
        {this.state.newGame ? <ChooseModal teamClick={this.teamClick}/> : null}
        <CurrentMove currentMove={this.state.move}/>
        <div className='tictacGameContainer'>
          <div className='tictacBoard'>
            <span className='tictacSquare'></span>
            <span className='tictacSquare'></span>
            <span className='tictacSquare'></span>
            <span className='tictacSquare'></span>
            <span className='tictacSquare'></span>
            <span className='tictacSquare'></span>
            <span className='tictacSquare'></span>
            <span className='tictacSquare'></span>
            <span className='tictacSquare'></span>
          </div>
        </div>
        <img src={dodgersLogo} className='tictacLogo'></img>
        <img src={yankeesLogo} className='tictacLogo'></img>
      </div>
    )
  }
}

export default App; 