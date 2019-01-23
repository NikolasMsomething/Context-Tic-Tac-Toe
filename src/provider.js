import React, { Component } from 'react';
export const GameContext = React.createContext();

export default class GameProvider extends Component {
  state = {
    currentLetter: 'X',
    boxDisplay: {
      'box--1': null,
      'box--2': null,
      'box--3': null,
      'box--4': null,
      'box--5': null,
      'box--6': null,
      'box--7': null,
      'box--8': null,
      'box--9': null
    },
    gameOver: false,
    updateDisplayBoxAndChangeLetter: this.updateDisplayBoxAndChangeLetter.bind(
      this
    ),
    determineGameState: this.determineGameState.bind(this)
  };

  updateDisplayBoxAndChangeLetter(boxName) {
    let boxCopy;
    if (
      this.state.currentLetter === 'X' &&
      this.state.boxDisplay[boxName] === null
    ) {
      boxCopy = Object.assign({}, this.state.boxDisplay);
      boxCopy[boxName] = 'X';
      this.setState({ boxDisplay: boxCopy }, () => {
        this.setState({ currentLetter: 'O' }, () => {
          this.determineGameState();
        });
      });
    } else if (
      this.state.currentLetter === 'O' &&
      this.state.boxDisplay[boxName] === null
    ) {
      boxCopy = Object.assign({}, this.state.boxDisplay);
      boxCopy[boxName] = 'O';
      this.setState({ boxDisplay: boxCopy }, () => {
        this.setState({ currentLetter: 'X' }, () => {
          this.determineGameState();
        });
      });
    } else {
      alert('current box is filled!');
    }
  }

  determineGameState() {
    let boxDisplay = this.state.boxDisplay;
    if (
      boxDisplay['box--1'] === boxDisplay['box--2'] &&
      boxDisplay['box--1'] === boxDisplay['box--3'] &&
      boxDisplay['box--1'] !== null &&
      boxDisplay['box--2'] !== null &&
      boxDisplay['box--3'] !== null
    ) {
      this.setState({ gameOver: true });
      console.log('winner!', this.state);
    } else if (
      boxDisplay['box--4'] === boxDisplay['box--5'] &&
      boxDisplay['box--4'] === boxDisplay['box--6'] &&
      boxDisplay['box--4'] !== null &&
      boxDisplay['box--5'] !== null &&
      boxDisplay['box--6'] !== null
    ) {
      this.setState({ gameOver: true });
      console.log('winner!');
    } else if (
      boxDisplay['box--7'] === boxDisplay['box--8'] &&
      boxDisplay['box--7'] === boxDisplay['box--9'] &&
      boxDisplay['box--7'] !== null &&
      boxDisplay['box--8'] !== null &&
      boxDisplay['box--9'] !== null
    ) {
      this.setState({ gameOver: true });
      console.log('winner!');
    } else if (
      boxDisplay['box--1'] === boxDisplay['box--4'] &&
      boxDisplay['box--1'] === boxDisplay['box--7'] &&
      boxDisplay['box--1'] !== null &&
      boxDisplay['box--4'] !== null &&
      boxDisplay['box--7'] !== null
    ) {
      this.setState({ gameOver: true });
      console.log('winner!');
    } else if (
      boxDisplay['box--2'] === boxDisplay['box--5'] &&
      boxDisplay['box--2'] === boxDisplay['box--8'] &&
      boxDisplay['box--2'] !== null &&
      boxDisplay['box--5'] !== null &&
      boxDisplay['box--8'] !== null
    ) {
      this.setState({ gameOver: true });
      console.log('winner!');
    } else if (
      boxDisplay['box--3'] === boxDisplay['box--6'] &&
      boxDisplay['box--3'] === boxDisplay['box--9'] &&
      boxDisplay['box--3'] !== null &&
      boxDisplay['box--6'] !== null &&
      boxDisplay['box--9'] !== null
    ) {
      this.setState({ gameOver: true });
      console.log('winner!');
    } else if (
      boxDisplay['box--1'] === boxDisplay['box--5'] &&
      boxDisplay['box--1'] === boxDisplay['box--9'] &&
      boxDisplay['box--1'] !== null &&
      boxDisplay['box--5'] !== null &&
      boxDisplay['box--9'] !== null
    ) {
      this.setState({ gameOver: true });
      console.log('winner!');
    } else if (
      boxDisplay['box--3'] === boxDisplay['box--5'] &&
      boxDisplay['box--3'] === boxDisplay['box--7'] &&
      boxDisplay['box--3'] !== null &&
      boxDisplay['box--5'] !== null &&
      boxDisplay['box--7'] !== null
    ) {
      this.setState({ gameOver: true });
      console.log('winner!');
    }
  }

  render() {
    return (
      <GameContext.Provider value={this.state}>
        {this.props.children}
      </GameContext.Provider>
    );
  }
}

export const gameConnect = Component => {
  return class extends Component {
    render() {
      return (
        <GameContext.Consumer>
          {value => <Component {...value} />}
        </GameContext.Consumer>
      );
    }
  };
};
