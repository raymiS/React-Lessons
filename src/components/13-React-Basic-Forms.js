import React, { Component } from 'react';

class BasicForms extends Component {
  handleSubmit = this.handleSubmit.bind(this);

  handleSubmit(event) {
    event.preventDefault();
    console.log({ target: event.target });
    console.log(event.target[0], event.target[1]);
    console.log(event.target.elements.username.value);
    console.log(event.target[0].value);
    console.log(this.raymi.value);
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:{' '}
            <input
              type="text"
              name="username"
              ref={domNode => (this.raymi = domNode)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default BasicForms;
