import React from 'react';
import dodgersLogo from '../dodgerLogo.png';
import yankeesLogo from '../yankeeLogo.png';

const Winner = (props) => {
  let {result, currentMove} = props;
  

  if (result === 'la') {
    return (
      <div className='tictacWinner' >
        The Winner Is: <img src={dodgersLogo} className='tictacLogo'></img>
      </div>
    )
  } else if (result === 'ny') {
    return (
      <div className='tictacWinner'>
        The Winner Is: <img src={yankeesLogo} className='tictacLogo'></img>
      </div>
    )
  } else if (result === 'tie'){
    return (
        <div className='tictacWinner'>
          The Game Ended in a Tie. Play Again.
        </div>
    )
  } else if (currentMove === 'la') {
    return (
      <div className='currentMove'>
        Current Move: <img src={dodgersLogo} className='tictacLogo'></img>
      </div>
    )
  } else if (currentMove === 'ny') {
    return (
      <div className='currentMove'>
        Current Move: <img src={yankeesLogo} className='tictacLogo'></img>
      </div>
    )
  } else {
    return (
      <div>
      </div>
    )
  }
};
export default Winner;