import React from 'react';
import Display from './components/Display.js';
import Dashboard from './components/Dashboard.js';
import './App.css';

class App extends React.Component {
  state = {
    player: "David Ortiz",
    balls: 0,
    strikes: 0
  };

  render() {
      return (
        <div className="App">
          <header className='head'>
            <Display player={this.state.player} balls={this.state.balls} strikes={this.state.strikes}/>
            <Dashboard 
              onStrike = {this.onStrike}
              onBall={this.onBall}
              onFoul={this.onFoul}
              onHit={this.onHit}
            />
          </header>
          
        </div>
      );
    }
}

export default App;
