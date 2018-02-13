import React from 'react';
import ReactDOM from 'react-dom';

const Message = ({ message }) => {
  if (!message) {
    return (
      <div className="container">
        <h1>Lesson 5: </h1>
        <p>No Message</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Lesson 5: </h1>
      <p>{message}</p>
    </div>
  );
};

const LessonFive = () => <Message message={null} />;

export default LessonFive;
