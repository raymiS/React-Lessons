import React, { Component } from 'react';
import VanillaTilt from 'vanilla-tilt';

class Tilt extends Component {
  componentDidMount() {
    VanillaTilt.init(this.rootNode, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5
    });
  }
  render() {
    return (
      <div className="tilt-root" ref={node => (this.rootNode = node)}>
        <div className="tilt-child">
          <div {...this.props} />
        </div>
      </div>
    );
  }
}

class WorkingWithRefs extends Component {
  componentDidMount() {
    console.log(this.rootNode);
  }
  render() {
    return (
      <div>
        <input
          type="text"
          ref={node => {
            this.rootNode = node;
          }}
        />
      </div>
    );
  }
}

const LessonTwelve = () => {
  return (
    <div className="container">
      <div className="totally-centered">
        <Tilt>
          <div className="totally-centered">Tilt Box</div>
        </Tilt>

        <WorkingWithRefs>Wroking with Refs</WorkingWithRefs>
      </div>
    </div>
  );
};

export default LessonTwelve;
