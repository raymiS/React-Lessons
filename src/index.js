import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './styles/base.css';

import SecondLesson from './components/02-React-JSX';

ReactDOM.render(<SecondLesson />, document.getElementById('root'));
registerServiceWorker();
