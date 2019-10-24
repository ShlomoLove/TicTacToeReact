import React from 'react';
import dodgersLogo from '../dodgerLogo.png';
import yankeesLogo from '../yankeeLogo.png';

const ChooseModal = (props) => {
    return (
      <div className='chooseModal'>
        <div className='modalContainer'>
          <div className='modalSubContainer'>
            <div className='modalHeader'>
              Choose Team for First Move
            </div>
            <img src={dodgersLogo} className='teamModalLogo' onClick={()=>props.teamClick('la')}></img>
            vs.
            <img src={yankeesLogo} className='teamModalLogo'onClick={()=>props.teamClick('ny')}></img>
          </div>
        </div>
      </div>
    
    )
  };
export default ChooseModal;