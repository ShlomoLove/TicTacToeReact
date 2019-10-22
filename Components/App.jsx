import React from 'react';
import classnames from 'classnames';
import dodgers from '../dodgerLogo.png';
import yankees from '../yankeeLogo.png';

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      one: 0,
      two: 0,
    }
    this.drawerClick = this.drawerClick.bind(this);
  }

  drawerClick(page) {
    let tempObj = {};
    for (let key in this.state) {
      key === page ? tempObj[key] = true : tempObj[key] = false;
    }
    page === 'resume' ? tempObj['background'] = false : tempObj['background'] = true;
    this.setState(tempObj)
  }

  render () {
    return (
      <div className='tictacContainer'>
        <h1 className='tictacHeader'> TIC TAC TOE</h1>
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
        <img src={dodgers} className='tictacLogo'></img>
        <img src={yankees} className='tictacLogo'></img>
      </div>
    )
  }
}

export default App; 