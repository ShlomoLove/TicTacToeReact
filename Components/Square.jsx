import React from 'react';
import dodgersLogo from '../dodgerLogo.png';
import yankeesLogo from '../yankeeLogo.png';

const Square = (props) => {
  let {square, squareClick, index, result} = props
  let squareClass = result ? 'tictacSquareFilled' : 'tictacSquare';

  if (square === 'la') {
    return (
      <span className='tictacSquareFilled' >
        <img src={dodgersLogo} className='tictacLogo'></img>
      </span>
    )
  } else if (square === 'ny') {
    return (
      <span className='tictacSquareFilled'>
        <img src={yankeesLogo} className='tictacLogo'></img>
      </span>
    )
  } else {
    return (
        <span className={squareClass} onClick={() => squareClick(index)}>
          <span></span>
        </span>
    )
  }
};
export default Square;