import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './styles/base.css';

import FirstLesson from './components/01-helloWorld-rawReact';

ReactDOM.render(<FirstLesson />, document.getElementById('root'));
registerServiceWorker();
