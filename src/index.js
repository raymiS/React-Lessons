import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './styles/base.css';

import LessonEleven from './components/11-React-Class-Components';

ReactDOM.render(<LessonEleven />, document.getElementById('root'));
registerServiceWorker();
