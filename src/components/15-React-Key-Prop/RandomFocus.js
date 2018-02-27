import React, { Component } from 'react';

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

class RandomFocus extends Component {
  state = {
    items: [
      { id: 'a', value: 'apple' },
      { id: 'o', value: 'orange' },
      { id: 'g', value: 'grape' },
      { id: 'p', value: 'pear' }
    ]
  };
  componentDidMount() {
    setInterval(this.randomizeItems, 3000);
  }
  randomizeItems = () => {
    this.setState(({ items }) => ({
      items: shuffle(items)
    }));
  };
  render() {
    const { items } = this.state;
    return (
      <div>
        <div>
          <h1>Without Key</h1>
          {items.map(item => <input value={item.value} />)}
        </div>
        <div>
          <h1>With Key as Index</h1>
          {items.map((item, index) => <input key={index} value={item.value} />)}
        </div>
        <div>
          <h1>With Key</h1>
          {items.map(item => <input key={item.id} value={item.value} />)}
        </div>
      </div>
    );
  }
}

export default RandomFocus;
