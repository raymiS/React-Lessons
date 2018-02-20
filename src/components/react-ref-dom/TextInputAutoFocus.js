import React, { Component } from 'react';
import TextInput from './TextInput';

class TextInputAutoFocus extends Component {
  componentDidMount() {
    this.textInputFocus.handleTextInput();
    console.log(this.textInputFocus);
  }
  render() {
    return <TextInput ref={input => (this.textInputFocus = input)} />;
  }
}

export default TextInputAutoFocus;
