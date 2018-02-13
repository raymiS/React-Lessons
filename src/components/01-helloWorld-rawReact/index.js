import React from 'react';
import ReactDOM from 'react-dom';

const FirstLesson = () =>
  React.createElement(
    'div',
    {
      className: 'container'
    },
    React.createElement('h1', {
      className: 'title',
      children: 'Lesson 1: Creando un elemento con createElement en React :3'
    }),
    React.createElement('p', {
      className: 'another-child',
      children: 'Testing'
    })
  );

export default FirstLesson;
