import React, { Component } from 'react';

/* 

  The idea is to select/write an option on any input and the rest of the inputs have to be updated with the value the user just wrote. To accomplish this we need to syncronize the states of all the inputs meaning we need to have control over those states. 

  1. Set the initial state for the input and textarea 
  2. Set that state as part of the value attribute for those inputs

  When we set the state as part of the input's value attribute the first thing that happens is that the user can't write anything on them. This is because you're telling React that from now on, the value of the input will be depending on the state. 

  Which means that we need some way to control the changes of the state and that those changes have to be based on what the user writes. For this we can use and event handler to catch the event.target.value of the input and set it to the state.
  
  Conclusion

  To control input values in a form we need to specify a value attribute that will be the state of the input that will be controlled/updated via the onChange event handler

*/

class ControlledForm extends Component {
  static availableOptions = [
    'apple',
    'grape',
    'cherry',
    'orange',
    'pear',
    'peach'
  ];

  state = {
    multiLineValue: '',
    singleLineValue: '',
    multiSelect: []
  };

  handleCommaSeparatedChange = event => {
    const { value } = event.target;
    const checkAllVals = value
      .split(',') // returns an array with the values separated with commas
      .map(v => v.trim()) // maps throught the array and trims any blank space in case it appears
      .filter(Boolean); // filters any empty string

    this.setState({
      singleLineValue: value,
      multiLineValue: checkAllVals.join('\n'), // joins the array values and separates them with a line break
      multiSelect: checkAllVals.filter(
        v => ControlledForm.availableOptions.includes(v) // filters the value of the options based on the availableOptions property of the component
      )
    });
  };

  handleMultilineChange = event => {
    const { value } = event.target;
    const checkAllVals = value
      .split('\n')
      .map(v => v.trim())
      .filter(Boolean);

    this.setState({
      singleLineValue: checkAllVals.join(','),
      multiLineValue: value,
      multiSelect: checkAllVals.filter(v =>
        ControlledForm.availableOptions.includes(v)
      )
    });
  };

  handleMultiSelectChange = e => {
    // selectedOptions property return an array of the current selected option when the event change if fired, then mapped to get the value of that option
    const checkAllVals = Array.from(e.target.selectedOptions).map(o => o.value);
    this.setState({
      multiSelect: checkAllVals,
      multiLineValue: checkAllVals.join('\n'),
      singleLineValue: checkAllVals.join(',')
    });
  };

  render() {
    const { multiLineValue, singleLineValue, multiSelect } = this.state;
    return (
      <div className="container">
        <form>
          <div className="input-section">
            <label>
              Single Line Values
              <input
                type="text"
                value={singleLineValue}
                onChange={this.handleCommaSeparatedChange}
              />
            </label>
          </div>

          <div className="input-section">
            <label>
              Multi Line Values
              <textarea
                rows={ControlledForm.availableOptions.length}
                value={multiLineValue}
                onChange={this.handleMultilineChange}
              />
            </label>
          </div>

          <div className="input-section">
            <label>
              Multi Select Values
              <select
                multiple
                size={ControlledForm.availableOptions.length}
                onChange={this.handleMultiSelectChange}
                value={multiSelect}
              >
                {ControlledForm.availableOptions.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default ControlledForm;
