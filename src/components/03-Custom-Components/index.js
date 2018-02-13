import React from 'react';
import ReactDOM from 'react-dom';
/* 
  When you need to use the same component but you need each component to display disferent information. Using a function that receives parameters, in this case the parameter/parameters will be the information you want your components to display, and use interpolation to show said components.

  Instead of using a function to render your components you can also use React.createElement() where not only can receive a string with the name of the element you want the API to display, it also can receive a function in which you can pass the props as a second argument.

  In order for JSX to differentiate wheter you are talking about a variable or a raw DOM element, we need to capitalize the component.

  <message /> transpiles to  React.createElement('message', null)
  <Message /> transpiles to  React.createElement(Message, null)
*/

const Message = props => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
    </div>
  );
};

/* 
  Render the component based on a function call

  const ThirdLesson = () => {
  return(
    <div className="container">
      
      {message({
        title: "Tuition and Fees",
        desc: "Wishbone covers all tuition and feed for each student's summer program"
      })}

      {message({
        title: "Transportation",
        desc: "If transportation is needed, Wishbone enseure that all students can get to and from their programs safely"
      })}
    </div>
  );
}

*/

const LessonThree = () => {
  return (
    <div className="container">
      <h1>Lesson 3</h1>

      <Message
        title={`Lodging and Meals`}
        desc={`If the program is away from home, we ensure all room and board cost are fully covered`}
      />

      {React.createElement(Message, {
        title: 'Tuition and Fees',
        desc:
          "Wishbone covers all tuition and feed for each student's summer program"
      })}

      {React.createElement(Message, {
        title: 'Transportation',
        desc:
          'If transportation is needed, Wishbone enseure that all students can get to and from their programs safely'
      })}
    </div>
  );
};

export default LessonThree;
/*
const ThirdLesson = () => {
  return (
    <div className="container">
      <h1>Lesson 3</h1>

      <Message
        title={`Lodging and Meals`}
        desc={`If the program is away from home, we ensure all room and board cost are fully covered`}
      />

      {React.createElement(Message, {
        title: 'Tuition and Fees',
        desc:
          "Wishbone covers all tuition and feed for each student's summer program"
      })}

      {React.createElement(Message, {
        title: 'Transportation',
        desc:
          'If transportation is needed, Wishbone enseure that all students can get to and from their programs safely'
      })}
    </div>
  );
};

export default ThirdLesson;
*/
