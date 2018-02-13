import React from 'react';

/* Styles in React are treated as property objects which is why you fint the CSS properties are written in camelCase standard and the value is a string. Also, if you are using pixels as a unit measure you can add only the number and react by default set up the number as px. Also we can use the className prop. 

We can also extract the style and className props as their own props object or put them as defaultProps


const props = {
  className: 'box',
  style: {
    paddingTop: 50,
    backgroundColor: 'red',
    fontSize: 18
  }
}

const SeventhLesson = () => {
  return(
    <div className='container'>
      <h1>Lesson 7: Style React Components</h1>
      <div {...props}>Box</div>
    </div>
  );
}

*/

/* The same using a class instead a functional component

class SeventhLesson extends Component {
  constructor(props) {
    super(props)
    props = {
      className: 'box', 
      style: {
        paddingTop: 50,
        backgroundColor: 'red',
        fontSize: 18
      }
    }
  }
  render(){
    return(
      <div className='container'>
        <h1>Lesson 7: Style React Components</h1>
        <div {...props}>Box</div>
      </div>
    )
  }
}
*/

/* 
  Turning what I have into a functional component called Box

  Object spread does a shallow merge of the objects given, meaning that the style prop that is defined in the <Box /> elemento being overwritten by the prop in the component definition. 


const Box = props => (
  <div className="box box--small" style={{ paddingLeft: 20 }} {...props}>
    Box
  </div>
);

const SeventhLesson = () => (
  <div className="container">
    <h1>Lesson 7: Style React Components</h1>
    <Box style={{ backgroundColor: 'lightblue' }}>Small Box</Box>
  </div>
);

*/

/* 

To fix this we need to destructure the props and take the style prop and do object spread on the rest of the props 

However when you the same with className, since className is no considerate a prop if your going to destructiring you need to give it a default value. Since it is className it should be an empty string


const Box = ({ style, className = '', rest }) => (
  <div
    className={`box ${className}`}
    style={{ padding: 20, ...style }}
    {...rest}
  >
    Box
  </div>
);

const SeventhLesson = () => (
  <div className="container">
    <h1>Lesson 7: Style React Components</h1>
    <Box className="box--small" style={{ backgroundColor: 'lightblue' }}>
      Small Box
    </Box>

    <Box className="box--medium" style={{ backgroundColor: 'green' }}>
      Medium Box
    </Box>

    <Box className="box--big" style={{ backgroundColor: 'maroon' }}>
      Big Box
    </Box>
  </div>
);

*/

/* 

Assining a size to every box and depending on that size, the className is built 

*/

const Box = ({ style, size, className = '', rest }) => {
  const sizeClassName = size ? `box--${size}` : '';
  return (
    <div
      className={`box ${className} ${sizeClassName}`}
      style={{ padding: 20, ...style }}
      {...rest}
    >
      Box
    </div>
  );
};

const LessonSeven = () => {
  return (
    <div className="container">
      <h1>Lesson 7: Style React Components</h1>
      <Box size="small" style={{ backgroundColor: 'lightblue' }}>
        Small Box
      </Box>

      <Box size="medium" style={{ backgroundColor: 'green' }}>
        Medium Box
      </Box>

      <Box size="big" style={{ backgroundColor: 'maroon' }}>
        Big Box
      </Box>
    </div>
  );
};

export default LessonSeven;
