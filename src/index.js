import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './styles/base.css';

import LessonTwelve from './components/12-DOM-Refs-React';

ReactDOM.render(<LessonTwelve />, document.getElementById('root'));
registerServiceWorker();
