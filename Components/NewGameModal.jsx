import React from 'react';
import dodgerLogo from '../dodgerLogo.png';
import yankeeLogo from '../yankeeLogo.png';

const NewGameModal = (props) => {
  let {result, resetBoard} = props;
    return (
      <div className='chooseModal'>
        <div className='modalContainer'>
          <div className='modalSubContainer'>
            <div className='modalHeader'>
              Choose Team for First Move Again
            </div>
            <img src={dodgerLogo} className='teamModalLogo' onClick={()=>props.teamClick('la')}></img>
            vs.
            <img src={yankeeLogo} className='teamModalLogo'onClick={()=>props.teamClick('ny')}></img>
          </div>
        </div>
      </div>
    )
  };
export default NewGameModal;