import React from 'react';

class Display extends React.Component {
      render() {
            return (
                  
                  <div className='displayContainer'>
                        
                        <h1>At Bat: {this.props.player}</h1>
                        <h2 id='balls'>Balls: {this.props.balls}</h2>
                        <h2 id='strikes'>Strikes: {this.props.strikes}</h2>
                  </div>
            )
      }
}



// const Display = (props) => {
//       const {  player, balls, strikes } = props.banana
//       console.log('whos on first', props.banana.player);
//       return (
//             <div className='displayContainer'>
//                   <h1>At Bat: {props.banana.player}</h1>
//                   <h2>Balls: {props.banana.balls}</h2>
//                   <h2>Strikes: {props.banana.strikes}</h2>
//             </div>

//       )
// }

export default Display;