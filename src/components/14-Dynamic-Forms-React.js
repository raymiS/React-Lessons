import React, { Component } from 'react';

class DynamicForms extends Component {
  state = { error: null };
  handleSubmit = event => {
    event.preventDefault();
    const value = event.target.elements.username.value;
    const error = this.props.getErrorMessage(value);
    if (error) {
      alert(`error: ${error}`);
    } else {
      alert(`success: ${value}`);
    }
  };
  handleSubmitChange = event => {
    const { value } = event.target;
    this.setState({
      error: this.props.getErrorMessage(value)
    });
  };

  // We use componentDidMount() life cycle method because at the moment this component is mounted the state of the error needs to be false, meaning that in the input text box, since there's nothing added yet, fails the valitation.

  componentDidMount() {
    this.setState({
      error: this.props.getErrorMessage(' ')
    });
  }
  render() {
    const { error } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="username"
              onChange={this.handleSubmitChange}
            />
          </label>
          {error ? <div>{error}</div> : null}
          <button type="submit" disabled={Boolean(error)}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default DynamicForms;
