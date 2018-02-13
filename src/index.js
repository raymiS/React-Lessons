import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './styles/base.css';

import LessonSix from './components/06-ReRender-React-App';

// Using simple JavaScript ES6 to repalce the element variable where the time is being setup for a template literal and instead of using React's render method I'll be using innerHTML native JavaScript property.

function tickTack() {
  /*
  const rootElement = document.getElementById('root');
  const time = new Date().toLocaleTimeString();
  const element = `
    <div>
      It is <input value=${time}/> <input value=${time}/>
    </div>
    `;

  rootElement.innerHTML = element;
  */
  ReactDOM.render(
    <LessonSix date={new Date()} />,
    document.getElementById('root')
  );
  registerServiceWorker();
}
setInterval(tickTack, 1000);
