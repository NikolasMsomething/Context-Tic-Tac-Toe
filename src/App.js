import React, { Component } from 'react';
import Game from './components/Game';
import GameProvider from './provider';
export const AppContext = React.createContext();

class App extends Component {
  render() {
    return (
      <div className="App">
        <GameProvider>
          <Game />
        </GameProvider>
      </div>
    );
  }
}

export default App;
