import React from 'react';

class Display extends React.Component {
      render() {
            return (
                  <div className='displayContainer'>
                        <div className='displayCard'>
                              <h1>At Bat: {this.props.player}</h1>
                              <h2>Balls: {this.props.balls}</h2>
                              <h2>Strikes: {this.props.strikes}</h2>
                        </div>
                  </div>

            )
      }
}

export default Display;