import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './styles/base.css';

import ControlledForm from './components/14-React-Control-Forms';

ReactDOM.render(<ControlledForm />, document.getElementById('root'));
registerServiceWorker();
