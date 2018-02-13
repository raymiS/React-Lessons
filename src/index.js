import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './styles/base.css';

export default function App() {
  return <div>React Lessons</div>;
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
