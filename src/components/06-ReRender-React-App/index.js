import React from 'react';

const LessonSix = ({ date }) => {
  return (
    <div className="container">
      <h1>Lesson 6: Re-render a React App</h1>
      <p>It is {date.toLocaleTimeString()}</p>
      <input value={date.toLocaleTimeString()} />
      <input value={date.toLocaleTimeString()} />
    </div>
  );
};
export default LessonSix;
