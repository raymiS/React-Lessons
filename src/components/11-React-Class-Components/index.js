import React, { Component } from 'react';

class LessonEleven extends Component {
  constructor(...args) {
    super(...args);
    this.state = { count: 0 };
    /* Another solution to dealing with the binding
    this.handleButtonClick = this.handleButtonClick.bind(this);
    */
  }
  state = { count: 0 };
  /* 
    state = { count: 0 }
    
    handleButtonClick = function(){
      this.setState(({ count }) => ({
        count: count + 1
      }));
    }
  */

  // Final solution to dealing with the binding. Arrow functions
  handleButtonClick = () => {
    this.setState(({ count }) => ({
      count: count + 1
    }));
  };

  /*
  If we want to use traditional functions and executed on a event handler remember to use bind(this) so that the context is not lost.
  handleButtonClick() {
    this.setState(({ count }) => ({
      count: count + 1
    }));
  }
  */
  render() {
    return (
      <div className="container">
        <h1>Lesson 11: Class Components with React</h1>
        <button className="cc-component" onClick={this.handleButtonClick}>
          {this.state.count}
        </button>
      </div>
    );
  }
}

export default LessonEleven;
