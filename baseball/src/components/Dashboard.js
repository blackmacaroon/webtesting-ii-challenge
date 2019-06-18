import React from 'react';

class Dashboard extends React.Component {
      render() {
            return (
                  <div className="dashContainer">
                        <button onClick={this.props.onStrike}>Strike</button>
                        <button onClick={this.props.onBall}>Ball</button>
                        <button onClick={this.props.onFoul}>Foul</button>
                        <button onClick={this.props.onHit}>Hit</button>
                  </div>
            )
      }
}

export default Dashboard;