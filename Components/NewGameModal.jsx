import React from 'react';
import dodgerLogo from '../dodgerLogo.png';
import yankeeLogo from '../yankeeLogo.png';

const NewGameModal = (props) => {
  let {result, resetBoard} = props;

  if (result === 'tie') {
    return (
      <div className='chooseModal'>
        <div className='modalContainer'>
          <div className='modalSubContainer'>
            <div className='modalHeader'>
              That was a challenging game, but it ended in a Tie
            </div>
            <button className='newGameButton'onClick={()=>resetBoard()}>Play Again</button>
          </div>
        </div>
      </div>
    )
  }

  if (result === 'la') {
    return (
      <div className='chooseModal'>
        <div className='modalContainer'>
          <div className='modalSubContainer'>
            <div className='winnerHeader'>
              Congratulations the Dodgers Won!
            </div>
            <img src={dodgerLogo} className='teamModalLogo' onClick={()=>props.teamClick('la')}></img>
            <button className='newGameButton' onClick={()=>resetBoard()}>Play Again</button>
          </div>
        </div>
      </div>
    )
  }

  if (result === 'ny') {
    return (
      <div className='chooseModal'>
        <div className='modalContainer'>
          <div className='modalSubContainer'>
            <div className='winnerHeader'>
              Congratulations the Yankees Won!
            </div>
            <img src={yankeeLogo} className='teamModalLogo'onClick={()=>props.teamClick('ny')}></img>
            <button className='newGameButton' onClick={()=>resetBoard()}>Play Again</button>
          </div>
        </div>
      </div>
    )
  }
  };
export default NewGameModal;