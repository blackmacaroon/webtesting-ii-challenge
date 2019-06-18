import React from 'react';

const Display = (props) => {
      const {  player, balls, strikes } = props.banana
      console.log('whos on first', props.banana);
      return (
            <div className='displayContainer'>
                  <div className='displayCard'>
                        <h1>At Bat: {player}</h1>
                        <h2>Balls: {balls}</h2>
                        <h2>Strikes: {strikes}</h2>
                  </div>
            </div>

      )
}

export default Display;