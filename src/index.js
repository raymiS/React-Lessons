import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './styles/base.css';

import LessonFive from './components/05-Conditionally-Render-Components';

ReactDOM.render(<LessonFive />, document.getElementById('root'));
registerServiceWorker();
