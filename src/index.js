import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './styles/base.css';

import LessonNine from './components/09-Component-State-React';

ReactDOM.render(<LessonNine />, document.getElementById('root'));
registerServiceWorker();
