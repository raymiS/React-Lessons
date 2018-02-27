import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './styles/base.css';

import ReactKeyPropDemos from './components/15-React-Key-Prop';

ReactDOM.render(<ReactKeyPropDemos />, document.getElementById('root'));
registerServiceWorker();
