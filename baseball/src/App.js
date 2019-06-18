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

    onStrike = e => {
      //if less than three, increase by one
      if(this.state.strikes < 2){
        this.setState(prevState => {
          return {strikes: prevState.strikes + 1}
        })
      } else {
      //if three or higher, reset
      this.reset(e)
      }  
    }

    onBall = e => {
      //if less than 4, increase by one
      if(this.state.balls < 3){
        this.setState(prevState => {
          return {balls: prevState.balls + 1 }
        })
      } else {
      //if four or higher, reset
      this.reset(e)
      }  
    }

    onFoul = e => {
      //if < 2, increase strikes by 1
      if(this.state.strikes < 2){
        this.setState(prevState => {
          return{strikes: prevState.strikes + 1}
        })
      }
      //if 2 or more, return count at 2 strikes
      
    }

    onHit = e => {
      // assume on base, reset count to zero, next batter up
      this.reset(e)
    }

    reset = e => {
      // set the count back to zero, next batter up.
      this.setState({
        balls: 0,
        strikes: 0
      })
    }

}

export default App;
