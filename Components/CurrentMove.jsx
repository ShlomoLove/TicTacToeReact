import React from 'react';
import dodgerLogo from '../dodgerLogo.png';
import yankeeLogo from '../yankeeLogo.png';

const CurrentMove = (props) => {
  if (props.currentMove === 'dodgers') {
    return (
      <div className='currentMove'>
        Current Move: <img src={dodgerLogo} className='tictacLogo'></img>
      </div>
    )
  } else if (props.currentMove === 'yankees') {
    return (
      <div className='currentMove'>
        Current Move: <img src={yankeeLogo} className='tictacLogo'></img>
      </div>
    )
  } else {
    return (
      <div className='currentMove'>
      </div>
    )
  }
};
export default CurrentMove;