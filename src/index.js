import React from 'react';
import ReactDOM, { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './styles/base.css';

import LessonEight from './components/08-Event-Handlers';

const state = { eventCount: 0, username: '' };

const increment = () => {
  setState({
    eventCount: state.eventCount + 1
  });
};

const updateUsername = event => {
  console.log(event.nativeEvent);
  setState({
    username: event.target.value
  });
};

const setState = newState => {
  Object.assign(state, newState);
  renderApp();
};

function renderApp() {
  ReactDOM.render(
    <LessonEight
      increment={increment}
      updateUsername={updateUsername}
      setState={setState}
      state={state}
    />,
    document.getElementById('root')
  );
  registerServiceWorker();
}

renderApp();
