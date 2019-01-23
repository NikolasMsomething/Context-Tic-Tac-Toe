import React, { Component } from 'react';
import GameProvider, { gameConnect } from '../provider';
import '../styles/Game.scss';

class Game extends Component {
  render() {
    let boxes = Object.keys(this.props.boxDisplay).map((box, index) => (
      <div
        onClick={e => {
          this.props.updateDisplayBoxAndChangeLetter(box);
          console.log(box);
        }}
        className={`game__container-box game__container-box--${index}`}
      >
        <p> {this.props.boxDisplay[box]}</p>
      </div>
    ));

    if (!this.props.gameOver) {
      return <main className="game__container">{boxes}</main>;
    }
    return <></>;
  }
}

export default gameConnect(Game);

//MAIN COMPONENT
//state = "dog"
//CHILD
//<Child dog={this.state}/>

//IN CHILD

//print(props.dog)
//
