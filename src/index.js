import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './styles/base.css';

import BasicForms from './components/13-React-Basic-Forms';
import TextInputAutoFocus from './components/react-ref-dom/TextInputAutoFocus';

ReactDOM.render(<TextInputAutoFocus />, document.getElementById('root'));
registerServiceWorker();
