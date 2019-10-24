import React from 'react';
import dodgersLogo from '../dodgerLogo.png';
import yankeesLogo from '../yankeeLogo.png';

const Winner = (props) => {
  let {result, currentMove} = props;
  

  if (result === 'la') {
    return (
      <div className='currentMove' >
        <img src={dodgersLogo} className='currentTeamLogo'></img>
        <div>
          WINS
        </div>
      </div>
    )
  } else if (result === 'ny') {
    return (
      <div className='currentMove'>
        <img src={yankeesLogo} className='currentTeamLogo'></img> 
        <div>
          WINS
        </div>
      </div>
    )
  } else if (result === 'tie'){
    return (
        <div className='tieDeclaration'>
          The Game Ended in a Tie. 
          Play Again.
        </div>
    )
  } else if (currentMove === 'la') {
    return (
      <div className='currentMove'>
        Current Move
        <div>
          <img src={dodgersLogo} className='tictacLogo'></img>
        </div>
      </div>
    )
  } else if (currentMove === 'ny') {
    return (
      <div className='currentMove'>
        Current Move 
        <div>
          <img src={yankeesLogo} className='tictacLogo'></img>
        </div>
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