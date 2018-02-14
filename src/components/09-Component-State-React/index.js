import React, { Component } from 'react';

class LessonNine extends Component {
  state = { lapse: 0, running: false };
  handleClearClick = () => {
    clearInterval(this.timer);
    this.setState({
      lapse: 0,
      running: false
    });
  };

  handleRunClick = () => {
    this.setState(state => {
      if (state.running) {
        clearInterval(this.timer);
      } else {
        const timeStart = Date.now() - this.state.lapse;
        this.timer = setInterval(() => {
          this.setState({
            lapse: Date.now() - timeStart
          });
        });
      }
      return { running: !state.running };
    });
  };
  render() {
    const { lapse, running } = this.state;
    const buttonStyles = {
      border: '1px solid #ccc',
      background: '#fff',
      fontSize: '2em',
      padding: 15,
      margin: '10px auto',
      width: 200,
      display: 'block'
    };
    return (
      <div className="container">
        <h1>Lesson 9: Component State</h1>
        <label style={{ display: 'block', fontSize: '2em' }}>{lapse}ms</label>
        <button style={buttonStyles} onClick={this.handleRunClick}>
          {running ? 'Stop' : 'Start'}
        </button>
        <button style={buttonStyles} onClick={this.handleClearClick}>
          Clear
        </button>
      </div>
    );
  }
}

export default LessonNine;
