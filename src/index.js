import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './styles/base.css';

import LessonSeven from './components/07-Style-React-Components';

ReactDOM.render(<LessonSeven />, document.getElementById('root'));
registerServiceWorker();
