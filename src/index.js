import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './styles/base.css';

import LessonTen from './components/10-React-Memory-Leaks';

ReactDOM.render(<LessonTen />, document.getElementById('root'));
registerServiceWorker();
