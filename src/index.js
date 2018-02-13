import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './styles/base.css';

import LessonThree from './components/03-Custom-Components';

ReactDOM.render(<LessonThree />, document.getElementById('root'));
registerServiceWorker();
