import React from 'react';

const LessonEight = ({ state, updateUsername, setState, increment }) => (
  <div className="container">
    <h1>Lesson 8: Event Handlers</h1>
    <div>
      <p>There have been {state.eventCount} events</p>
      <p>
        <button onClick={increment}>⚛️</button>
      </p>
      <p>You typed: {state.username}</p>
      <p>
        <input onChange={updateUsername} />
      </p>
    </div>
  </div>
);

export default LessonEight;
