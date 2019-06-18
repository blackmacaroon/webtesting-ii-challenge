import React from 'react';

class Dashboard extends React.Component {
      render() {
            return (
                  <div className="dashContainer">
                        <button className='strikeButt' onClick={this.props.onStrike}>Strike</button>
                        <button className='ballButt' onClick={this.props.onBall}>Ball</button>
                        <button className='foulButt' onClick={this.props.onFoul}>Foul</button>
                        <button className='hitButt' onClick={this.props.onHit}>Hit</button>
                  </div>
            )
      }
}

export default Dashboard;