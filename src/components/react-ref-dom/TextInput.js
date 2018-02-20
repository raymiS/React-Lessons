import React, { Component } from 'react';

class TextInput extends Component {
  handleTextInput = () => {
    this.inputFocus.focus();
  };
  render() {
    return (
      <div className="container">
        <input type="text" ref={input => (this.inputFocus = input)} />
        <input
          type="button"
          value="Focus on the input"
          onClick={this.handleTextInput}
        />
      </div>
    );
  }
}

export default TextInput;
