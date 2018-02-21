import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './styles/base.css';

import DynamicForms from './components/14-Dynamic-Forms-React';

ReactDOM.render(
  <DynamicForms
    getErrorMessage={value => {
      if (value.length < 3) {
        return `Value must be at least 3 characters, but is only ${
          value.length
        }`;
      }
      if (!value.includes('s')) {
        return `Value does not include "s" but it should!`;
      }
      return null;
    }}
  />,
  document.getElementById('root')
);
registerServiceWorker();
