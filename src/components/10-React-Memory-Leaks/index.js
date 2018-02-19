import React, { Component } from 'react';

class StopWatch extends Component {
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
          this.setState(
            {
              lapse: Date.now() - timeStart
            },
            () => {
              console.log(this.state.lapse);
            }
          );
        });
      }
      return { running: !state.running };
    });
  };

  componentWillUnmount() {
    // Using componetWillUnmount lifecycle to clear the setInterval method and preventing memory leaks
    clearInterval(this.timer);
  }
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

class LessonTen extends Component {
  state = { showStopWatch: true };
  render() {
    const { showStopWatch } = this.state;
    return (
      <div>
        <label>
          Show Stop Watch{' '}
          <input
            type="checkbox"
            checked={showStopWatch}
            onChange={() =>
              this.setState(s => ({
                showStopWatch: !s.showStopWatch
              }))
            }
          />
        </label>
        <hr />
        {showStopWatch ? <StopWatch /> : null}
      </div>
    );
  }
}

export default LessonTen;
